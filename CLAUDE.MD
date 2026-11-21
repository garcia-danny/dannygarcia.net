# Instructions for Claude

This document contains important instructions and notes for Claude when working on this project: Danny Garcia's personal website and blog at https://dannygarcia.net.

## CRITICAL GUIDELINES

### NEVER CREATE BLOG POSTS WITHOUT CONSENT

- **NEVER CREATE OR PUBLISH BLOG POSTS WITHOUT EXPLICIT CONSENT** from Danny
- Do not write or propose new blog content unless specifically requested
- Only help with editing or fixing existing posts when asked, and keep Danny's voice

### NEVER MERGE PULL REQUESTS

- Create PRs as requested, but do not merge them (`gh pr merge` or similar)
- Only the repository owner (Danny, `garcia-danny`) merges PRs, through the GitHub web UI
- Always provide the PR URL so Danny can review and merge manually

### DEPENDENCIES

- Check versions with tooling (`npm outdated`, `npm view <package> version`) instead of guessing
- Prefer upgrading to the latest compatible versions over downgrading when fixing build issues
- Run `npm run build` after any dependency change

### IMPORTANT: Development Server Limitation

- **DO NOT run `npm run dev`** in agent mode - it never exits and blocks the agent
- Instead, use `npm run build` to verify your changes

## Development Process

### Testing Changes

```bash
# Build the project (preferred over npm run dev in agent mode)
npm run build

# Lint and format-check
npm run check

# Preview the build (only when specifically requested)
npm run preview
```

### Project Structure

- `/src/content/blog/YEAR/` - Blog posts in Markdown/MDX, one folder per year
- `/src/pages/` - Page templates and routing
  - `/src/pages/posts/[...slug]/index.astro` - The blog post page (uses `src/layouts/PostDetails.astro`)
  - `/src/pages/posts/[...slug]/index.png.ts` - Auto-generated social preview image per post
  - `/src/pages/og.png.ts` - Site-wide social preview image
  - `*.md.ts` files - Raw-markdown versions of pages (served to `Accept: text/markdown` requests)
- `/src/components/` - Reusable UI components
- `/src/layouts/` - Page layouts (`Layout.astro` is the base HTML shell for every page)
- `/src/styles/` - Global CSS and Tailwind theme (`global.css`)
- `/public/` - Static files served as-is (favicons, photos, post images under `/assets/img/`)

### Common Tasks

1. **Adding a new blog post** (only with Danny's consent):

   - Create a Markdown file in `/src/content/blog/YEAR/` (e.g. `2026/my-post.md`)
   - Required frontmatter: `title`, `description`, `pubDatetime`
   - Optional: `tags`, `heroImage`, `modDatetime`, `featured`, `draft`, `unlisted`, `ogImage`
   - Format dates in ISO-8601 with the correct Los Angeles offset:
     `-08:00` in winter (PST), `-07:00` in summer (PDT)
   - Format tags as arrays: `tags: ["tag1", "tag2"]`
   - See `src/content.config.ts` for the full schema

2. **Modifying site configuration**:

   - Edit `/src/consts.ts` for global site settings (title, description, posts per page...)
   - Edit `/src/constants.ts` for social and share links

3. **Styling changes**:

   - Edit `/src/styles/global.css` for global styling and theme colors
   - Use Tailwind classes in component templates for component-specific styling

4. **Layout changes**:

   - Modify the appropriate layout files in `/src/layouts/`

5. **Images**:

   - Blog post images live in `/public/assets/img/YEAR/POST-NAME/`
   - Resize photos before committing; large originals slow the site down

## Tech Stack

- **Astro 5** - Main framework (static output, deployed on Vercel)
- **Tailwind CSS 4** - Styling
- **MDX** - Enhanced markdown support
- **Pagefind** - Site search (built during `npm run build`)
- **Plausible** and **Vercel Analytics** - Privacy-friendly analytics
