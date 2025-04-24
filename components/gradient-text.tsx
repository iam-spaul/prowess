"use client"

import { motion } from "framer-motion"

interface GradientTextProps {
  text: string
  className?: string
  from?: string
  to?: string
}

export function GradientText({
  text,
  className = "",
  from = "from-indigo-400",
  to = "to-purple-400",
}: GradientTextProps) {
  return (
    <motion.h2
      className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h2>
  )
}
