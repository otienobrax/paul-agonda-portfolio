import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Briefcase, Award, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'About | Paul Agonda',
  description: 'Learn more about Paul Agonda, a Public Relations Officer specializing in media relations and strategic communications at Kenya Media Relations Company.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          subtitle="About Me"
          title="Strategic Communications Professional"
          description="With over 8 years of experience in public relations and media management, I help organizations build strong relationships with their audiences through compelling storytelling and strategic communications."
          background_color="primary"
          align="center"
        />

        {/* Professional Summary */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professional Background
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  As a dedicated Public Relations Officer at Kenya Media Relations Company, I bring a strategic approach to media management and communications. My career has been built on the foundation of understanding media dynamics, crafting compelling narratives, and building lasting relationships with key stakeholders.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  My expertise spans across press release writing, media relations, crisis communications, brand positioning, and strategic communication planning. I've successfully managed public relations initiatives for organizations across various sectors, including technology, finance, healthcare, and non-profit organizations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Nairobi, Kenya, I work with clients throughout East Africa, helping them navigate the complex media landscape and amplify their brand message to reach their target audiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Competencies
              </h2>
              <p className="text-lg text-muted-foreground">
                Key areas of expertise and specialization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Financial reporting and analysis */}
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent text-accent-foreground mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  Financial reporting and analysis
                </h3>
                <p className="text-sm text-muted-foreground">
                  Preparing and analyzing financial reports to provide insights for strategic decision-making.
                </p>
              </div>

              {/* Reputation Management */}
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent text-accent-foreground mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  Reputation Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Protecting and enhancing organizational reputation through proactive communication strategies and crisis management.
                </p>
              </div>

              {/* Strategic Communications */}
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent text-accent-foreground mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  Strategic Communications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Developing comprehensive communication strategies aligned with organizational goals and target audience needs.
                </p>
              </div>

              {/* Crisis Communications */}
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent text-accent-foreground mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  Crisis Communications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Managing reputation during challenging situations with swift, transparent, and strategic communication responses.
                </p>
              </div>

              {/* Content Development */}
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent text-accent-foreground mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  Content Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creating compelling and informative content for various channels and audiences, ensuring consistency and brand alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Experience */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Professional Journey
            </h2>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2 mb-4" />
                  <div className="w-1 h-24 bg-border" />
                </div>
                <div className="pb-12">
                  <h3 className="font-sans font-bold text-lg text-foreground mb-1">
                    Public Relations Officer
                  </h3>
                  <p className="text-sm text-accent font-sans font-bold mb-3">
                    Kenya Media Relations Company | Present
                  </p>
                  <p className="text-muted-foreground">
                    Leading comprehensive public relations and media management initiatives for diverse clientele across East Africa. Responsible for strategy development, media relations, press release writing, and campaign execution.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2 mb-4" />
                  <div className="w-1 h-24 bg-border" />
                </div>
                <div className="pb-12">
                  <h3 className="font-sans font-bold text-lg text-foreground mb-1">
                    Senior Communications Specialist
                  </h3>
                  <p className="text-sm text-accent font-sans font-bold mb-3">
                    Previous Organization | 2015 - 2022
                  </p>
                  <p className="text-muted-foreground">
                    Managed communication strategies for multiple high-profile clients. Developed and executed integrated PR campaigns, coordinated media placements, and maintained media relationships across regional publications.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2 mb-4" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-1">
                    Communications Coordinator
                  </h3>
                  <p className="text-sm text-accent font-sans font-bold mb-3">
                    Starting Organization | 2013 - 2015
                  </p>
                  <p className="text-muted-foreground">
                    Began career in communications, assisting with media outreach, event coordination, and internal communications. Built foundational skills in press release writing and media relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skill Category 1 */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                  Communications
                </h3>
                <div className="space-y-3">
                  {['Press Release Writing', 'Media Relations', 'Strategic Communications', 'Crisis Management', 'Speech Writing', 'Content Creation'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Category 2 */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                  Management & Tools
                </h3>
                <div className="space-y-3">
                  {['Campaign Management', 'Event Coordination', 'Media Database Management', 'Social Media Management', 'Analytics & Reporting', 'Project Management'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Category 3 */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                  Industry Knowledge
                </h3>
                <div className="space-y-3">
                  {['Technology', 'Finance', 'Healthcare', 'Non-Profit', 'Consumer Goods', 'Manufacturing'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Category 4 */}
              <div>
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">
                  Geographic Focus
                </h3>
                <div className="space-y-3">
                  {['Kenya', 'East Africa', 'Regional Media', 'Pan-African Networks', 'International Media', 'Digital Platforms'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
              Education & Certifications
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  Bachelor of Arts in Communication
                </h3>
                <p className="text-accent text-sm font-sans font-bold mb-2">
                  University Name | Graduation Year
                </p>
                <p className="text-muted-foreground">
                  Specialized in public relations, media studies, and strategic communications with a focus on the East African media landscape.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  Professional PR Certification
                </h3>
                <p className="text-accent text-sm font-sans font-bold mb-2">
                  International PR Organization | Year
                </p>
                <p className="text-muted-foreground">
                  Advanced training in strategic communications, crisis management, and media relations.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  Digital Marketing & Communications
                </h3>
                <p className="text-accent text-sm font-sans font-bold mb-2">
                  Online Professional Development | Ongoing
                </p>
                <p className="text-muted-foreground">
                  Continuous learning in digital PR, social media strategy, and modern communication tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let's discuss how my expertise in public relations and communications can benefit your organization.
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
