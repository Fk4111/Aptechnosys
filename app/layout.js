import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://www.aptechnosys.com"),
  title: {
    default: "Aptechnosys | Custom Software & Web Development Company",
    template: "%s | Aptechnosys",
  },
  description:
    "Aptechnosys builds premium custom web applications, enterprise software, business portals, and digital solutions for startups, SMEs, and enterprises. 50+ projects delivered.",
  keywords: ["custom software development", "web application development", "enterprise software", "business portal development", "Next.js development"],
  authors: [{ name: "Aptechnosys", url: "https://www.aptechnosys.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aptechnosys.com",
    siteName: "Aptechnosys",
    title: "Aptechnosys | Custom Software & Web Development Company",
    description: "Premium custom web applications, enterprise software, and digital solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aptechnosys" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptechnosys | Custom Software & Web Development",
    description: "Premium custom web applications and digital solutions.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://www.aptechnosys.com/#organization", name: "Aptechnosys", url: "https://www.aptechnosys.com", description: "Custom software development company", foundingDate: "2019" },
    { "@type": "WebSite", "@id": "https://www.aptechnosys.com/#website", url: "https://www.aptechnosys.com", name: "Aptechnosys", publisher: { "@id": "https://www.aptechnosys.com/#organization" } },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="bg-[#09090b] text-white antialiased" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
