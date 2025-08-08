import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de PRIORIA - Cómo utilizamos las cookies en nuestro sitio web.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-prioria-dark">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-prioria-gray-400 mb-8">
              <strong>Definición:</strong> Cookie = archivo que el sitio envía a tu navegador para almacenar información.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">1. TIPOS DE COOKIES</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Esenciales:</strong> navegación, seguridad (Cloudflare).</li>
                <li><strong>Analíticas:</strong> Google Analytics 4 (ga4).</li>
                <li><strong>Preferencias:</strong> idioma, modo oscuro.</li>
                <li><strong>Marketing:</strong> Ninguna por ahora.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">2. COOKIES DE TERCEROS</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>google.com</strong> (_ga, _gid, _gat) → analítica.</li>
                <li><strong>calendly.com</strong> (calendly_session) → agenda.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">3. ¿CÓMO DESHABILITARLAS?</h2>
              <p className="mb-4">
                Puedes rechazarlas desde el banner inicial o desde la configuración de tu navegador. 
                Desactivar cookies analíticas no afectará el servicio principal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">4. DURACIÓN</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Máx. 2 años (Google)</li>
                <li>21 días (Calendly)</li>
                <li>Sesión (esenciales)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">Configuración de Cookies por Navegador</h2>
              
              <div className="bg-prioria-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-prioria-dark">Chrome</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Abre Configuración</li>
                  <li>Ve a "Privacidad y seguridad"</li>
                  <li>Selecciona "Configuración del sitio"</li>
                  <li>Haz clic en "Cookies y datos del sitio"</li>
                </ol>
              </div>

              <div className="bg-prioria-gray-100 p-6 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-4 text-prioria-dark">Firefox</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Abre Opciones</li>
                  <li>Ve a "Privacidad y seguridad"</li>
                  <li>En "Cookies y datos del sitio"</li>
                  <li>Selecciona "Bloquear cookies"</li>
                </ol>
              </div>

              <div className="bg-prioria-gray-100 p-6 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-4 text-prioria-dark">Safari</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Abre Preferencias</li>
                  <li>Ve a "Privacidad"</li>
                  <li>Selecciona "Bloquear todas las cookies"</li>
                </ol>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">Más Información</h2>
              <p className="mb-4">
                Para más información sobre cómo gestionamos tu privacidad, consulta nuestra 
                <a href="/politica-privacidad" className="text-prioria-green hover:underline"> Política de Privacidad</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
