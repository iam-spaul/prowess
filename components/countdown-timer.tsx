"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center space-x-2 text-sm text-white">
      <div className="flex items-center">
        <span className="font-mono font-medium">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="ml-1 text-white/70">d</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="ml-1 text-white/70">h</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="ml-1 text-white/70">m</span>
      </div>
      <span className="text-white/50">:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="ml-1 text-white/70">s</span>
      </div>
    </div>
  )
}
