"use client"

import { motion } from "framer-motion"

interface FloatingElementProps {
  className?: string
  delay?: number
}

export function FloatingElement({ className = "", delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, 15, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay,
      }}
    />
  )
}
