import Link from 'next/link'

interface ResourceLink {
  label: string
  href: string
}

interface ResourcesStripProps {
  links: ResourceLink[]
}

export default function ResourcesStrip({ links }: ResourcesStripProps) {
  return (
    <section className="section-padding bg-prioria-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recursos Gratuitos
          </h2>
          <p className="text-xl text-prioria-gray-400 max-w-2xl mx-auto">
            Accede a contenido de valor para acelerar tu crecimiento empresarial
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            href={links[0]?.href || "/blog"}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-prioria-dark mb-4 group-hover:text-prioria-green transition-colors">
              Blog
            </h3>
            <p className="text-prioria-gray-400 mb-4">
              Artículos sobre estrategia empresarial, crecimiento y transformación digital.
            </p>
            <div className="flex items-center text-prioria-green font-semibold group-hover:translate-x-2 transition-transform">
              Leer artículos
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
          
          <Link 
            href={links[1]?.href || "/masterclass"}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-prioria-dark mb-4 group-hover:text-prioria-green transition-colors">
              Masterclass
            </h3>
            <p className="text-prioria-gray-400 mb-4">
              Sesiones intensivas sobre temas específicos de crecimiento empresarial.
            </p>
            <div className="flex items-center text-prioria-green font-semibold group-hover:translate-x-2 transition-transform">
              Ver masterclass
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
          
          <Link 
            href={links[2]?.href || "#newsletter"}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-prioria-dark mb-4 group-hover:text-prioria-green transition-colors">
              Newsletter
            </h3>
            <p className="text-prioria-gray-400 mb-4">
              Recibe estrategias y tips semanales directamente en tu correo.
            </p>
            <div className="flex items-center text-prioria-green font-semibold group-hover:translate-x-2 transition-transform">
              Suscribirse
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
