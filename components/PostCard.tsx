import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface Post {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  featuredImage: string
  category: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-prioria-green text-prioria-dark px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-prioria-gray-400 mb-3">
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), 'dd MMM yyyy', { locale: es })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-prioria-dark mb-3 group-hover:text-prioria-green transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-prioria-gray-400 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-prioria-green font-semibold mt-4 group-hover:translate-x-2 transition-transform">
          Leer más
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
