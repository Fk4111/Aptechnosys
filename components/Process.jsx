"use client"
import { Search, ClipboardList, Palette, Code2, TestTube, Rocket, LifeBuoy } from "lucide-react"
import { process as steps } from "@/data/site"

const iconMap = { Search, ClipboardList, Palette, Code2, TestTube, Rocket, LifeBuoy }

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-500 mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From idea to launch
              <br />
              <span className="text-gradient">without surprises</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              A proven 7-step process refined across 50+ projects. Clear milestones, transparent communication, zero scope creep.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Rocket
              const isLeft = i % 2 === 0
              return (
                <div
                  key={step.step}
                  className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className={`glass rounded-2xl border border-white/[0.06] hover:border-white/[0.12] p-6 transition-all duration-300 group ${isLeft ? "md:ml-0" : "md:mr-0"} hover:-translate-y-1`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-xs font-mono text-zinc-600">{step.step}</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#09090b] border-2 border-blue-500/40 items-center justify-center z-10 shadow-lg shadow-blue-500/10">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>

                  <div className="flex-1 hidden md:block" />

                  <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-[#09090b] border-2 border-blue-500/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
