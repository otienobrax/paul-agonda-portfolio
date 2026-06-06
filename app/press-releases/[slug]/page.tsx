import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getPostBySlug, getPosts, getFeaturedImageUrl, formatPostDate, decodeHtmlEntities } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, FileText } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const release = await getPostBySlug(slug, 'press_release')

  if (!release) {
    return {
      title: 'Press Release Not Found',
      description: 'The press release you are looking for does not exist.',
    }
  }

  const decodedTitle = decodeHtmlEntities(release.title.rendered)
  const decodedDescription = decodeHtmlEntities(release.excerpt.rendered || `Read the latest press release: ${release.title.rendered}`)

  return {
    title: `${decodedTitle} | Paul Agonda`,
    description: decodedDescription,
  }
}

export async function generateStaticParams() {
  const releases = await getPosts('press_release', 100, 0)
  return releases.map((release) => ({
    slug: release.slug,
  }))
}

export default async function PressReleaseDetail({ params }: Props) {
  const { slug } = await params
  const release = await getPostBySlug(slug, 'press_release')

  if (!release) {
    notFound()
  }

  // Fetch related press releases
  const relatedReleases = await getPosts('press_release', 3, 0)
  const otherReleases = relatedReleases.filter((r) => r.id !== release.id).slice(0, 2)

  const featuredImage = getFeaturedImageUrl(release)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Press Release Header */}
        <article className="bg-background">
          {/* Hero Section */}
          <div className="bg-primary text-primary-foreground py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/press-releases" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft size={18} />
                Back to Press Releases
              </Link>
              <div className="flex items-start gap-3 mb-4">
                <FileText size={24} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-sm font-sans font-bold text-accent">FOR IMMEDIATE RELEASE</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {decodeHtmlEntities(release.title.rendered)}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <time>{formatPostDate(release.date)}</time>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/50" />
                <div className="text-sm">Kenya Media Relations Company</div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative w-full h-96 md:h-[500px] bg-muted overflow-hidden">
              <Image
                src={featuredImage}
                alt={release.title.rendered}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          )}

          {/* Press Release Content */}
          <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div
                  className="text-foreground space-y-6 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{
                    __html: release.content.rendered,
                  }}
                />
              </div>

              {/* Press Release Footer */}
              <div className="border-t border-border pt-8">
                <div className="bg-card p-8 rounded-lg border border-border mb-12">
                  <h3 className="font-sans font-bold text-foreground mb-4">About Kenya Media Relations Company</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kenya Media Relations Company is a leading public relations and communications firm specializing in strategic media relations, corporate communications, and brand management across East Africa.
                  </p>
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm font-sans font-bold text-foreground mb-1">Media Contact:</p>
                    <p className="text-sm text-muted-foreground">Paul Agonda</p>
                    <p className="text-sm text-accent font-sans font-bold">media@kenyamediarelations.com</p>
                  </div>
                </div>

                {/* Related Press Releases */}
                {otherReleases.length > 0 && (
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Other Press Releases
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {otherReleases.map((relatedRelease) => (
                        <Link
                          key={relatedRelease.id}
                          href={`/press-releases/${relatedRelease.slug}`}
                          className="group"
                        >
                          <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                            <div className="relative h-32 bg-muted overflow-hidden">
                              <Image
                                src={getFeaturedImageUrl(relatedRelease)}
                                alt={relatedRelease.title.rendered}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="p-4">
                              <p className="text-xs text-muted-foreground mb-2">
                                {formatPostDate(relatedRelease.date)}
                              </p>
                              <h4 className="font-serif font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                {relatedRelease.title.rendered}
                              </h4>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Need Media Support or Press Inquiries?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contact our media relations team for official statements, interviews, or press information.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
