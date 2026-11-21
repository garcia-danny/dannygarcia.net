# Changelog

All notable website architecture changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2026-11-21]

### Fixed
- Markdown home page (`/index.md`) showed the original site owner's bio and contact details; it now shows Danny's
- Installable-app manifest, page metadata and structured data still used the original owner's name, Twitter handle and (deleted) avatar
- Two routes generated the same blog post URLs (`posts/[...slug].astro` and `posts/[...slug]/index.astro`); removed the unused one and its layouts
- Broken favicon: `favicon.ico` was an SVG file served as an icon; added a real `.ico`, an SVG favicon and app icons
- Missing site-wide social preview image (`/og.png` returned 404)
- Plausible analytics only loaded on the home page, and the 404 page threw an error calling it; it now loads once for every page
- Every page except posts emitted a "BlogPosting" structured-data block with an invalid date; removed it
- `<html class="false">` on pages without smooth scrolling
- Footer and "Edit on GitHub" links pointed to a repository that doesn't exist
- Tag links ended in a slash and were redirected on every click
- Sitemap priorities only recognised posts from 2010–2025
- Typos and a broken link in the home page and both blog posts

### Changed
- Resized the home and about photos (1.9 MB → 140 KB) without changing their filenames
- Replaced the deprecated `ViewTransitions` component with `ClientRouter`
- Stopped loading Twitter's `widgets.js` on every page (no post uses it; `TwitterEmbed` doesn't need it)
- Removed the original owner's domains from `vercel.json` redirects and Content-Security-Policy
- Updated README, LICENSE (kept the original MIT notice, added Danny's), CLAUDE.MD and package name

### Removed
- Unused legacy files from the original site: `BlogPostLayout`, `BlogPost`, `BaseLayout`, `BaseHead`, `Sidebar`, `FormattedDate`, `criticalCSS`, `/page/[page]` and `/posts/[page]` routes, `public/site.webmanifest`, `public/game-audio.mp3`, and template screenshots in `src/assets/images/`
- `package.json` scripts that pointed to a `scripts/` folder that doesn't exist

## Upstream history

The entries below describe changes made to the original site this project was forked from (steipete.me, by Peter Steinberger), before it became dannygarcia.net. They are kept for reference.

### [Unreleased]

### Added
- steipete.md domain support for markdown-only viewing (#130, #139)
  - Visit steipete.md to automatically see markdown versions of all pages
  - Client-side redirect handles domain detection and .md routing
  - Works around Vercel's limitations with domain-based rewrites for static sites
- Markdown (.md) endpoint support for all pages - append `.md` to any URL to get raw markdown content
  - Blog posts: `/posts/YEAR/post-slug.md`
  - Root pages: `/about.md`
- Raw markdown served with `Content-Type: text/plain` and proper caching headers
- Redirect from steipete.me/*.md URLs to steipete.md/* (#133)

### Fixed
- Slow theme switching animation on iPhone Safari (#122)
  - Removed universal CSS transitions that caused performance issues
  - Targeted only elements that actually change during theme switching
  - Added hardware acceleration for iOS Safari using transform3d

### [2025-01-06]

### Change

### Added
- Smooth transitions for theme switching with CSS transitions (#119)
- Automatic theme switching based on system preferences (#115)
  - Respects user's OS dark/light mode preference
  - Manual toggle still available and persists user choice

### Improved
- Code block contrast in light mode for better readability (#117)

### [2025-01-05]

### Fixed
- Sitemap trailing slash mismatch issue (#113)
- Multiple SEO and technical issues (#112)
  - Improved meta descriptions
  - Fixed canonical URLs
  - Enhanced Open Graph tags
- Duplicate author name in OG images (#111)

### Added
- Structured data (JSON-LD) for better SEO (#102)
  - Article schema for blog posts
  - WebSite schema for homepage
  - Person schema for author information
- Critical CSS inlining for faster initial page render (#102)
- Keyboard navigation improvements (#102)
  - Arrow key navigation between posts
  - Escape key to close mobile menu

### Changed
- Updated tagline from "fork, remix, and ship" to "fork & remix" (#101)

### Fixed
- TypeScript errors in readingTime utility and astro.config (#100)
- Share links sizing and spacing on mobile devices (#99)

### [2025-01-04]

### Technical Infrastructure
- Migrated from steipete.com to steipete.me
- Set up modern Astro-based static site architecture
- Implemented automatic builds and deployments via Vercel
- Added PWA support with service worker
- Integrated Pagefind for site search functionality

### Performance Optimizations
- Implemented lazy loading for images
- Added responsive image sizing
- Optimized font loading with Atkinson Hyperlegible
- Reduced JavaScript bundle size
- Added caching strategies for static assets

### Developer Experience
- Added CLAUDE.md with project-specific instructions
- Set up TypeScript for type safety
- Configured ESLint for code quality
- Implemented hot module replacement for development
- Added comprehensive build scripts