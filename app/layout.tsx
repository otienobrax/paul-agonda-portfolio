import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: '#001F3F',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Paul Agonda | PR Portfolio',
  description: 'Public Relations Officer portfolio showcasing professional experience in media relations, press releases, and strategic communications.',
  generator: 'v0.app',
  keywords: ['Public Relations', 'PR', 'Media Relations', 'Communications', 'Portfolio', 'Kenya'],
  authors: [{ name: 'Paul Agonda' }],
  creator: 'Paul Agonda',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
