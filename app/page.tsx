/**
 * Home Page Component
 * @author Juan Pablo Prior Ramos - Sr Developer
 */

import Hero from '@/components/Hero'
import PainMini from '@/components/PainMini'
import MethodCollapse from '@/components/MethodCollapse'
import ServicesGrid from '@/components/ServicesGrid'
import CTAAudit from '@/components/CTAAudit'
import ResourcesStrip from '@/components/ResourcesStrip'
import FAQAccordion from '@/components/FAQAccordion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="No es el grande el que se come al chico, es el rápido el que se come al lento."
        subtitle="PRIORIA acelera el crecimiento de tu empresa con estrategias que funcionan. Consultoría estratégica que transforma ideas en resultados."
        ctaLabel="Agenda tu auditoría gratuita"
        ctaHref="/audit"
      />
      
      <PainMini 
        items={[
          {
            icon: "⚡",
            copy: "Tu competencia se mueve más rápido que tú"
          },
          {
            icon: "📈",
            copy: "No sabes por dónde empezar para crecer"
          },
          {
            icon: "💰",
            copy: "Estás perdiendo oportunidades de mercado"
          }
        ]}
      />
      
      <MethodCollapse 
        phases={[
          {
            title: "Diagnóstico Estratégico",
            desc: "Analizamos tu situación actual, competencia y oportunidades de mercado para identificar el camino más rápido hacia el crecimiento."
          },
          {
            title: "Plan de Acción Priorizado",
            desc: "Desarrollamos un roadmap claro con las acciones más impactantes que puedes implementar inmediatamente."
          },
          {
            title: "Implementación Acelerada",
            desc: "Te acompañamos en la ejecución de las estrategias clave para maximizar resultados en el menor tiempo posible."
          }
        ]}
      />
      
      <ServicesGrid id="services" />
      
      <CTAAudit calendlyUrl={process.env.CALENDLY_URL || "https://calendly.com/ia-priori/audit"} />
      
      <ResourcesStrip 
        links={[
          { label: "Blog", href: "/blog" },
          { label: "Masterclass", href: "/masterclass" },
          { label: "Newsletter", href: "#newsletter" }
        ]}
      />
      
      <FAQAccordion 
        items={[
          {
            question: "¿Cuánto tiempo toma ver resultados?",
            answer: "Nuestros clientes suelen ver mejoras significativas en los primeros 30-60 días. El tiempo exacto depende de tu situación actual y la velocidad de implementación."
          },
          {
            question: "¿Trabajan con empresas de cualquier tamaño?",
            answer: "Sí, trabajamos con empresas desde startups hasta medianas empresas. Nuestro enfoque se adapta a tu contexto específico y recursos disponibles."
          },
          {
            question: "¿Qué incluye la auditoría gratuita?",
            answer: "La auditoría incluye un análisis completo de tu situación actual, identificación de oportunidades de crecimiento, y un plan de acción priorizado con las 3 acciones más impactantes."
          },
          {
            question: "¿Ofrecen servicios continuos o solo consultoría puntual?",
            answer: "Ofrecemos ambos. Puedes contratar servicios puntuales para proyectos específicos o un acompañamiento continuo para maximizar resultados a largo plazo."
          }
        ]}
      />
    </main>
  )
}
