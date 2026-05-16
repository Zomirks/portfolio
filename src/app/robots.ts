import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/cv-cyril-fischer-developpeur-fullstack.pdf"
		},
		sitemap: `${siteConfig.url}/sitemap.xml`,
		host: siteConfig.url,
	};
}
