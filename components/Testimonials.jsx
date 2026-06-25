"use client"
import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/site"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [reduceMotion, setReduceMotion] = useState(false)

  const navigate = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const timer = setInterval(() => navigate(1), 5000)
    return () => clearInterval(timer)
  }, [reduceMotion])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-pink-500 mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clients who&apos;ve <span className="text-gradient">felt the difference</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative min-h-[28rem]">
          <div
            key={current}
            className="glass rounded-3xl border border-white/[0.06] p-8 md:p-12 relative overflow-hidden min-h-[28rem]"
            style={{
              transition: "transform 250ms ease, opacity 250ms ease",
              transform: reduceMotion ? "none" : `translateX(${direction * 0}px)`,
              opacity: 1,
            }}
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-white/[0.03]" />
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} rounded-t-3xl`} />

            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-zinc-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold text-white`}>
                {t.avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-zinc-500 text-sm">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-blue-500 w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-4 mt-12">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`glass rounded-xl border p-4 text-left transition-all duration-300 ${
                i === current ? "border-blue-500/40 bg-blue-500/5" : "border-white/[0.06] hover:border-white/[0.12]"
              } hover:-translate-y-1`}
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xs font-bold text-white mb-3`}>
                {item.avatar}
              </div>
              <div className="text-white text-xs font-medium mb-0.5">{item.name}</div>
              <div className="text-zinc-600 text-xs">{item.company}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
