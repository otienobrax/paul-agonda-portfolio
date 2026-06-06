import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ArticleCard } from '@/components/article-card'
import { getPosts, getFeaturedImageUrl, truncateText } from '@/lib/wordpress'

export const metadata = {
  title: 'Articles | Paul Agonda',
  description: 'Read articles about public relations, media relations, strategic communications, and industry insights from Paul Agonda.',
}

export default async function Articles() {
  // Fetch all blog posts
  const articles = await getPosts('posts', 100, 0)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          subtitle="Insights & Articles"
          title="Blog & Publications"
          description="Thoughts, best practices, and industry insights on public relations, media relations, and strategic communications."
          background_color="primary"
          align="center"
        />

        {/* Articles Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-muted-foreground">
                {articles.length} articles on communications, media relations, and PR strategy
              </p>
            </div>

            {/* Articles List */}
            {articles.length > 0 ? (
              <div className="space-y-8">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title.rendered}
                    slug={article.slug}
                    excerpt={truncateText(article.excerpt.rendered || article.content.rendered, 150)}
                    image_url={getFeaturedImageUrl(article)}
                    image_alt={article.title.rendered}
                    date={article.date}
                    read_time={5}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-lg border border-border">
                <svg className="mx-auto h-12 w-12 text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25S6.5 28 12 28s10-4.745 10-10.75S17.5 6.253 12 6.253z" />
                </svg>
                <p className="text-foreground font-sans font-bold mb-2">No articles published yet</p>
                <p className="text-muted-foreground text-sm">
                  Articles will appear here once they are published in WordPress. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified when new articles are published on PR strategy, media relations, and communications.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
