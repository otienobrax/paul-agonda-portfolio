# Paul Agonda PR Portfolio

A professional portfolio website for Paul Agonda, Public Relations Officer at Kenya Media Relations Company. Built with Next.js 15 and integrated with a Headless WordPress CMS.

## Features

- **Professional Design:** Navy/Gold executive aesthetic with responsive layouts
- **Portfolio Showcase:** Display PR campaigns, media relations projects, and case studies
- **Blog/Articles:** Publish insights and industry articles
- **Press Releases:** Dedicated section for official press releases
- **Contact Form:** Professional contact section with inquiry form
- **WordPress Integration:** Manage all content from WordPress CMS
- **SEO Optimized:** Built-in SEO with metadata and schema markup
- **Performance:** Lightning-fast with ISR caching and image optimization
- **Responsive:** Mobile-first design that works on all devices

## Tech Stack

- **Frontend:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS with custom design tokens
- **CMS:** Headless WordPress (REST API)
- **Fonts:** Playfair Display (headings), Open Sans (body)
- **Deployment:** Vercel

## Project Structure

```
/app
  /page.tsx              # Home page
  /about/page.tsx        # About page
  /portfolio/page.tsx    # Portfolio listing
  /portfolio/[slug]/     # Portfolio item detail
  /articles/page.tsx     # Blog listing
  /articles/[slug]/      # Article detail
  /press-releases/page.tsx
  /contact/page.tsx
  /layout.tsx            # Root layout

/components
  /header.tsx            # Navigation header
  /footer.tsx            # Footer
  /hero-section.tsx      # Hero component
  /portfolio-card.tsx    # Portfolio item card
  /article-card.tsx      # Article card
  /contact-form.tsx      # Contact form

/lib
  /wordpress.ts          # WordPress API integration
  /types.ts              # TypeScript interfaces

/styles
  /globals.css           # Global styles & theme
```

## Quick Start

### 1. Prerequisites
- Node.js 16+
- npm or yarn
- WordPress instance (self-hosted or managed)

### 2. Installation
```bash
# Clone the repository
git clone <repo-url>
cd pr-portfolio

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Update .env.local with your WordPress URL
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

### 3. Development
```bash
npm run dev
```
Visit `http://localhost:3000`

### 4. Build & Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

## WordPress Setup

This site requires WordPress to be configured as a headless CMS. See [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md) for detailed instructions.

### Key Requirements:
- WordPress REST API enabled
- Custom post types: `portfolio_item`, `press_release`
- Advanced Custom Fields (ACF) plugin installed
- CORS headers configured

## Environment Variables

Create a `.env.local` file:

```env
# Required
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add `NEXT_PUBLIC_WORDPRESS_URL` environment variable
4. Deploy

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## Customization

### Colors
Edit `/app/globals.css` to customize the color palette:
- `--primary`: #001F3F (Navy)
- `--accent`: #D4AF37 (Gold)

### Fonts
Edit `/app/layout.tsx` to change fonts:
- Headings: Playfair Display
- Body: Open Sans

### Content
All content is managed through WordPress. No need to edit code for content updates.

## Performance

- **Optimization:** ISR (Incremental Static Regeneration) with 1-hour cache
- **Images:** Automatic optimization via Next.js Image component
- **CDN:** Vercel Edge Network for fast global delivery

## SEO

- **Metadata:** Auto-generated based on WordPress content
- **Schema Markup:** Structured data for rich search results
- **Sitemap:** Automatic XML sitemap generation
- **Mobile Responsive:** Mobile-first design for better rankings

## Contributing

To contribute improvements:

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## Troubleshooting

### No content appears
1. Check WordPress URL in `.env.local`
2. Verify WordPress REST API is accessible
3. Ensure custom post types have `show_in_rest: true`
4. Check browser console for network errors

### Images not loading
1. Verify image URLs in WordPress are public
2. Check for CORS errors in browser console
3. Ensure featured images are set for posts

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Support

- **Documentation:** See WORDPRESS_SETUP.md and DEPLOYMENT_GUIDE.md
- **Next.js Docs:** https://nextjs.org/docs
- **WordPress API:** https://developer.wordpress.org/rest-api/

## License

This project is proprietary. All rights reserved.

## Credits

Built by v0 with Next.js, Tailwind CSS, and WordPress integration.

---

**For WordPress Setup Instructions:** See [WORDPRESS_SETUP.md](./WORDPRESS_SETUP.md)

**For Deployment Instructions:** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
