"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqs } from "@/data/site"

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`glass rounded-xl border transition-all duration-300 ${
        isOpen ? "border-blue-500/30 bg-blue-500/[0.03]" : "border-white/[0.06] hover:border-white/[0.12]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-base transition-colors ${isOpen ? "text-white" : "text-zinc-300"}`}>
          {q}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-zinc-500"
        }`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common
              <br />
              <span className="text-gradient">questions</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              Everything you need to know before getting started. Don&apos;t see your question? Just ask.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Ask a question →
            </a>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
