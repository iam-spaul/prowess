"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface GlowingTextProps {
  text: string
  className?: string
  color?: "purple" | "indigo" | "rose" | "white"
  once?: boolean
  delay?: number
}

export function GlowingText({ text, className = "", color = "purple", once = true, delay = 0 }: GlowingTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const getGlowColor = () => {
    switch (color) {
      case "purple":
        return "text-purple-600 [text-shadow:0_0_10px_rgba(147,51,234,0.5)]"
      case "indigo":
        return "text-indigo-600 [text-shadow:0_0_10px_rgba(79,70,229,0.5)]"
      case "rose":
        return "text-rose-600 [text-shadow:0_0_10px_rgba(225,29,72,0.5)]"
      case "white":
        return "text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)]"
      default:
        return "text-purple-600 [text-shadow:0_0_10px_rgba(147,51,234,0.5)]"
    }
  }

  return (
    <motion.h2
      ref={ref}
      className={`${className} ${getGlowColor()}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h2>
  )
}
