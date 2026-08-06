import { MetadataRoute } from "next";
import { projectlist } from "@/constants/project";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ankitcodes.tech";

  // Static routes
  const routes = ["", "/projects", "/timeline", "/resume", "/blogs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic project routes
  const visibleProjects = projectlist.filter((p) => !p.isHidden);
  const projectRoutes = visibleProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
