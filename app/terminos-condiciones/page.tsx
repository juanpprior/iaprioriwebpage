import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del sitio web de PRIORIA.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-prioria-dark">
            Términos y Condiciones de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">1. Aceptación</h2>
              <p>
                Al acceder a "iapriori.com" aceptas estos términos y todas las leyes aplicables.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">2. Servicios</h2>
              <p className="mb-4">
                PRIORIA ofrece contenidos informativos, descargas gratuitas y servicios de consultoría. 
                El "CEO IA-Readiness Audit" es gratuito pero condicionado a cumplir requisitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>CEO o tomador de decisiones</li>
                <li>Más de 50 empleados</li>
                <li>Facturación superior a $50 M MXN</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido (textos, marca, gráficos) pertenece a PRIORIA. 
                Queda prohibida su reproducción sin permiso escrito.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">4. Uso de la Web</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>No enviar código malicioso, spam o intento de hacking.</li>
                <li>No usar información con fines ilícitos ni difamatorios.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">5. Limitación de responsabilidad</h2>
              <p>
                Los contenidos se proporcionan "tal cual". PRIORIA no garantiza resultados específicos 
                en implementaciones ajenas al Método I.A PRIORIA contratado formalmente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">6. Modificaciones</h2>
              <p>
                Podemos actualizar estos términos en cualquier momento; los cambios serán efectivos 
                una vez publicados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">7. Ley aplicable y jurisdicción</h2>
              <p>
                Se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se someterá 
                a los tribunales competentes de la CDMX.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">8. Contacto</h2>
              <p>
                <a href="mailto:legal@iapriori.com" className="text-prioria-green hover:underline">
                  legal@iapriori.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
