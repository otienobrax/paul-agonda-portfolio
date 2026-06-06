import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import AboutClient from './AboutClient'

export const metadata = {
  title: 'About | Paul Agonda',
  description:
    'Learn more about Paul Agonda, a Public Relations Officer specializing in media relations and strategic communications.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection
          subtitle="About Me"
          title="Strategic Communications Professional"
          description="With over 8 years of experience in public relations and media management, I help organizations build strong relationships with their audiences through compelling storytelling and strategic communications."
          background_color="primary"
          align="center"
        />

        {/* Client-side animated content */}
        <AboutClient />
      </main>
      <Footer />
    </>
  )
}