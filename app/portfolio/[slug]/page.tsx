import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getPostBySlug, getPosts, getFeaturedImageUrl, formatPostDate, decodeHtmlEntities } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = await getPostBySlug(slug, 'portfolio_item')

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The portfolio item you are looking for does not exist.',
    }
  }

  const decodedTitle = decodeHtmlEntities(project.title.rendered)
  const decodedDescription = decodeHtmlEntities(project.excerpt.rendered || `View the ${project.title.rendered} case study`)

  return {
    title: `${decodedTitle} | Portfolio | Paul Agonda`,
    description: decodedDescription,
  }
}

export async function generateStaticParams() {
  const projects = await getPosts('portfolio_item', 100, 0)
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params
  const project = await getPostBySlug(slug, 'portfolio_item')

  if (!project) {
    notFound()
  }

  // Fetch related projects
  const allProjects = await getPosts('portfolio_item', 100, 0)
  const relatedProjects = allProjects.filter((p) => p.id !== project.id).slice(0, 3)

  const featuredImage = getFeaturedImageUrl(project)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Case Study Header */}
        <div className="bg-primary text-primary-foreground py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {decodeHtmlEntities(project.title.rendered)}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time>{formatPostDate(project.date)}</time>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/50" />
              <div className="text-sm">Case Study</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-96 md:h-[500px] bg-muted overflow-hidden">
            <Image
              src={featuredImage}
              alt={project.title.rendered}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* Case Study Content */}
        <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div
                className="text-foreground space-y-6 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: project.content.rendered,
                }}
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-8 bg-card rounded-lg border border-border">
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-accent mb-2">
                  Project Type
                </h3>
                <p className="text-foreground">Public Relations Campaign</p>
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-accent mb-2">
                  Date
                </h3>
                <p className="text-foreground">{formatPostDate(project.date)}</p>
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-accent mb-2">
                  Status
                </h3>
                <p className="text-foreground">Completed</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Interested in a Similar Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help with your public relations and communications needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 md:py-24 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/portfolio/${relatedProject.slug}`}
                    className="group"
                  >
                    <article className="overflow-hidden rounded-lg bg-background shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full flex flex-col">
                      <div className="relative h-40 bg-muted overflow-hidden">
                        <Image
                          src={getFeaturedImageUrl(relatedProject)}
                          alt={relatedProject.title.rendered}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-accent transition-colors mb-3 line-clamp-2">
                          {relatedProject.title.rendered}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                          {relatedProject.excerpt.rendered}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-sans font-bold text-sm group-hover:gap-3 transition-all">
                          View Project
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
