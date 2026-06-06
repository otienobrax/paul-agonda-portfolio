// WordPress API Integration Module
// This module handles all communication with the Headless WordPress backend

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com'

interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media: number
  slug: string
  date: string
  author: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

interface Portfolio extends WordPressPost {
  acf?: {
    client_name?: string
    challenge?: string
    results?: string
    project_images?: string[]
  }
}

interface PressRelease extends WordPressPost {
  acf?: {
    publication_date?: string
    publication_name?: string
    pdf_link?: string
  }
}

interface BlogPost extends WordPressPost {
  categories?: number[]
}

export interface FeaturedImage {
  id: number
  source_url: string
  alt_text: string
}

/**
 * Fetch posts from WordPress with error handling and caching
 */
export async function getPosts(
  type: 'posts' | 'portfolio_item' | 'press_release' = 'posts',
  limit: number = 10,
  offset: number = 0
): Promise<WordPressPost[]> {
  try {
    // Check if WordPress URL is configured
    console.log('[v0] getPosts called for type:', type, 'WORDPRESS_URL:', WORDPRESS_URL)
    if (!WORDPRESS_URL || WORDPRESS_URL.includes('your-wordpress-site.com')) {
      console.log('[v0] Using demo mode for type:', type)
      return getDemoData(type, limit)
    }

    const endpoint = type === 'posts' 
      ? `${WORDPRESS_URL}/wp-json/wp/v2/posts`
      : `${WORDPRESS_URL}/wp-json/wp/v2/${type}`

    console.log('[v0] Fetching from:', endpoint)
    const response = await fetch(
      `${endpoint}?per_page=${limit}&offset=${offset}&_embed`,
      { 
        next: { revalidate: 60 } // Revalidate every 60 seconds for development
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch ${type}: ${response.statusText}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new Error(`Invalid response type. Expected JSON, got ${contentType}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${type}:`, error)
    console.log('[v0] Falling back to demo data for type:', type)
    return getDemoData(type, limit)
  }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(
  slug: string,
  type: 'posts' | 'portfolio_item' | 'press_release' = 'posts'
): Promise<WordPressPost | null> {
  try {
    // Check if WordPress URL is configured
    if (!WORDPRESS_URL || WORDPRESS_URL.includes('your-wordpress-site.com')) {
      console.log('[v0] Using demo mode for slug:', slug)
      const demoData = getDemoData(type, 100)
      return demoData.find(post => post.slug === slug) || null
    }

    const endpoint = type === 'posts'
      ? `${WORDPRESS_URL}/wp-json/wp/v2/posts`
      : `${WORDPRESS_URL}/wp-json/wp/v2/${type}`

    const response = await fetch(
      `${endpoint}?slug=${slug}&_embed`,
      { 
        next: { revalidate: 60 }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new Error(`Invalid response type. Expected JSON, got ${contentType}`)
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error)
    const demoData = getDemoData(type, 100)
    return demoData.find(post => post.slug === slug) || null
  }
}

/**
 * Get featured image URL for a post
 */
export function getFeaturedImageUrl(post: WordPressPost): string {
  if (post._embedded?.['wp:featuredmedia']?.[0]) {
    return post._embedded['wp:featuredmedia'][0].source_url
  }
  return '/placeholder-image.jpg'
}

/**
 * Get featured image data for a post
 */
export function getFeaturedImage(post: WordPressPost): FeaturedImage | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (media) {
    return {
      id: post.featured_media,
      source_url: media.source_url,
      alt_text: media.alt_text || 'Featured image',
    }
  }
  return null
}

/**
 * Provide demo data when WordPress is not configured
 */
function getDemoData(
  type: 'posts' | 'portfolio_item' | 'press_release' = 'posts',
  limit: number
): WordPressPost[] {
  const now = new Date().toISOString()
  const portfolioImages = [
    '/placeholder-portfolio-1.jpg',
    '/placeholder-portfolio-2.jpg',
    '/placeholder-portfolio-3.jpg',
  ]
  
  if (type === 'portfolio_item') {
    return Array.from({ length: Math.min(limit, 5) }, (_, i) => ({
      id: i + 1,
      slug: `portfolio-project-${i + 1}`,
      title: {
        rendered: `PR Campaign: Media Launch ${i + 1}`,
      },
      content: {
        rendered: `<p>This is a sample portfolio project showcasing successful PR campaign execution. The campaign resulted in increased brand awareness and media coverage across major news outlets.</p><p>Client: Sample Client ${i + 1}</p><p>Challenge: Building brand awareness in a competitive market.</p><p>Solution: Strategic media relations and targeted press campaigns.</p><p>Results: 150% increase in media mentions and industry recognition.</p>`,
      },
      excerpt: {
        rendered: 'A successful PR campaign with measurable results and media coverage',
      },
      featured_media: i + 1,
      date: new Date(Date.now() - i * 30 * 24 * 60 * 60 * 1000).toISOString(),
      author: 1,
      _embedded: {
        'wp:featuredmedia': [{
          source_url: portfolioImages[i % portfolioImages.length],
          alt_text: `PR Campaign: Media Launch ${i + 1}`,
        }],
      },
    }))
  }

  if (type === 'press_release') {
    return Array.from({ length: Math.min(limit, 5) }, (_, i) => ({
      id: i + 100,
      slug: `press-release-${i + 1}`,
      title: {
        rendered: `Official Press Release ${i + 1}`,
      },
      content: {
        rendered: `<p>FOR IMMEDIATE RELEASE</p><p>This is a sample press release showcasing professional communication standards. When you connect your WordPress site, your actual press releases will appear here with proper formatting and distribution details.</p>`,
      },
      excerpt: {
        rendered: 'Professional press release for media distribution',
      },
      featured_media: i + 10,
      date: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString(),
      author: 1,
      _embedded: {
        'wp:featuredmedia': [{
          source_url: '/placeholder-press.jpg',
          alt_text: `Press Release ${i + 1}`,
        }],
      },
    }))
  }

  // Default posts
  return Array.from({ length: Math.min(limit, 5) }, (_, i) => ({
    id: i + 200,
    slug: `sample-article-${i + 1}`,
    title: {
      rendered: `Sample Article: PR Tips & Best Practices ${i + 1}`,
    },
    content: {
      rendered: `<p>This is a sample blog post about public relations best practices and industry insights. When you connect your WordPress site, your blog posts will appear here automatically with featured images and metadata.</p><p>This demo article includes standard blog formatting and styling that will be applied to all your published content.</p>`,
    },
    excerpt: {
      rendered: 'Explore PR tips, media relations strategies, and professional communication best practices',
    },
    featured_media: i + 20,
    date: new Date(Date.now() - i * 14 * 24 * 60 * 60 * 1000).toISOString(),
    author: 1,
    _embedded: {
      'wp:featuredmedia': [{
        source_url: '/placeholder-article.jpg',
        alt_text: `Article: PR Tips ${i + 1}`,
      }],
    },
  }))
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(
  categoryId: number,
  limit: number = 10
): Promise<WordPressPost[]> {
  try {
    if (!WORDPRESS_URL || WORDPRESS_URL.includes('your-wordpress-site.com')) {
      return getDemoData('posts', limit)
    }

    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed`,
      { 
        next: { revalidate: 60 }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch posts by category: ${response.statusText}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new Error(`Invalid response type. Expected JSON, got ${contentType}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return getDemoData('posts', limit)
  }
}

/**
 * Get total count of posts
 */
export async function getPostCount(
  type: 'posts' | 'portfolio_item' | 'press_release' = 'posts'
): Promise<number> {
  try {
    if (!WORDPRESS_URL || WORDPRESS_URL.includes('your-wordpress-site.com')) {
      return 5 // Demo data count
    }

    const endpoint = type === 'posts'
      ? `${WORDPRESS_URL}/wp-json/wp/v2/posts`
      : `${WORDPRESS_URL}/wp-json/wp/v2/${type}`

    const response = await fetch(
      `${endpoint}?per_page=1`,
      { 
        next: { revalidate: 60 }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch post count: ${response.statusText}`)
    }

    const total = response.headers.get('x-wp-total')
    return total ? parseInt(total, 10) : 0
  } catch (error) {
    console.error('Error fetching post count:', error)
    return 5 // Return demo count on error
  }
}

/**
 * Check WordPress connection status
 */
export async function checkWordPressConnection(): Promise<boolean> {
  try {
    // Demo mode always returns true
    if (WORDPRESS_URL.includes('your-wordpress-site.com')) {
      console.warn('[WordPress] Running in demo mode. Configure NEXT_PUBLIC_WORDPRESS_URL to use real WordPress.')
      return true
    }

    const response = await fetch(`${WORDPRESS_URL}/wp-json/`, {
      next: { revalidate: 60 }
    })
    
    if (response.ok) {
      const contentType = response.headers.get('content-type')
      return contentType?.includes('application/json') ?? false
    }
    
    return false
  } catch (error) {
    console.error('WordPress connection error:', error)
    return false
  }
}

/**
 * Format post date to readable format
 */
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Decode HTML entities (e.g., &#8217; -> ', &amp; -> &)
 */
export function decodeHtmlEntities(text: string): string {
  const htmlEntityMap: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8211;': '–',
    '&#8212;': '—',
    '&hellip;': '…',
    '&ndash;': '–',
    '&mdash;': '—',
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"',
  }

  let decoded = text
  Object.entries(htmlEntityMap).forEach(([entity, char]) => {
    decoded = decoded.replace(new RegExp(entity, 'g'), char)
  })

  // Handle numeric entities like &#8217;
  decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10))
  })

  // Handle hex entities like &#x2019;
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16))
  })

  return decoded
}

/**
 * Strip HTML tags from content
 */
export function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, length: number = 150): string {
  // First strip HTML tags and decode entities
  let cleanText = stripHtmlTags(text)
  cleanText = decodeHtmlEntities(cleanText)
  
  if (cleanText.length <= length) return cleanText
  return cleanText.substring(0, length).trim() + '...'
}
