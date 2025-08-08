import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de PRIORIA - Cómo protegemos y utilizamos tus datos personales.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-prioria-dark">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-prioria-gray-400 mb-8">
              <strong>Fecha de última actualización:</strong> 30/05/2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">1. IDENTIDAD DEL RESPONSABLE</h2>
              <p className="mb-4">
                <strong>Razón social:</strong> PRIORIA CONSULTING S. de R.L. de C.V.<br />
                <strong>Domicilio:</strong> Av. _______ 123, Col. _______, C.P. _____, CDMX, México<br />
                <strong>Correo de contacto:</strong> privacidad@iapriori.com
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">2. DATOS PERSONALES RECABADOS</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identificación:</strong> nombre completo, empresa, cargo.</li>
                <li><strong>Contacto:</strong> correo electrónico, teléfono.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de dispositivo, páginas visitadas.</li>
                <li><strong>Calendly:</strong> información de agenda (fecha y hora).</li>
              </ul>
              <p className="mt-4">No solicitamos datos sensibles.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">3. FINALIDADES</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-prioria-dark">a) Primarias</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Agendar y brindar el <strong>CEO IA-Readiness Audit</strong>.</li>
                <li>Gestionar proyectos y contratos del Método I.A PRIORIA.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-prioria-dark">b) Secundarias</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enviar boletines, artículos de blog, invitaciones a masterclasses.</li>
                <li>Mejorar experiencia web mediante analítica (Google Analytics 4).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">4. BASES DE LICITUD</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consentimiento del titular.</li>
                <li>Interés legítimo para fines de mercadotecnia propia.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">5. TRANSFERENCIAS</h2>
              <p className="mb-4">Compartiremos datos únicamente con:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveedores de correo (Resend), analítica (Google), agenda (Calendly).</li>
                <li>Autoridades si lo exige la ley.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">6. DERECHOS ARCO / GDPR</h2>
              <p className="mb-4">
                (Acceso, Rectificación, Cancelación, Oposición / Acceso, Rectificación, Supresión, Portabilidad, Limitación, Oposición)
              </p>
              <p className="mb-4">
                Envía solicitud a privacidad@iapriori.com con:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre</li>
                <li>Descripción clara de la solicitud</li>
                <li>Identificación oficial escaneada</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">7. SEGURIDAD</h2>
              <p>Empleamos HTTPS, cifrado TLS 1.3, firewalls y backups semanales.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">8. COOKIES</h2>
              <p>Ver <a href="/politica-cookies" className="text-prioria-green hover:underline">"Política de Cookies"</a>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-prioria-dark">9. CAMBIOS AL AVISO</h2>
              <p>Publicaremos actualizaciones en esta URL y cambiará la fecha de "última actualización".</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
