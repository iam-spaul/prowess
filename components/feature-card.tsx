"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  category: string
  image: string
  delay?: number
}

export function FeatureCard({ title, description, category, image, delay = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm">
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
          <div className="mb-2 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
            {category}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300">{title}</h3>
          <p className="mb-4 text-white/70">{description}</p>
          <motion.div
            className="flex items-center text-sm font-medium text-purple-300"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
