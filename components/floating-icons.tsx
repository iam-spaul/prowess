"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MessageCircle, Star, Users, Zap } from "lucide-react"

export function FloatingIcons() {
  const [icons, setIcons] = useState<
    Array<{
      id: number
      Icon: React.ElementType
      x: number
      y: number
      size: number
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    // Generate random icons
    const iconComponents = [Zap, Star, Calendar, Users, MessageCircle]
    const newIcons = []

    for (let i = 0; i < 15; i++) {
      const Icon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      newIcons.push({
        id: i,
        Icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 12,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-white/20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: icon.delay,
            ease: "easeInOut",
          }}
        >
          <icon.Icon style={{ width: icon.size, height: icon.size }} />
        </motion.div>
      ))}
    </div>
  )
}
