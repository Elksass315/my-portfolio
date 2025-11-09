import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const routes = ["", ...new Set(navLinks.filter((link) => link.href !== "/").map((link) => link.href))];

    return routes.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
    }));
}
