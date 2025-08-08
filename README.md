# PRIORIA - Consultoría Estratégica

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC)](https://tailwindcss.com/)

Sitio web oficial de PRIORIA - Consultoría estratégica que acelera el crecimiento de tu empresa.

> "No es el grande el que se come al chico, es el rápido el que se come al lento."

## 🚀 Características

- **Next.js 14** con App Router
- **React 18** con TypeScript
- **Tailwind CSS 3** para estilos
- **SEO optimizado** con metadatos dinámicos
- **Analytics** con Google Analytics 4
- **Seguridad** con headers de seguridad y CSP
- **Performance** optimizada para Core Web Vitals
- **Responsive** design para todos los dispositivos
- **MDX** para contenido dinámico
- **Newsletter** con Resend
- **Calendly** integración para auditorías
- **Compliance legal** con GDPR, LGPD y leyes mexicanas
- **Cookie consent** banner automático
- **Políticas legales** integradas

## 📁 Estructura del Proyecto

```
/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── subscribe/     # Newsletter subscription
│   ├── audit/             # Audit landing page
│   ├── blog/              # Blog pages
│   ├── services/          # Services page
│   ├── politica-privacidad/ # Privacy policy
│   ├── politica-cookies/  # Cookies policy
│   ├── terminos-condiciones/ # Terms & conditions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── CTAAudit.tsx       # Call-to-action for audit
│   ├── CookieBanner.tsx   # Cookie consent banner
│   ├── Countdown.tsx      # Countdown timer
│   ├── FAQAccordion.tsx   # FAQ component
│   ├── Footer.tsx         # Footer with legal links
│   ├── Hero.tsx           # Hero section
│   ├── MethodCollapse.tsx # Methodology phases
│   ├── PainMini.tsx       # Pain points section
│   ├── PostCard.tsx       # Blog post card
│   ├── PostGrid.tsx       # Blog posts grid
│   ├── ResourcesStrip.tsx # Resources section
│   └── ServicesGrid.tsx   # Services grid
├── content/               # MDX content
│   ├── blog/              # Blog posts
│   └── cases/             # Case studies
├── public/                # Static assets
│   └── img/               # Images
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── next-sitemap.config.js # Sitemap configuration
├── package.json           # Dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 🛠️ Tecnologías

### Frontend
- **Next.js 14** - Framework de React
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 3** - Framework de CSS

### Backend & APIs
- **Next.js API Routes** - API endpoints
- **Resend** - Email service
- **Zod** - Validación de esquemas

### Content & SEO
- **MDX** - Markdown con componentes React
- **next-mdx-remote** - MDX rendering
- **next-sitemap** - Generación de sitemap

### Analytics & Monitoring
- **Google Analytics 4** - Web analytics
- **Vercel Analytics** - Performance monitoring

### Security
- **Content Security Policy** - XSS protection
- **Security Headers** - OWASP compliance
- **Rate Limiting** - API protection

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, o pnpm

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/your-username/iapriori.git
   cd iapriori
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus valores:
   ```env
   # Site Configuration
   SITE_URL=https://iapriori.com
   
   # Analytics
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   
   # Email Service
RESEND_API_KEY=your_resend_api_key_here
NEWSLETTER_LIST_ID=prioria_newsletter

# Security
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# External Services
CALENDLY_URL=https://calendly.com/ia-priori/audit
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint

# Despliegue
npm run postbuild    # Genera sitemap después del build
```

## 🎨 Personalización

### Colores de Marca
Los colores de PRIORIA están definidos en `tailwind.config.js`:

```javascript
colors: {
  'prioria-green': '#5AE386',
  'prioria-dark': '#0D0F21',
  'prioria-gray-100': '#EAEAEA',
  'prioria-gray-400': '#6A6A6A'
}
```

### Tipografía
- **Inter** - Fuente principal (Google Fonts)
- Configurada automáticamente en `app/layout.tsx`

### Componentes
Todos los componentes están en `/components` y siguen las mejores prácticas de React:
- TypeScript para tipado
- Props interfaces definidas
- Componentes reutilizables
- Responsive design

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: < 2.3s (Desktop), < 3s (Mobile)
- **CLS**: < 0.1
- **TBT**: < 200ms

### Optimizaciones Implementadas
- **Next.js Image** para optimización automática
- **Font optimization** con `next/font`
- **Code splitting** automático
- **Lazy loading** de imágenes
- **Bundle analysis** con `@next/bundle-analyzer`

## 🔒 Seguridad

### Headers de Seguridad
Configurados en `vercel.json`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- HSTS

### API Security
- Rate limiting (5 req/min por IP)
- Email validation con Zod
- reCAPTCHA v3 integration
- Input sanitization
- GDPR/LGPD compliance

## 📈 SEO

### Metadatos
- Títulos dinámicos con template
- Open Graph tags
- Twitter Cards
- Structured data (JSON-LD)

### Sitemap
- Generación automática con `next-sitemap`
- Robots.txt incluido
- XML sitemap para motores de búsqueda

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en push

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte nativo
- **DigitalOcean App Platform**: Fácil configuración

## 📧 Newsletter

### Configuración
1. Crear cuenta en [Resend](https://resend.com)
2. Obtener API key
3. Crear audience para newsletter
4. Configurar en `.env.local`

### Funcionalidades
- Suscripción con validación
- Rate limiting
- Welcome email automático
- Integración con Calendly
- Compliance con leyes de privacidad

## ⚖️ Compliance Legal

### Políticas Integradas
- **Política de Privacidad** - `/politica-privacidad`
- **Política de Cookies** - `/politica-cookies`
- **Términos y Condiciones** - `/terminos-condiciones`

### Características de Compliance
- Cookie consent banner automático
- Derechos ARCO/GDPR implementados
- Políticas actualizadas según leyes mexicanas
- Disclaimers legales en footer
- Rate limiting para protección

## 🔧 Desarrollo

### Estructura de Componentes
Cada componente sigue esta estructura:
```typescript
interface ComponentProps {
  // Props tipadas
}

export default function Component({ prop }: ComponentProps) {
  return (
    // JSX con Tailwind classes
  )
}
```

### MDX Content
Los posts del blog y casos de estudio usan MDX:
- Frontmatter para metadatos
- Markdown para contenido
- Componentes React embebidos

### API Routes
Las rutas API están en `app/api/`:
- Edge runtime para mejor performance
- Validación con Zod
- Rate limiting
- Error handling

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [iapriori.com](https://iapriori.com)
- **Email**: contacto@iapriori.com
- **Calendly**: [Agendar auditoría](https://calendly.com/ia-priori/audit)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Vercel](https://vercel.com/) - Plataforma de despliegue
- [Resend](https://resend.com/) - Email service
- [Calendly](https://calendly.com/) - Scheduling

---

## 👨‍💻 Créditos

**Creado por Juan Pablo Prior Ramos** - Sr Developer

---

**PRIORIA** - No es el grande el que se come al chico, es el rápido el que se come al lento.
