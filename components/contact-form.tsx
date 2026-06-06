'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Implement Server Action for form submission
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Get in Touch
          </h2>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:paul.agonda@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  paul.agonda@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+254721222527" className="text-muted-foreground hover:text-accent transition-colors">
                  +254 721 222 527
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Nairobi, Kenya<br />
                  Kenya Media Relations Company
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="font-sans font-bold text-foreground mb-4">Follow</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/okoth-agonda-6707131a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-sans font-bold text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-sans font-bold text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-sans font-bold text-foreground mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-sans font-bold text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-sans">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-sans">
                There was an error sending your message. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-sans font-bold hover:bg-accent-foreground hover:text-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              I'll respond to your message within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
