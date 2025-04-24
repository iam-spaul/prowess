"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const endTime = startTime + duration * 1000

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min(1, (now - startTime) / (endTime - startTime))
        const currentCount = Math.floor(progress * end)

        if (currentCount !== countRef.current) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (now < endTime) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
