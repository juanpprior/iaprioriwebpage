'use client'

interface CTAAuditProps {
  calendlyUrl: string
}

export default function CTAAudit({ calendlyUrl }: CTAAuditProps) {
  const handleCalendlyClick = () => {
    // Open Calendly in a new window
    window.open(calendlyUrl, '_blank', 'width=600,height=700')
  }

  return (
    <section className="section-padding bg-gradient-to-r from-prioria-dark to-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para acelerar tu crecimiento?
          </h2>
          <p className="text-xl text-prioria-gray-100 mb-8 max-w-2xl mx-auto">
            Agenda tu auditoría estratégica gratuita y descubre las 3 acciones más impactantes que puedes implementar inmediatamente para acelerar el crecimiento de tu empresa.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">¿Qué incluye la auditoría?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Análisis Estratégico</h4>
                  <p className="text-prioria-gray-100 text-sm">Evaluación completa de tu situación actual y oportunidades de mercado.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Plan de Acción</h4>
                  <p className="text-prioria-gray-100 text-sm">Las 3 acciones más impactantes que puedes implementar inmediatamente.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-prioria-green text-prioria-dark font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Seguimiento</h4>
                  <p className="text-prioria-gray-100 text-sm">Una sesión de seguimiento para revisar tu progreso y ajustar estrategias.</p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleCalendlyClick}
            className="btn-primary text-lg px-8 py-4 bg-prioria-green text-prioria-dark hover:bg-opacity-90"
          >
            Agendar Auditoría Gratuita
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          
          <p className="text-sm text-prioria-gray-100 mt-4">
            Sin compromisos • 30 minutos • 100% gratuito
          </p>
        </div>
      </div>
    </section>
  )
}
