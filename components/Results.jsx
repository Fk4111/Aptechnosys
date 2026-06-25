"use client"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { reveal, fade } from "@/components/motionPresets"

const metrics = [
  { value: 98, suffix: "", label: "Average PageSpeed Score", sub: "Across all delivered projects", color: "from-blue-500 to-cyan-500" },
  { value: 3.2, suffix: "x", label: "Average Lead Increase", sub: "Within 90 days of launch", color: "from-violet-500 to-purple-500", decimals: 1 },
  { value: 65, suffix: "%", label: "Performance Improvement", sub: "Core Web Vitals average", color: "from-emerald-500 to-teal-500" },
  { value: 40, suffix: "%", label: "SEO Traffic Growth", sub: "3-month post-launch average", color: "from-orange-500 to-red-500" },
]

function MetricCard({ value, suffix, label, sub, color, decimals = 0, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      {...reveal(delay, 22, 0.45)}
      className="glass rounded-2xl border border-white/[0.06] hover:border-white/[0.12] p-8 text-center group transition-all duration-300"
    >
      <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 tabular-nums`}>
        {inView ? <CountUp end={value} duration={2.5} decimals={decimals} suffix={suffix} /> : `0${suffix}`}
      </div>
      <p className="text-white font-semibold mb-1">{label}</p>
      <p className="text-zinc-500 text-sm">{sub}</p>
    </motion.div>
  )
}

function BarChart() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div ref={ref} {...fade(0.2, 0.4)} className="mt-12 glass rounded-2xl border border-white/[0.06] p-8">
      <h3 className="text-white font-semibold mb-8">Performance vs Industry Average</h3>
      <div className="space-y-6">
        {[
          { label: "Page Speed Score", us: 98, industry: 62, color: "bg-blue-500" },
          { label: "Mobile Optimization", us: 95, industry: 55, color: "bg-violet-500" },
          { label: "SEO Implementation", us: 92, industry: 50, color: "bg-cyan-500" },
          { label: "Conversion Rate Optimization", us: 88, industry: 45, color: "bg-emerald-500" },
        ].map((bar, i) => (
          <div key={bar.label}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm mb-2">
              <span className="text-zinc-400">{bar.label}</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="text-zinc-600">Industry avg: {bar.industry}%</span>
                <span className="text-white font-medium">Ours: {bar.us}%</span>
              </div>
            </div>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${bar.industry}%` : 0 }}
                transition={{ duration: 1, delay: i * 0.08 }}
                className="absolute top-0 left-0 h-full bg-white/10 rounded-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${bar.us}%` : 0 }}
                transition={{ duration: 1.1, delay: i * 0.08 + 0.15 }}
                className={`absolute top-0 left-0 h-full ${bar.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div {...reveal(0, 18, 0.5)}>
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500 mb-4 block">
              Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Numbers that
              <span className="text-gradient"> speak for themselves</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Measurable outcomes across every engagement. We track what matters and optimize relentlessly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} {...metric} delay={i * 0.08} />
          ))}
        </div>

        <BarChart />
      </div>
    </section>
  )
}
