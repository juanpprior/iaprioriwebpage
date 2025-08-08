import type { Metadata } from 'next'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios de consultoría estratégica para acelerar el crecimiento de tu empresa. Estrategia, optimización de procesos, transformación digital y más.',
  openGraph: {
    title: 'Servicios | PRIORIA',
    description: 'Servicios de consultoría estratégica para acelerar el crecimiento de tu empresa.',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-prioria-gray-400 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para acelerar el crecimiento de tu empresa. 
            Cada servicio está optimizado para generar resultados medibles y sostenibles.
          </p>
        </div>
        
        <ServicesGrid />
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-prioria-gray-400 mb-8 max-w-2xl mx-auto">
            Cada empresa es única. Si tienes un desafío específico, podemos crear una solución personalizada para ti.
          </p>
          <a 
            href="/audit" 
            className="btn-primary text-lg px-8 py-4"
          >
            Agenda una consulta gratuita
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
