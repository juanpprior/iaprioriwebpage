import type { Metadata } from 'next'
import Countdown from '@/components/Countdown'

export const metadata: Metadata = {
  title: 'Auditoría Estratégica Gratuita',
  description: 'Agenda tu auditoría estratégica gratuita y descubre las 3 acciones más impactantes para acelerar el crecimiento de tu empresa.',
  openGraph: {
    title: 'Auditoría Estratégica Gratuita | PRIORIA',
    description: 'Descubre las 3 acciones más impactantes para acelerar el crecimiento de tu empresa.',
  },
}

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-prioria-dark via-prioria-dark to-black text-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Auditoría Estratégica Gratuita
          </h1>
          <p className="text-xl md:text-2xl text-prioria-gray-100 mb-8 max-w-3xl mx-auto">
            Descubre las 3 acciones más impactantes que puedes implementar inmediatamente para acelerar el crecimiento de tu empresa.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Oferta por tiempo limitado</h2>
            <Countdown targetDate="2025-06-30T23:59:00-06:00" />
            <p className="text-prioria-gray-100 mt-4">
              Después de esta fecha, la auditoría tendrá un costo de $500 USD
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">¿Qué incluye la auditoría?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Análisis Estratégico Completo</h3>
                  <p className="text-prioria-gray-100 leading-relaxed">
                    Evaluamos tu situación actual, competencia, oportunidades de mercado y cuellos de botella que están frenando tu crecimiento.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Plan de Acción Priorizado</h3>
                  <p className="text-prioria-gray-100 leading-relaxed">
                    Te entregamos un roadmap claro con las 3 acciones más impactantes que puedes implementar inmediatamente para ver resultados rápidos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sesión de Seguimiento</h3>
                  <p className="text-prioria-gray-100 leading-relaxed">
                    Una sesión adicional para revisar tu progreso, resolver dudas y ajustar estrategias según los resultados obtenidos.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">¿Por qué es gratuita?</h3>
              <p className="text-prioria-gray-100 leading-relaxed">
                Creemos en el valor de demostrar resultados antes de comprometerte. Esta auditoría es nuestra forma de mostrar el impacto que podemos tener en tu empresa.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Agenda tu auditoría</h2>
            <p className="text-prioria-gray-100 mb-6">
              Selecciona una fecha y hora que te funcione. La sesión dura 30 minutos y se realiza por videollamada.
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <iframe
                src="https://calendly.com/ia-priori/audit"
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendly Scheduling"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-prioria-gray-100">
                Sin compromisos • 30 minutos • 100% gratuito
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Preguntas frecuentes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">¿Qué necesito preparar?</h3>
              <p className="text-prioria-gray-100">
                Solo necesitas estar listo para compartir información sobre tu empresa, objetivos y desafíos actuales.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">¿Hay algún compromiso posterior?</h3>
              <p className="text-prioria-gray-100">
                No, la auditoría es completamente gratuita y sin compromisos. Solo trabajamos juntos si decides que es lo mejor para tu empresa.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">¿Cuánto tiempo toma ver resultados?</h3>
              <p className="text-prioria-gray-100">
                Depende de la implementación, pero nuestros clientes suelen ver mejoras significativas en los primeros 30-60 días.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">¿Trabajan con empresas de cualquier tamaño?</h3>
              <p className="text-prioria-gray-100">
                Sí, trabajamos con empresas desde startups hasta medianas empresas. Nuestro enfoque se adapta a tu contexto específico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
