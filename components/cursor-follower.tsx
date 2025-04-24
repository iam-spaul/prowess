"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isVisible])

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 mix-blend-screen blur-sm md:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
        scale: [1, 1.2, 1],
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28 },
        y: { type: "spring", stiffness: 500, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
      }}
    />
  )
}
