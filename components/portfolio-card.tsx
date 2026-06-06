import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { decodeHtmlEntities } from '@/lib/wordpress'

interface PortfolioCardProps {
  title: string
  slug: string
  excerpt: string
  image_url: string
  image_alt: string
  client?: string
  date?: string
  type?: 'portfolio' | 'press-release'
}

export function PortfolioCard({
  title,
  slug,
  excerpt,
  image_url,
  image_alt,
  client,
  date,
  type = 'portfolio',
}: PortfolioCardProps) {
  const decodedTitle = decodeHtmlEntities(title)
  const decodedExcerpt = decodeHtmlEntities(excerpt)
  const href = type === 'press-release' ? `/press-releases/${slug}` : `/portfolio/${slug}`

  return (
    <Link href={href}>
      <article className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-accent">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
          <Image
            src={image_url}
            alt={image_alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-3">
            {client && (
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent">
                {client}
              </span>
            )}
            {date && (
              <time className="text-xs text-muted-foreground">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </time>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {decodedTitle}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {decodedExcerpt}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-accent font-sans font-bold text-sm group-hover:gap-3 transition-all">
            Read Case Study
            <ArrowUpRight size={16} />
          </div>
        </div>
      </article>
    </Link>
  )
}
