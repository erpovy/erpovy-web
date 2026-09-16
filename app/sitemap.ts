import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.erpovy.com";
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/fiyatlandirma", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/moduller", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/demo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sss", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/hakkimizda", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/gizlilik-politikasi", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/kullanim-kosullari", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/kvkk", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
