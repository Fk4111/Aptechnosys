export default function sitemap() {
  return [
    { url: "https://www.aptechnosys.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.aptechnosys.com/#services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.aptechnosys.com/#projects", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://www.aptechnosys.com/#contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]
}
