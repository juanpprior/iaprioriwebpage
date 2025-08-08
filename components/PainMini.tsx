interface PainItem {
  icon: string
  copy: string
}

interface PainMiniProps {
  items: PainItem[]
}

export default function PainMini({ items }: PainMiniProps) {
  return (
    <section className="section-padding bg-prioria-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te sientes identificado?
          </h2>
          <p className="text-xl text-prioria-gray-400 max-w-2xl mx-auto">
            Estos son los problemas más comunes que enfrentan las empresas que quieren crecer
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-lg font-medium text-prioria-dark leading-relaxed">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
