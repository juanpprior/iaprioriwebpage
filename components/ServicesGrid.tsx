interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

interface ServicesGridProps {
  id?: string
}

export default function ServicesGrid({ id }: ServicesGridProps) {
  const services: Service[] = [
    {
      title: "Estrategia de Crecimiento",
      description: "Desarrollamos un plan estratégico personalizado para acelerar tu crecimiento empresarial.",
      icon: "🚀",
      features: [
        "Análisis de mercado y competencia",
        "Identificación de oportunidades",
        "Roadmap de implementación",
        "Métricas de seguimiento"
      ]
    },
    {
      title: "Optimización de Procesos",
      description: "Identificamos y eliminamos cuellos de botella para mejorar la eficiencia operativa.",
      icon: "⚡",
      features: [
        "Mapeo de procesos actuales",
        "Identificación de ineficiencias",
        "Rediseño de flujos de trabajo",
        "Implementación de mejoras"
      ]
    },
    {
      title: "Transformación Digital",
      description: "Te ayudamos a digitalizar tu negocio y aprovechar las tecnologías emergentes.",
      icon: "💻",
      features: [
        "Evaluación de madurez digital",
        "Selección de tecnologías",
        "Plan de implementación",
        "Capacitación del equipo"
      ]
    },
    {
      title: "Marketing Estratégico",
      description: "Creamos estrategias de marketing que generan resultados medibles y crecimiento sostenible.",
      icon: "📈",
      features: [
        "Análisis de audiencia",
        "Estrategia de posicionamiento",
        "Plan de contenidos",
        "Optimización de conversiones"
      ]
    },
    {
      title: "Gestión de Ventas",
      description: "Optimizamos tu proceso de ventas para aumentar ingresos y mejorar la retención de clientes.",
      icon: "💰",
      features: [
        "Análisis del funnel de ventas",
        "Optimización de procesos",
        "Capacitación del equipo",
        "Sistemas de seguimiento"
      ]
    },
    {
      title: "Consultoría Ejecutiva",
      description: "Acompañamiento personalizado para CEOs y equipos directivos en decisiones estratégicas.",
      icon: "🎯",
      features: [
        "Sesiones de coaching ejecutivo",
        "Análisis de decisiones críticas",
        "Desarrollo de liderazgo",
        "Planificación estratégica"
      ]
    }
  ]

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-prioria-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para acelerar el crecimiento de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-prioria-gray-100 rounded-xl p-8 hover:border-prioria-green hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-prioria-dark mb-4">
                {service.title}
              </h3>
              <p className="text-prioria-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-prioria-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-prioria-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
