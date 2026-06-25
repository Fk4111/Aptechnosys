export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 35, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Technologies Used" },
]

export const services = [
  {
    icon: "Globe",
    title: "Web Development",
    description: "High-performance web applications built with Next.js, React, and modern frameworks. Pixel-perfect, blazing fast, SEO-ready.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "blue",
  },
  {
    icon: "Code2",
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business workflows. From concept to production-grade systems.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
  },
  {
    icon: "LayoutDashboard",
    title: "Dashboard Development",
    description: "Real-time data dashboards with beautiful visualizations, role-based access, and actionable analytics.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    accent: "cyan",
  },
  {
    icon: "Building2",
    title: "Enterprise Applications",
    description: "Scalable enterprise-grade systems—ERP, CRM, HRM, and multi-tenant SaaS platforms built to grow with your business.",
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "orange",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description: "Human-centered design that converts. From wireframes to polished Figma prototypes—every pixel intentional.",
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "pink",
  },
  {
    icon: "Zap",
    title: "API Development",
    description: "Robust, documented REST and GraphQL APIs. Secure, scalable, and built for third-party integrations.",
    gradient: "from-yellow-500/20 to-amber-500/20",
    accent: "yellow",
  },
  {
    icon: "Shield",
    title: "Maintenance & Support",
    description: "Dedicated post-launch support. Performance monitoring, security patches, feature updates, and 24/7 reliability.",
    gradient: "from-emerald-500/20 to-green-500/20",
    accent: "emerald",
  },
  {
    icon: "Search",
    title: "SEO Optimization",
    description: "Technical SEO, Core Web Vitals, structured data, and content strategies that put you on page one.",
    gradient: "from-indigo-500/20 to-blue-500/20",
    accent: "indigo",
  },
]

export const projects = [
  {
    id: "knk-partners",
    title: "KNK Partners",
    category: "Enterprise Portal",
    tags: ["Portals", "Enterprise Apps"],
    tagline: "Background Verification Management System",
    description: "A full-stack enterprise portal for KNK Partners to digitize their entire background verification workflow—vendor onboarding, case management, real-time APIs, and executive reporting.",
    color: "from-blue-600 to-cyan-500",
    bgPattern: "bg-blue-950",
    highlights: ["Vendor Management", "Case Tracking", "Status APIs", "Dashboard Reporting", "Excel Export", "PDF Reports"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "AWS", "PDF Generation"],
    challenge: "KNK Partners was managing hundreds of verification cases manually via spreadsheets, leading to errors, delays, and poor visibility for clients.",
    solution: "Built a multi-tenant portal with role-based access, automated status tracking, real-time API hooks, and one-click report generation in PDF and Excel.",
    results: ["70% reduction in processing time", "100% audit trail compliance", "Real-time client status visibility", "Zero manual data entry errors"],
  },
  {
    id: "preventfire",
    title: "PreventFire",
    category: "Corporate Website",
    tags: ["Websites"],
    tagline: "Fire Safety & Compliance Platform",
    description: "A modern, SEO-optimized corporate website for PreventFire that positions them as the authority in fire safety compliance, drives qualified lead generation, and converts visitors to clients.",
    color: "from-orange-600 to-red-500",
    bgPattern: "bg-orange-950",
    highlights: ["Corporate Website", "Service Showcase", "Lead Generation", "SEO Optimized"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO", "Vercel"],
    challenge: "PreventFire had no online presence, losing business to competitors discoverable through Google. They needed authority and lead capture.",
    solution: "Designed a conversion-focused website with structured data, service pages, certifications showcase, and a multi-step quote request form.",
    results: ["First-page Google ranking in 3 months", "85% increase in qualified leads", "45% improvement in conversion rate", "Sub-2s page load time"],
  },
  {
    id: "tridevpandey",
    title: "TridevPandey.in",
    category: "Personal Brand",
    tags: ["Websites", "Branding"],
    tagline: "Personal Brand & Portfolio Website",
    description: "A premium personal brand website for Tridev Pandey—establishing authority, showcasing expertise, and building a professional online identity that commands respect.",
    color: "from-violet-600 to-purple-500",
    bgPattern: "bg-violet-950",
    highlights: ["Professional Branding", "Responsive Design", "Fast Performance"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    challenge: "Building a personal brand that stands out in a crowded professional landscape while maintaining authenticity and approachability.",
    solution: "Crafted a distinctive visual identity with smooth animations, clear messaging hierarchy, and strategically placed CTAs for speaking and consulting inquiries.",
    results: ["3x increase in consulting inquiries", "Featured in industry publications", "98 Google PageSpeed score", "Strong social proof integration"],
  },
  {
    id: "niceandeasy",
    title: "NiceAndEasyFitness",
    category: "Fitness Business",
    tags: ["Websites"],
    tagline: "Fitness Programs & Lead Capture",
    description: "A results-driven fitness business website with program showcases, transformation galleries, and a lead capture system that converts website visitors into paying clients.",
    color: "from-emerald-600 to-teal-500",
    bgPattern: "bg-emerald-950",
    highlights: ["Fitness Programs", "Lead Capture", "Mobile Optimized"],
    tech: ["Next.js", "React Hook Form", "Tailwind CSS", "Vercel"],
    challenge: "Fitness businesses lose most potential clients on mobile. NiceAndEasyFitness had high bounce rates and poor lead conversion on small screens.",
    solution: "Mobile-first redesign with thumb-optimized CTAs, fast-loading program cards, social proof integration, and a frictionless inquiry form.",
    results: ["60% improvement in mobile conversions", "40% reduction in bounce rate", "2x lead generation increase", "99 mobile PageSpeed score"],
  },
]

export const techStack = {
  Frontend: [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛" },
    { name: "JavaScript", icon: "JS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✦" },
  ],
  Backend: [
    { name: "Node.js", icon: "⬡" },
    { name: "Express", icon: "Ex" },
    { name: "REST APIs", icon: "🔌" },
    { name: "GraphQL", icon: "◈" },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "⚡" },
  ],
  Cloud: [
    { name: "AWS", icon: "☁" },
    { name: "Vercel", icon: "▲" },
    { name: "Railway", icon: "🚂" },
    { name: "Docker", icon: "🐳" },
  ],
}

export const process = [
  { step: "01", title: "Discover", description: "We deep-dive into your business goals, target users, and competitive landscape to uncover what will actually move the needle.", icon: "Search" },
  { step: "02", title: "Plan", description: "Technical architecture, sprint roadmap, resource allocation, and risk mitigation—all mapped before a single line of code is written.", icon: "ClipboardList" },
  { step: "03", title: "Design", description: "Figma wireframes to high-fidelity prototypes. We validate every screen with stakeholders before handoff to development.", icon: "Palette" },
  { step: "04", title: "Develop", description: "Agile development in 2-week sprints. Clean code, peer-reviewed PRs, and continuous deployment with full transparency.", icon: "Code2" },
  { step: "05", title: "Test", description: "Automated testing, QA sprints, performance audits, and cross-browser compatibility before anything ships to production.", icon: "TestTube" },
  { step: "06", title: "Launch", description: "Zero-downtime deployments, DNS migrations, monitoring setup, and stakeholder walkthroughs. Your launch day, flawlessly executed.", icon: "Rocket" },
  { step: "07", title: "Support", description: "Ongoing SLA-backed support, proactive monitoring, feature enhancements, and a team that stays invested in your growth.", icon: "LifeBuoy" },
]

export const testimonials = [
  {
    name: "Rahul Mehta",
    role: "CEO",
    company: "KNK Partners",
    avatar: "RM",
    rating: 5,
    text: "Aptechnosys transformed our manual verification process into a fully automated system. The team understood our complex requirements and delivered beyond expectations. Truly a premium development partner.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Vikram Singh",
    role: "Director",
    company: "PreventFire",
    avatar: "VS",
    rating: 5,
    text: "Our website now ranks on the first page of Google and our lead generation has increased dramatically. Aptechnosys delivered a site that actually converts visitors into clients.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "NiceAndEasyFitness",
    avatar: "PS",
    rating: 5,
    text: "The mobile experience they built is incredible. Our inquiry rate doubled in the first month after launch. They genuinely care about the business outcomes, not just the code.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Arjun Patel",
    role: "CTO",
    company: "TechStartup",
    avatar: "AP",
    rating: 5,
    text: "Working with Aptechnosys felt like having a senior engineering team in-house. Their technical depth, communication, and delivery quality set a new standard for what I expect from agencies.",
    gradient: "from-violet-500 to-purple-500",
  },
]

export const faqs = [
  {
    q: "How long does development typically take?",
    a: "Project timelines vary by scope. A marketing website typically takes 2–4 weeks; a custom web application 6–16 weeks; an enterprise system 3–6 months. After our discovery call, we provide a detailed timeline and milestone plan.",
  },
  {
    q: "What technologies do you use?",
    a: "Our primary stack is Next.js, React, Node.js, and PostgreSQL or MongoDB. We also work with TypeScript, GraphQL, AWS, Vercel, and Docker. We select the best technology for each project's specific requirements—not just what's trendy.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer monthly retainer packages that include performance monitoring, security updates, feature additions, and priority bug fixes. Most clients maintain a support relationship with us well beyond launch.",
  },
  {
    q: "Can you redesign our existing website?",
    a: "Absolutely. We conduct a full audit of your current site—performance, SEO, conversion rates, and UX—before designing a new version that addresses every identified issue. We handle full migrations with zero downtime.",
  },
  {
    q: "Do you build custom business software?",
    a: "Yes, this is one of our core specialties. CRMs, ERPs, HR systems, inventory management, verification portals, booking systems—we build software designed around your exact business logic, not generic SaaS templates.",
  },
  {
    q: "What is your pricing model?",
    a: "We work on fixed-price contracts for well-defined projects and time-and-materials for evolving scopes. After understanding your requirements in a discovery call, we provide a detailed proposal with transparent line-item pricing.",
  },
]

export const trustFeatures = [
  { icon: "Cpu", title: "Custom-Built, Always", description: "Every solution is architected from scratch for your specific business. No templates, no shortcuts." },
  { icon: "Zap", title: "Fast Delivery", description: "Agile sprints with weekly demos. Most projects ship in half the time competitors quote." },
  { icon: "Layers", title: "Scalable Architecture", description: "Systems designed for your next 10x. Modular codebases that grow without rewrites." },
  { icon: "Search", title: "SEO-First Approach", description: "Every project ships with structured data, Core Web Vitals optimization, and technical SEO built in." },
  { icon: "HeadphonesIcon", title: "Dedicated Support", description: "A real team that knows your project. Not ticket queues—direct Slack and WhatsApp access." },
  { icon: "Star", title: "Modern Stack", description: "Next.js, Node, PostgreSQL, AWS. Battle-tested technologies trusted by top-tier companies worldwide." },
]
