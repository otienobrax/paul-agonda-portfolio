import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { PortfolioCard } from '@/components/portfolio-card'
import { getPosts, getFeaturedImageUrl, truncateText } from '@/lib/wordpress'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Press Releases | Paul Agonda',
  description: 'Browse press releases and news announcements from Paul Agonda and Kenya Media Relations Company.',
}

export default async function PressReleases() {
  // Fetch all press releases
  const releases = await getPosts('press_release', 100, 0)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          subtitle="Media Center"
          title="Press Releases"
          description="Official press releases, media announcements, and news related to projects and initiatives managed through Kenya Media Relations Company."
          background_color="primary"
          align="center"
        />

        {/* Press Releases Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Official Press Releases
              </h2>
              <p className="text-muted-foreground mt-2">
                {releases.length} press releases from our media center
              </p>
            </div>

            {/* Press Releases Grid */}
            {releases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {releases.map((release) => (
                  <PortfolioCard
                    key={release.id}
                    title={release.title.rendered}
                    slug={release.slug}
                    excerpt={truncateText(release.excerpt.rendered || release.content.rendered, 120)}
                    image_url={getFeaturedImageUrl(release)}
                    image_alt={release.title.rendered}
                    date={release.date}
                    type="press-release"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-lg border border-border">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-foreground font-sans font-bold mb-2">No press releases yet</p>
                <p className="text-muted-foreground text-sm">
                  Press releases will appear here once they are published in WordPress.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Media Information */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Media */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">For Media Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  Journalists and media representatives can reach out for official statements, background information, or expert commentary.
                </p>
                <a href="mailto:media@kenyamediarelations.com" className="text-accent font-sans font-bold hover:text-accent-foreground transition-colors">
                  media@kenyamediarelations.com
                </a>
              </div>

              {/* Distribution */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">Press Release Distribution</h3>
                <p className="text-muted-foreground mb-4">
                  Our press releases are distributed to major media outlets, news agencies, and industry publications across East Africa and beyond.
                </p>
              </div>

              {/* Archives */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">Media Archive</h3>
                <p className="text-muted-foreground mb-4">
                  Access complete archives of past press releases, media kits, and official announcements from our media center.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
