"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface EventCardProps {
  emoji: string
  title: string
  description: string
  delay?: number
}

export function EventCard({ emoji, title, description, delay = 0 }: EventCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-lg bg-black/50 p-8 backdrop-blur-sm">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative z-10">
          <div className="mb-4 text-3xl">{emoji}</div>
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
