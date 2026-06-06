import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Paul Agonda | PR Officer Portfolio',
  description: 'Discover Paul Agonda\'s professional portfolio showcasing expertise in public relations, media relations, press releases, and strategic communications for Kenya Media Relations Company.',
  keywords: ['Public Relations', 'PR Officer', 'Media Relations', 'Communications', 'Portfolio'],
}

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          subtitle="Welcome"
          title="Paul Agonda"
          description="Public Relations Officer specializing in media relations, strategic communications, and brand management. Based in Kenya, serving clients across East Africa."
          cta_text="View My Work"
          cta_link="/portfolio"
          background_color="primary"
          align="center"
        />

        {/* About CTA Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm md:text-base font-sans font-bold uppercase tracking-widest text-accent mb-4">
              Learn More
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Discover My Professional Background
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Explore my experience, expertise, and the journey that led me to becoming a leading public relations professional in East Africa.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200 group"
            >
              About Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
