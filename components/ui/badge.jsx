import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-blue-600/20 text-blue-400 border border-blue-500/30",
    secondary: "bg-violet-600/20 text-violet-400 border border-violet-500/30",
    outline: "border border-gray-700 text-gray-400",
    success: "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30",
  }
  return (
    <div className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", variants[variant], className)} {...props} />
  )
}

export { Badge }
