import PostCard from './PostCard'

interface Post {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  featuredImage: string
  category: string
}

interface PostGridProps {
  posts: Post[]
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
