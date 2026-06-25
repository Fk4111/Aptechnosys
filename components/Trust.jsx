"use client"
import { motion } from "framer-motion"
import { Cpu, Zap, Layers, Search, Headphones, Star } from "lucide-react"
import { trustFeatures } from "@/data/site"
import { reveal } from "@/components/motionPresets"

const iconMap = { Cpu, Zap, Layers, Search, HeadphonesIcon: Headphones, Star }

const accentColors = {
  Cpu: "blue",
  Zap: "yellow",
  Layers: "violet",
  Search: "cyan",
  HeadphonesIcon: "emerald",
  Star: "orange",
}

const colorMap = {
  blue: { border: "hover:border-blue-500/40", icon: "text-blue-400", bg: "bg-blue-500/10 group-hover:bg-blue-500/15" },
  yellow: { border: "hover:border-yellow-500/40", icon: "text-yellow-400", bg: "bg-yellow-500/10 group-hover:bg-yellow-500/15" },
  violet: { border: "hover:border-violet-500/40", icon: "text-violet-400", bg: "bg-violet-500/10 group-hover:bg-violet-500/15" },
  cyan: { border: "hover:border-cyan-500/40", icon: "text-cyan-400", bg: "bg-cyan-500/10 group-hover:bg-cyan-500/15" },
  emerald: { border: "hover:border-emerald-500/40", icon: "text-emerald-400", bg: "bg-emerald-500/10 group-hover:bg-emerald-500/15" },
  orange: { border: "hover:border-orange-500/40", icon: "text-orange-400", bg: "bg-orange-500/10 group-hover:bg-orange-500/15" },
}

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-[#09090b]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div {...reveal(0, 18, 0.5)}>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4 block">
              Why Aptechnosys
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for businesses that
              <br />
              <span className="text-gradient">demand the best</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              We don&apos;t do generic. Every engagement is a partnership built on clarity, craft, and accountability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Star
            const color = accentColors[feature.icon] || "blue"
            const styles = colorMap[color]
            return (
              <motion.div
                key={feature.title}
                {...reveal(i * 0.06, 22, 0.45)}
                className={`group glass glass-hover rounded-2xl p-6 border border-white/[0.06] ${styles.border} transition-all duration-300 cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl ${styles.bg} flex items-center justify-center mb-4 transition-colors`}>
                  <Icon className={`w-5 h-5 ${styles.icon}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
