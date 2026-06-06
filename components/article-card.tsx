import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { decodeHtmlEntities } from '@/lib/wordpress'

interface ArticleCardProps {
  title: string
  slug: string
  excerpt: string
  image_url: string
  image_alt: string
  date: string
  author?: string
  read_time?: number
}

export function ArticleCard({
  title,
  slug,
  excerpt,
  image_url,
  image_alt,
  date,
  author = 'Paul Agonda',
  read_time = 5,
}: ArticleCardProps) {
  const decodedTitle = decodeHtmlEntities(title)
  const decodedExcerpt = decodeHtmlEntities(excerpt)
  return (
    <Link href={`/articles/${slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300 border border-border">
        <div className="flex flex-col md:flex-row h-full md:h-56">
          {/* Image */}
          <div className="relative w-full md:w-2/5 h-48 md:h-full overflow-hidden bg-muted">
            <Image
              src={image_url}
              alt={image_alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <span>•</span>
                <span>{read_time} min read</span>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {decodedTitle}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {decodedExcerpt}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">By {author}</p>
              <div className="flex items-center gap-1 text-accent font-sans font-bold text-sm group-hover:gap-2 transition-all">
                Read More
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
