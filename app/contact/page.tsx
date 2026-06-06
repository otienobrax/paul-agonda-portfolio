import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'Contact | Paul Agonda',
  description: 'Get in touch with Paul Agonda for public relations, media relations, and strategic communications services.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          subtitle="Let's Connect"
          title="Get in Touch"
          description="Have a project in mind or want to discuss potential collaborations? I'd love to hear from you. Reach out using the contact form or through the details below."
          background_color="primary"
          align="center"
        />

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-background">
          <ContactForm />
        </section>

        {/* Response Time Info */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-sans font-bold text-lg text-accent mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24 hours during business days.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-accent mb-2">Flexible Consultation</h3>
                <p className="text-muted-foreground">
                  Available for initial consultations via phone, video call, or in-person meetings.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-accent mb-2">Project Based</h3>
                <p className="text-muted-foreground">
                  Customized solutions tailored to your specific PR and communications needs.
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
