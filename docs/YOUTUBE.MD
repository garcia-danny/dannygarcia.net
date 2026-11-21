# Using YouTube Embeds in Blog Posts

This document provides a quick guide on how to use YouTube embeds in blog posts.

## Using the YouTube Embed Tag

To embed a YouTube video, use the following syntax:

```
{% youtube VIDEO_ID %}
```

Where `VIDEO_ID` is either the YouTube video ID or the full URL to the video.

### Examples

Using just the video ID:

```
{% youtube dQw4w9WgXcQ %}
```

Using the full YouTube URL:

```
{% youtube https://www.youtube.com/watch?v=dQw4w9WgXcQ %}
```

Using a youtu.be short URL:

```
{% youtube https://youtu.be/dQw4w9WgXcQ %}
```

## How It Works

The post layout (`src/layouts/PostDetails.astro`) scans blog post content for these patterns and replaces them with responsive YouTube iframes.

## Twitter Embeds for Comparison

The `{% twitter %}` shortcode is **not** processed by the current post layout. To embed a post from X/Twitter, write the post as `.mdx` and use the `TwitterEmbed` component:

```mdx
import TwitterEmbed from "@/components/TwitterEmbed.astro";

<TwitterEmbed url="https://x.com/<user>/status/<id>" />
```

## Best Practices

1. Always use the `{% youtube %}` syntax instead of direct iframe embeds
2. This ensures content won't be blocked by privacy-focused browsers
3. The embed is responsive and will adjust to different screen sizes
4. Works with all YouTube URL formats (full youtube.com URLs, youtu.be short URLs, or just the video ID)
