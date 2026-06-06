import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  cta_text?: string
  cta_link?: string
  background_color?: 'primary' | 'accent' | 'secondary'
  align?: 'center' | 'left'
}

export function HeroSection({
  title,
  subtitle,
  description,
  cta_text = 'Get Started',
  cta_link = '/contact',
  background_color = 'primary',
  align = 'center',
}: HeroSectionProps) {
  const bgClass = {
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
  }[background_color]

  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <section className={`${bgClass} py-20 md:py-32 px-4 sm:px-6 lg:px-8`}>
      <div className={`max-w-4xl mx-auto flex flex-col ${alignClass} justify-center min-h-[400px] md:min-h-[500px]`}>
        {subtitle && (
          <p className="text-sm md:text-base font-sans font-bold uppercase tracking-widest text-accent mb-4">
            {subtitle}
          </p>
        )}
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-95">
            {description}
          </p>
        )}

        {cta_text && cta_link && (
          <Link
            href={cta_link}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200 group"
          >
            {cta_text}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </section>
  )
}
