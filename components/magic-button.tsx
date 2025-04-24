"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MagicButtonProps {
  text: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  variant?: "primary" | "secondary"
  color?: "purple" | "indigo" | "rose" | "white"
  onClick?: () => void
}

export function MagicButton({
  text,
  icon,
  iconPosition = "left",
  variant = "primary",
  color = "purple",
  onClick,
}: MagicButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const getButtonStyles = () => {
    if (variant === "primary") {
      switch (color) {
        case "purple":
          return "bg-purple-600 hover:bg-purple-700 text-white"
        case "indigo":
          return "bg-indigo-600 hover:bg-indigo-700 text-white"
        case "rose":
          return "bg-rose-600 hover:bg-rose-700 text-white"
        case "white":
          return "bg-white hover:bg-gray-100 text-gray-900"
        default:
          return "bg-purple-600 hover:bg-purple-700 text-white"
      }
    } else {
      if (color === "white") {
        return "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
      }
      return "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
    }
  }

  const getGlowColor = () => {
    if (variant === "primary") {
      switch (color) {
        case "purple":
          return "rgba(147, 51, 234, 0.5)"
        case "indigo":
          return "rgba(79, 70, 229, 0.5)"
        case "rose":
          return "rgba(225, 29, 72, 0.5)"
        case "white":
          return "rgba(255, 255, 255, 0.5)"
        default:
          return "rgba(147, 51, 234, 0.5)"
      }
    } else {
      return "rgba(255, 255, 255, 0.3)"
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button
        ref={buttonRef}
        size="lg"
        variant={variant === "primary" ? "default" : "outline"}
        className={`relative overflow-hidden ${getButtonStyles()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={onClick}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${getGlowColor()} 0%, transparent 60%)`,
            }}
          />
        )}
        {icon && iconPosition === "left" && <div className="mr-2">{icon}</div>}
        <span className="relative z-10">{text}</span>
        {icon && iconPosition === "right" && <div className="ml-2">{icon}</div>}
      </Button>
    </motion.div>
  )
}
