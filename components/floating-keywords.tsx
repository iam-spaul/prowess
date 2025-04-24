"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingKeywordsProps {
  words: string[]
}

interface KeywordProps {
  id: number
  word: string
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
}

export function FloatingKeywords({ words }: FloatingKeywordsProps) {
  const [keywords, setKeywords] = useState<KeywordProps[]>([])

  useEffect(() => {
    const colors = ["text-indigo-400", "text-purple-400", "text-rose-400", "text-blue-400", "text-violet-400"]

    const newKeywords = words.map((word, index) => ({
      id: index,
      word,
      x: Math.random() * 80 + 10, // 10-90%
      y: Math.random() * 80 + 10, // 10-90%
      size: Math.random() * 0.5 + 0.8, // 0.8-1.3
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 10, // 10-15s
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setKeywords(newKeywords)
  }, [words])

  return (
    <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 backdrop-blur-sm">
      {keywords.map((keyword) => (
        <motion.div
          key={keyword.id}
          className={`absolute whitespace-nowrap font-medium ${keyword.color}`}
          style={{
            left: `${keyword.x}%`,
            top: `${keyword.y}%`,
            fontSize: `${keyword.size}rem`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, -20, 20, 0],
            y: [0, 10, -10, 0],
          }}
          transition={{
            duration: keyword.duration,
            delay: keyword.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          {keyword.word}
        </motion.div>
      ))}
    </div>
  )
}
