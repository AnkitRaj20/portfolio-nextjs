import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Adjust these based on what shouldn't be indexed
    },
    sitemap: "https://ankitcodes.tech/sitemap.xml",
  };
}
