# Blog Deployment Guide

This blog is built with Astro and uses GitHub Pages for hosting. Here's how to set up and deploy:

## Prerequisites

- Node.js (managed via mise)
- A GitHub account
- Git installed locally

## Initial Setup

1. **Create a GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub and push
   git remote add origin https://github.com/yourusername/blog-app.git
   git branch -M main
   git push -u origin main
   ```

2. **Update Configuration**
   - Update the `site` field in `astro.config.mjs`:
     ```js
     site: 'https://yourusername.github.io',
     ```
   - The `base` field is already set to `/ai-exp` to match your repository name

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to the main branch

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

Deployment is automatic via GitHub Actions:

1. **Automatic Deployment**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at `https://yourusername.github.io/ai-exp`

2. **Manual Deployment**
   - Go to the Actions tab in your GitHub repository
   - Click "Deploy to GitHub Pages"
   - Click "Run workflow"

## Cost

GitHub Pages is completely free for public repositories:
- ✅ **$0/month** - Perfect for your budget!
- Unlimited static sites
- Custom domains supported
- Global CDN included
- 100GB bandwidth per month
- 1GB storage limit

## CSS Modules

This project uses CSS Modules for styling. Create `.module.css` files and import them in your Astro components:

```astro
---
import styles from './Component.module.css';
---

<div class={styles.myClass}>
  Content here
</div>
```

## Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Include the required frontmatter:
   ```yaml
   ---
   title: 'Your Post Title'
   description: 'Brief description'
   pubDate: 'Jan 01 2024'
   heroImage: '/path/to/image.jpg' # optional
   ---
   ```
3. Write your content in Markdown
4. Commit and push to deploy automatically

## Features

- ✅ **Astro** - Fast, modern static site generator
- ✅ **CSS Modules** - Scoped styling without conflicts
- ✅ **Vite** - Lightning-fast development
- ✅ **GitHub Pages** - Free hosting with global CDN
- ✅ **GitHub Actions** - Automatic deployment
- ✅ **SEO Optimized** - Static HTML generation
- ✅ **Mobile Responsive** - Modern, responsive design
- ✅ **Markdown Support** - Easy content creation

## Troubleshooting

### Links not working after deployment
Make sure the `base` path in `astro.config.mjs` matches your repository name.

### Workflow not running
Check that GitHub Pages is set to use "GitHub Actions" as the source in your repository settings.

### Custom domain
To use a custom domain, add a `CNAME` file to the `public/` folder with your domain name. 