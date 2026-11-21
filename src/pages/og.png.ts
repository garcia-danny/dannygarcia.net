import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@/utils/generateOgImages";

// Site-wide social preview image, used by pages that don't have their own
// (home, about, search, tags...). Layout.astro points to /og.png by default.
export const GET: APIRoute = async () => {
  const buffer = await generateOgImageForSite();
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
