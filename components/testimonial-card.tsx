"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  delay?: number
}

export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-full rounded-lg bg-black/50 p-6 backdrop-blur-sm">
        <Quote className="mb-4 h-8 w-8 text-rose-400/50" />
        <p className="mb-6 text-lg italic text-white/90">{quote}</p>
        <div className="mt-auto">
          <p className="font-bold text-white">{author}</p>
          <p className="text-white/70">{role}</p>
        </div>
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-rose-500/10 to-orange-500/10 opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>
    </motion.div>
  )
}
