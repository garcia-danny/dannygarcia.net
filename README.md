# Danny Garcia’s Personal Website

This repository contains the source code for my personal website, built with [Astro](https://astro.build).

## About

Hi, I’m Danny Garcia — a 21-year-old Computer Science student and cybersecurity enthusiast.  
This website is my personal website where I share blogs, projects, or other stuff I'm working on!

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # React components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format (organized by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment and CSP configuration
├── docs/                # Notes on writing posts (e.g. YouTube embeds)
├── package.json         # Project dependencies and scripts
└── LICENSE              # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command           | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the production build locally       |
| `npm run check`   | Lint and format-check `src/` with Biome    |

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: Licensed under the [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to [Peter Steinberger](https://github.com/steipete) for open-sourcing his website and providing inspiration for this project.