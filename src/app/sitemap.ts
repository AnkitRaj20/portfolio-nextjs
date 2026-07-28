import { MetadataRoute } from "next";
import { readContent } from "@/lib/json-cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ankitcodes.tech";
  const content = await readContent();
  
  // Static routes
  const routes = ["", "/projects", "/timeline", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projects = content?.projects || [];
  const projectRoutes = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
