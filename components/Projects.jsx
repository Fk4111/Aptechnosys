"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { projects } from "@/data/site"
import { Badge } from "@/components/ui/badge"
import { fade, reveal } from "@/components/motionPresets"

const filters = ["All", "Websites", "Portals", "Enterprise Apps", "Branding"]

export default function Projects() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <section id="projects" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div {...reveal(0, 18, 0.5)}>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-4 block">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work we&apos;re <span className="text-gradient">proud of</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Real projects, real results. Every case study is a business transformation story.
            </p>
          </motion.div>
        </div>

        <motion.div {...fade(0.08, 0.35)} className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            {...fade(0, 0.25)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                {...reveal(i * 0.08, 22, 0.45)}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
              >
                <div className={`relative h-52 bg-gradient-to-br ${project.color} flex items-end p-6 overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-6 right-6 text-7xl font-bold text-white/5 select-none font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <Badge className="mb-3 bg-white/10 text-white border-white/20 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{project.tagline}</p>
                  </div>
                  <ArrowUpRight className="absolute top-6 left-6 w-5 h-5 text-white/0 group-hover:text-white/80 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>

                <div className="p-6">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1.5 text-xs text-zinc-400 bg-white/5 rounded-full px-3 py-1.5 border border-white/[0.06]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-zinc-600 mb-2 uppercase tracking-wider font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs text-zinc-500 font-mono bg-white/[0.04] rounded px-2 py-1 border border-white/[0.04]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-xs text-zinc-600 mb-3 uppercase tracking-wider font-medium">Key Results</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((r) => (
                        <div key={r} className="text-xs text-emerald-400 flex items-start gap-1.5">
                          <span className="text-emerald-500 mt-0.5">↑</span>
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div {...reveal(0.15, 18, 0.45)} className="text-center mt-12">
          <p className="text-zinc-500 mb-4">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-500/25"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
