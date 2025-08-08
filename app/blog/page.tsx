import type { Metadata } from 'next'
import PostGrid from '@/components/PostGrid'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre estrategia empresarial, crecimiento y transformación digital. Conoce las mejores prácticas para acelerar el crecimiento de tu empresa.',
  openGraph: {
    title: 'Blog | PRIORIA',
    description: 'Artículos sobre estrategia empresarial, crecimiento y transformación digital.',
  },
}

// Mock data - in real app this would come from MDX files
const mockPosts = [
  {
    slug: 'chatgpt-mitos',
    title: 'Los 5 mitos más comunes sobre ChatGPT en el negocio',
    excerpt: 'Descubre la verdad sobre cómo ChatGPT puede realmente transformar tu empresa y cuáles son los mitos que debes ignorar.',
    publishedAt: '2024-01-15',
    readingTime: '5 min',
    featuredImage: '/img/blog/chatgpt.webp',
    category: 'Tecnología'
  },
  {
    slug: 'estrategia-crecimiento',
    title: 'Estrategia de crecimiento: ¿Por dónde empezar?',
    excerpt: 'Una guía paso a paso para desarrollar una estrategia de crecimiento efectiva que funcione para tu empresa específica.',
    publishedAt: '2024-01-10',
    readingTime: '8 min',
    featuredImage: '/img/blog/estrategia.webp',
    category: 'Estrategia'
  },
  {
    slug: 'transformacion-digital',
    title: 'Transformación digital: Más allá de la tecnología',
    excerpt: 'La transformación digital no es solo sobre herramientas, es sobre cambiar la mentalidad de toda la organización.',
    publishedAt: '2024-01-05',
    readingTime: '6 min',
    featuredImage: '/img/blog/transformacion.webp',
    category: 'Digital'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-prioria-gray-400 max-w-2xl mx-auto">
            Artículos sobre estrategia empresarial, crecimiento y transformación digital
          </p>
        </div>
        
        <PostGrid posts={mockPosts} />
      </div>
    </main>
  )
}
