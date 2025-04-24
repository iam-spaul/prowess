"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface FloatingCardProps {
  title: string
  description: string
  category: string
  image: string
  delay?: number
}

export function FloatingCard({ title, description, category, image, delay = 0 }: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm"
        animate={{
          rotateX: isHovered ? mousePosition.y * 10 : 0,
          rotateY: isHovered ? -mousePosition.x * 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="p-6">
          <div className="mb-2 inline-block rounded-full bg-rose-500/20 px-3 py-1 text-xs font-medium text-rose-300">
            {category}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-rose-300">{title}</h3>
          <p className="mb-4 text-white/70">{description}</p>
          <motion.div
            className="flex items-center text-sm font-medium text-rose-300"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            View Content <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.div>
        </div>

        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)`,
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
