"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollingQuotesProps {
  quotes: string[]
}

export function ScrollingQuotes({ quotes }: ScrollingQuotesProps) {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="relative h-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={currentQuote}
          className="absolute inset-0 flex items-center justify-center text-center text-xl font-medium italic text-white md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          "{quotes[currentQuote]}"
        </motion.blockquote>
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentQuote ? "bg-white" : "bg-white/30"}`}
            onClick={() => setCurrentQuote(index)}
            aria-label={`View quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
