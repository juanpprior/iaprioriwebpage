import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | PRIORIA',
    default: 'PRIORIA - No es el grande el que se come al chico, es el rápido el que se come al lento.',
  },
  description: 'PRIORIA - Consultoría estratégica que acelera el crecimiento de tu empresa. No es el grande el que se come al chico, es el rápido el que se come al lento.',
  keywords: ['consultoría estratégica', 'crecimiento empresarial', 'estrategia digital', 'transformación digital'],
  authors: [{ name: 'PRIORIA' }],
  creator: 'PRIORIA',
  publisher: 'PRIORIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iapriori.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://iapriori.com',
    title: 'PRIORIA - Consultoría Estratégica',
    description: 'No es el grande el que se come al chico, es el rápido el que se come al lento.',
    siteName: 'PRIORIA',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PRIORIA - Consultoría Estratégica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIORIA - Consultoría Estratégica',
    description: 'No es el grande el que se come al chico, es el rápido el que se come al lento.',
    images: ['/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5AE386" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PRIORIA",
              "url": "https://iapriori.com",
              "logo": "https://iapriori.com/img/logo.svg",
              "description": "Consultoría estratégica que acelera el crecimiento de tu empresa",
              "foundingDate": "2024",
              "sameAs": [
                "https://linkedin.com/company/prioria",
                "https://twitter.com/prioria"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://calendly.com/ia-priori/audit"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
