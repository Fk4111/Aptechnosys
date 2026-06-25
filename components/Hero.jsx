"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stats } from "@/data/site"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { fade, reveal, scale } from "@/components/motionPresets"

function StatCard({ value, suffix, label, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      {...reveal(delay, 18, 0.45)}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : "0"}
      </div>
      <div className="text-zinc-500 text-sm mt-1">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let particles = []
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const count = 60
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.opacity})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b] pt-24 sm:pt-28 md:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-600/10 via-violet-600/5 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-cyan-600/8 to-transparent rounded-full pointer-events-none blur-3xl" />

      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10 w-full flex min-h-[calc(100vh-6rem)] flex-col items-center text-center pt-10 pb-12 md:pt-14 md:pb-14">
        <motion.div {...fade(0.05, 0.45)} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm text-blue-400 mt-4 sm:mt-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>50+ Projects Delivered Worldwide</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </div>
        </motion.div>

        <motion.h1
          {...reveal(0.08, 24, 0.55)}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">We Build Software</span>
          <br />
          <span className="text-gradient">That Scales</span>
        </motion.h1>

        <motion.p
          {...reveal(0.16, 18, 0.5)}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
        >
          Aptechnosys crafts premium web applications, enterprise systems, and digital products
          for startups and businesses ready to compete at the highest level.
        </motion.p>

        <motion.div
          {...reveal(0.24, 18, 0.45)}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/30 h-12 px-8 text-base"
            asChild
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
            <a href="#projects">View Our Work</a>
          </Button>
        </motion.div>

        <motion.div {...scale(0.3, 0.97, 0.45)} className="w-full max-w-2xl">
          <div className="glass rounded-2xl border border-white/[0.06] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={0.35 + i * 0.08} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 hidden 2xl:block">
          {[
            { label: "Next.js", x: "-520px", y: "-220px", delay: 0.5 },
            { label: "React", x: "460px", y: "-210px", delay: 0.6 },
            { label: "Node.js", x: "-500px", y: "210px", delay: 0.7 },
            { label: "PostgreSQL", x: "440px", y: "210px", delay: 0.8 },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: badge.delay }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${badge.x}), calc(-50% + ${badge.y}))`,
              }}
              className="glass border border-white/10 rounded-xl px-4 py-2 text-xs text-zinc-400 font-mono whitespace-nowrap shadow-lg shadow-black/20"
            >
              {badge.label}
            </motion.div>
          ))}
        </div>
      </div>
   
      <motion.div {...fade(0.5, 0.4)} className="mt-10 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-600">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}
