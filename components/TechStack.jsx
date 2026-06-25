"use client"
import { techStack } from "@/data/site"

export default function TechStack() {
  return (
    <section id="tech" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-4 block">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built on a <span className="text-gradient">world-class stack</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Battle-tested technologies used by the best companies in the world. Not trends, tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="glass rounded-2xl border border-white/[0.06] p-6 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-5">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center text-xs font-mono text-zinc-400 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-200 flex-shrink-0">
                      {tech.icon}
                    </div>
                    <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-8 font-medium">
            Trusted by developers worldwide
          </p>
          <div className="marquee-wrapper">
            <div className="marquee-inner gap-8">
              {[...Array(2)].map((_, repeatIdx) => (
                <div key={repeatIdx} className="flex items-center gap-8 flex-shrink-0">
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "PostgreSQL",
                    "MongoDB",
                    "AWS",
                    "Vercel",
                    "Docker",
                    "GraphQL",
                    "Redis",
                    "Tailwind CSS",
                    "TypeScript",
                  ].map((tech) => (
                    <div key={tech} className="flex-shrink-0 glass border border-white/[0.06] rounded-xl px-5 py-3 text-zinc-500 text-sm font-medium whitespace-nowrap">
                      {tech}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
