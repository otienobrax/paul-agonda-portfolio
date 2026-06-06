// TypeScript interfaces for the PR portfolio application

export interface Portfolio {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featured_media_url: string
  featured_media_alt: string
  date: string
  client_name?: string
  challenge?: string
  results?: string
  project_images?: string[]
}

export interface PressRelease {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featured_media_url: string
  featured_media_alt: string
  date: string
  publication_name?: string
  publication_date?: string
  pdf_link?: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featured_media_url: string
  featured_media_alt: string
  date: string
  author: string
  categories?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface ProfessionalProfile {
  name: string
  title: string
  company: string
  bio: string
  email: string
  phone?: string
  location: string
  image_url: string
  social_links: SocialLink[]
  experience_years?: number
}

export interface PageMeta {
  title: string
  description: string
  ogImage?: string
  canonicalUrl?: string
}
