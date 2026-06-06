import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getPostBySlug, getPosts, getFeaturedImageUrl, formatPostDate, decodeHtmlEntities } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = await getPostBySlug(slug, 'posts')

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }

  const decodedTitle = decodeHtmlEntities(article.title.rendered)
  const decodedDescription = decodeHtmlEntities(article.excerpt.rendered || `Read the latest article on ${article.title.rendered}`)

  return {
    title: `${decodedTitle} | Paul Agonda`,
    description: decodedDescription,
  }
}

export async function generateStaticParams() {
  const articles = await getPosts('posts', 100, 0)
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticleDetail({ params }: Props) {
  const { slug } = await params
  const article = await getPostBySlug(slug, 'posts')

  if (!article) {
    notFound()
  }

  // Fetch related articles (same category)
  const relatedArticles = await getPosts('posts', 3, 0)
  const otherArticles = relatedArticles.filter((a) => a.id !== article.id).slice(0, 2)

  const featuredImage = getFeaturedImageUrl(article)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Article Header */}
        <article className="bg-background">
          {/* Hero Section */}
          <div className="bg-primary text-primary-foreground py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/articles" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                <ArrowLeft size={18} />
                Back to Articles
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {decodeHtmlEntities(article.title.rendered)}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <time>{formatPostDate(article.date)}</time>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/50" />
                <div className="text-sm">By Paul Agonda</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/50" />
                <div className="text-sm">5 min read</div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative w-full h-96 md:h-[500px] bg-muted overflow-hidden">
              <Image
                src={featuredImage}
                alt={article.title.rendered}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div
                  className="text-foreground space-y-6 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: article.content.rendered,
                  }}
                />
              </div>

              {/* Article Footer */}
              <div className="border-t border-border pt-8">
                <div className="bg-card p-8 rounded-lg border border-border mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-serif font-bold text-xl">PA</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-foreground mb-1">Paul Agonda</h3>
                      <p className="text-sm text-accent font-sans font-bold mb-2">Public Relations Officer</p>
                      <p className="text-sm text-muted-foreground">
                        PR specialist with 8+ years of experience in media relations, strategic communications, and brand management across East Africa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                {otherArticles.length > 0 && (
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Related Articles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {otherArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.id}
                          href={`/articles/${relatedArticle.slug}`}
                          className="group"
                        >
                          <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                            <div className="relative h-32 bg-muted overflow-hidden">
                              <Image
                                src={getFeaturedImageUrl(relatedArticle)}
                                alt={relatedArticle.title.rendered}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="p-4">
                              <p className="text-xs text-muted-foreground mb-2">
                                {formatPostDate(relatedArticle.date)}
                              </p>
                              <h4 className="font-serif font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                {relatedArticle.title.rendered}
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
              Ready to Elevate Your PR Strategy?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let's discuss how strategic communications can benefit your organization.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
