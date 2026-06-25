"use client"
import { motion } from "framer-motion"
import { Globe, Code2, LayoutDashboard, Building2, Palette, Zap, Shield, Search } from "lucide-react"
import { services } from "@/data/site"
import { reveal, scale } from "@/components/motionPresets"

const iconMap = { Globe, Code2, LayoutDashboard, Building2, Palette, Zap, Shield, Search }

const accentMap = {
  blue: { gradient: "from-blue-500/20 to-cyan-500/20", border: "hover:border-blue-500/40", dot: "bg-blue-500", text: "text-blue-400", iconBg: "bg-blue-500/15" },
  violet: { gradient: "from-violet-500/20 to-purple-500/20", border: "hover:border-violet-500/40", dot: "bg-violet-500", text: "text-violet-400", iconBg: "bg-violet-500/15" },
  cyan: { gradient: "from-cyan-500/20 to-teal-500/20", border: "hover:border-cyan-500/40", dot: "bg-cyan-500", text: "text-cyan-400", iconBg: "bg-cyan-500/15" },
  orange: { gradient: "from-orange-500/20 to-red-500/20", border: "hover:border-orange-500/40", dot: "bg-orange-500", text: "text-orange-400", iconBg: "bg-orange-500/15" },
  pink: { gradient: "from-pink-500/20 to-rose-500/20", border: "hover:border-pink-500/40", dot: "bg-pink-500", text: "text-pink-400", iconBg: "bg-pink-500/15" },
  yellow: { gradient: "from-yellow-500/20 to-amber-500/20", border: "hover:border-yellow-500/40", dot: "bg-yellow-500", text: "text-yellow-400", iconBg: "bg-yellow-500/15" },
  emerald: { gradient: "from-emerald-500/20 to-green-500/20", border: "hover:border-emerald-500/40", dot: "bg-emerald-500", text: "text-emerald-400", iconBg: "bg-emerald-500/15" },
  indigo: { gradient: "from-indigo-500/20 to-blue-500/20", border: "hover:border-indigo-500/40", dot: "bg-indigo-500", text: "text-indigo-400", iconBg: "bg-indigo-500/15" },
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div {...reveal(0, 18, 0.5)}>
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-500 mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Everything you need
              <br />
              <span className="text-gradient">to ship great software</span>
            </h2>
          </motion.div>

          <motion.p
            {...reveal(0.08, 18, 0.45)}
            className="text-zinc-400 text-base md:text-lg max-w-sm md:text-right"
          >
            From initial concept to production launch and everything in between.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe
            const styles = accentMap[service.accent] || accentMap.blue
            return (
              <motion.div
                key={service.title}
                {...reveal(i * 0.06, 24, 0.45)}
                whileHover={{ y: -4 }}
                className={`group relative glass rounded-2xl p-6 border border-white/[0.06] ${styles.border} transition-all duration-300 cursor-default overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${styles.text}`} />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-tight">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
