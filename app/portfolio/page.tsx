import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { PortfolioCard } from '@/components/portfolio-card'
import { getPosts, getFeaturedImageUrl, truncateText } from '@/lib/wordpress'
import { Filter } from 'lucide-react'

export const metadata = {
  title: 'Portfolio | Paul Agonda',
  description: 'Explore Paul Agonda\'s portfolio of successful PR campaigns, media relations projects, and strategic communications initiatives.',
}

export default async function Portfolio() {
  // Fetch all portfolio items
  const portfolioItems = await getPosts('portfolio_item', 100, 0)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          subtitle="My Work"
          title="Professional Portfolio"
          description="A curated selection of successful public relations campaigns, media management projects, and strategic communications initiatives that showcase expertise and impact."
          background_color="primary"
          align="center"
        />

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Controls */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  All Projects
                </h2>
                <p className="text-muted-foreground mt-2">
                  {portfolioItems.length} projects showcasing diverse expertise
                </p>
              </div>
              <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-card transition-colors">
                <Filter size={18} />
                <span className="text-sm font-sans font-bold">Filter</span>
              </button>
            </div>

            {/* Portfolio Grid */}
            {portfolioItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                  <PortfolioCard
                    key={item.id}
                    title={item.title.rendered}
                    slug={item.slug}
                    excerpt={truncateText(item.excerpt.rendered || item.content.rendered, 120)}
                    image_url={getFeaturedImageUrl(item)}
                    image_alt={item.title.rendered}
                    date={item.date}
                    type="portfolio"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-lg border border-border">
                <svg className="mx-auto h-12 w-12 text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-foreground font-sans font-bold mb-2">No portfolio items yet</p>
                <p className="text-muted-foreground text-sm">
                  Get started by adding portfolio items in WordPress. Check the WORDPRESS_SETUP.md guide for instructions.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              See Something You Like?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to discuss how I can help with your public relations and communications needs? Let's connect.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
