import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email validation schema
const subscribeSchema = z.object({
  email: z.string().email('Email inválido'),
  recaptchaToken: z.string().optional(),
})

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 5

  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta de nuevo en 1 minuto.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = subscribeSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.error.errors },
        { status: 400 }
      )
    }

    const { email, recaptchaToken } = validation.data

    // Verify reCAPTCHA if token provided
    if (recaptchaToken) {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: recaptchaToken,
        }),
      })

      const recaptchaData = await recaptchaResponse.json()
      
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
          { error: 'Verificación de reCAPTCHA fallida' },
          { status: 400 }
        )
      }
    }

    // Add to Resend audience
    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audience_id: process.env.NEWSLETTER_LIST_ID || 'prioria_newsletter',
      })
    } catch (error: any) {
      // If contact already exists, that's fine
      if (error.statusCode !== 409) {
        console.error('Resend error:', error)
        return NextResponse.json(
          { error: 'Error al suscribir al newsletter' },
          { status: 500 }
        )
      }
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'PRIORIA <newsletter@iapriori.com>',
        to: email,
        subject: '¡Bienvenido a PRIORIA!',
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0D0F21;">¡Bienvenido a PRIORIA!</h1>
            <p style="color: #6A6A6A; line-height: 1.6;">
              Gracias por suscribirte a nuestro newsletter. Recibirás estrategias y tips semanales 
              para acelerar el crecimiento de tu empresa.
            </p>
            <p style="color: #6A6A6A; line-height: 1.6;">
              Mientras tanto, ¿por qué no agendamos una auditoría estratégica gratuita?
            </p>
            <a href="${process.env.CALENDLY_URL}" 
               style="background-color: #5AE386; color: #0D0F21; padding: 12px 24px; 
                      text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
              Agendar Auditoría
            </a>
          </div>
        `,
      })
    } catch (error) {
      console.error('Welcome email error:', error)
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json(
      { message: 'Suscripción exitosa' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
