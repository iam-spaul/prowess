"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface EventCard3DProps {
  emoji: string
  title: string
  description: string
  color: "rose" | "purple" | "indigo"
  date: string
  location: string
}

export function EventCard3D({ emoji, title, description, color, date, location }: EventCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 10
    const rotateYValue = ((centerX - mouseX) / (rect.width / 2)) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    if (!isFlipped) {
      setRotateX(0)
      setRotateY(0)
    }
  }

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
    if (isFlipped) {
      setRotateX(0)
      setRotateY(0)
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "rose":
        return "bg-rose-100 group-hover:bg-rose-200"
      case "purple":
        return "bg-purple-100 group-hover:bg-purple-200"
      case "indigo":
        return "bg-indigo-100 group-hover:bg-indigo-200"
      default:
        return "bg-rose-100 group-hover:bg-rose-200"
    }
  }

  const getButtonColor = () => {
    switch (color) {
      case "rose":
        return "bg-rose-500 hover:bg-rose-600"
      case "purple":
        return "bg-purple-500 hover:bg-purple-600"
      case "indigo":
        return "bg-indigo-500 hover:bg-indigo-600"
      default:
        return "bg-rose-500 hover:bg-rose-600"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isFlipped ? 180 : rotateX,
        rotateY: isFlipped ? 0 : rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className={`absolute -right-4 -top-4 h-24 w-24 rounded-full transition-transform duration-500 group-hover:scale-150 ${getColorClasses()}`}
      ></div>

      {/* Front side */}
      <motion.div
        className="relative z-10 h-full"
        animate={{ opacity: isFlipped ? 0 : 1, rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4 text-3xl">{emoji}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
          <div className="text-gray-500">{date}</div>
          <div className="rounded-full bg-gray-100 px-3 py-1">{location}</div>
        </div>
        <button
          onClick={toggleFlip}
          className={`mt-4 rounded-full px-4 py-2 text-sm font-medium text-white ${getButtonColor()}`}
        >
          Learn More
        </button>
      </motion.div>

      {/* Back side */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-center p-6"
        animate={{
          opacity: isFlipped ? 1 : 0,
          rotateX: isFlipped ? 0 : -180,
        }}
        transition={{ duration: 0.3 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
        <ul className="mb-4 space-y-2 text-gray-600">
          <li>• Intimate setting with industry leaders</li>
          <li>• Interactive Q&A sessions</li>
          <li>• Networking opportunities</li>
          <li>• Actionable insights and takeaways</li>
        </ul>
        <p className="mb-4 text-sm text-gray-500">Next event: Coming soon</p>
        <button
          onClick={toggleFlip}
          className={`mt-auto rounded-full px-4 py-2 text-sm font-medium text-white ${getButtonColor()}`}
        >
          Back to Details
        </button>
      </motion.div>
    </motion.div>
  )
}
