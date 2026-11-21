import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# ${SITE.author}

21-year-old Computer Science student, working in aerospace. I write about cybersecurity, technology, and what I'm learning along the way.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [@garcia-danny](https://github.com/garcia-danny)
- LinkedIn: [garcia-danny](https://www.linkedin.com/in/garcia-danny/)
- Email: inquiries@dannygarcia.net

---

*This is the markdown-only version of dannygarcia.net. Visit [dannygarcia.net](${SITE.website}) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
