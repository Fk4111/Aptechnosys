"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { reveal } from "@/components/motionPresets"

const projectTypes = [
  "Web Development",
  "Custom Software",
  "Dashboard",
  "Enterprise App",
  "UI/UX Design",
  "API Development",
  "SEO",
  "Maintenance",
  "Other",
]

const budgetRanges = [
  "Below Rs 50,000",
  "Rs 50k - Rs 1,50,000",
  "Rs 1.5L - Rs 5,00,000",
  "Rs 5L - Rs 15,00,000",
  "Rs 15L+",
  "Let's Discuss",
]

// Custom SVG Icons
const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const SendIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const EmailInputIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
)

const PhoneInputIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <path d="M9 18h6v4H9z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)

const MessageIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const SpinnerIcon = () => (
  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const WalletIcon = () => (
  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 010-4h14v4" />
    <path d="M3 5v14a2 2 0 002 2h16v-5" />
    <path d="M18 12a2 2 0 000 4h4v-4z" />
  </svg>
)

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async () => {
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="section-padding bg-[#09090b]">
      <div className="container-custom mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div {...reveal(0, 18, 0.5)}>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s build something
              <br />
              <span className="text-gradient">great together</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Tell us about your project. We&apos;ll review and respond within 24 hours with a strategy call invitation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div {...reveal(0.05, 22, 0.45)} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl border border-white/[0.06] p-6">
              <h3 className="text-white font-semibold mb-6">Get in touch</h3>
              <div className="space-y-5">
                {[
                  { Icon: MailIcon, label: "Email", value: "support@aptechnosys.com" },
                  { Icon: PhoneIcon, label: "Phone", value: "+91 9324172409" },
                  { Icon: MapPinIcon, label: "Location", value: "India (Remote Worldwide)" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs mb-0.5">{label}</p>
                      <p className="text-zinc-200 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl border border-white/[0.06] p-6">
              <h4 className="text-white text-sm font-semibold mb-4">Response commitment</h4>
              <div className="space-y-3">
                {[
                  "Reply within 24 hours",
                  "Free 30-min strategy call",
                  "No-obligation proposal",
                  "Fixed-price contracts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="text-emerald-500 flex-shrink-0">
                      <CheckCircleIcon />
                    </div>
                    <span className="text-zinc-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(0.1, 22, 0.45)} className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl border border-emerald-500/30 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Message sent!</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-xs">
                  We&apos;ve received your inquiry. Expect a reply within 24 hours with next steps.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="border-white/10 text-zinc-300 hover:text-white">
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl border border-white/[0.06] p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                      <UserIcon />
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all ${errors.name ? "border-red-500/50" : "border-white/[0.08] hover:border-white/[0.15]"
                        }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                      <EmailInputIcon />
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                      })}
                      className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all ${errors.email ? "border-red-500/50" : "border-white/[0.08] hover:border-white/[0.15]"
                        }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                      <PhoneInputIcon />
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                      <BuildingIcon />
                      Company
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                    <BriefcaseIcon />
                    Project Type *
                  </label>
                  <select
                    {...register("projectType", { required: "Please select a project type" })}
                    className={`w-full bg-[#09090b] border rounded-lg px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all ${errors.projectType ? "border-red-500/50" : "border-white/[0.08] hover:border-white/[0.15]"
                      }`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                </div>

                <div>
                  <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                    <WalletIcon />
                    Budget Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {budgetRanges.map((b) => (
                      <label key={b} className="block cursor-pointer">
                        <input type="radio" value={b} {...register("budget")} className="peer sr-only" />
                        <span className="flex w-full items-center justify-center rounded-lg border border-white/[0.08] px-3 py-2 text-center text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200 peer-checked:border-blue-500/40 peer-checked:bg-blue-500/10 peer-checked:text-blue-400">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 mb-1.5 flex items-center">
                    <MessageIcon />
                    Project Details *
                  </label>
                  <textarea
                    {...register("message", { required: "Please describe your project" })}
                    rows={4}
                    className={`w-full resize-none rounded-lg border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all focus:outline-none focus:ring-1 focus:ring-blue-500/50 ${errors.message ? "border-red-500/50" : "border-white/[0.08] hover:border-white/[0.15]"
                      }`}
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 w-full bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <SpinnerIcon />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <SendIcon />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}