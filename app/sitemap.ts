import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ghulamashraf.com";
  const routes = ["", "/about", "/articles", "/media", "/travel", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/articles" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/articles" ? 0.9 : 0.7,
  }));
}
