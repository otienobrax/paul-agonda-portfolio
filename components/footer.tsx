import Link from 'next/link'
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import { LinkedInIcon, XIcon, FacebookIcon } from "./icons/BrandIcons";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif font-bold text-lg mb-2">Paul Agonda</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Public Relations Officer
            </p>
            <p className="text-xs text-primary-foreground/60">
              Kenya Media Relations Company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Press Releases
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Media Relations
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Communications
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:paul.agonda@gmail.com" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                <Mail size={16} />
                paul.agonda@gmail.com
              </a>
              <a href="tel:+254721222527" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                <Phone size={16} />
                +254 721 222 527
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/okoth-agonda-6707131a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="mailto:paul.agonda@gmail.com"
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
                href="https://x.com/Polars2011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
            >
                <XIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1GZo3Vqf37/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              <FacebookIcon size={20} />
            </a>

          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-primary-foreground/60">
            <p>
              © {currentYear} Paul Agonda. All rights reserved. | Kenya Media Relations Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
