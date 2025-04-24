"use client"

import { useRef, useEffect } from "react"

interface GradientBackgroundProps {
  variant?: "light" | "dark"
}

export function GradientBackground({ variant = "default" }: GradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    resize()

    const getGradientColors = () => {
      if (variant === "light") {
        return {
          color1: "rgba(245, 243, 255, 0.8)",
          color2: "rgba(237, 233, 254, 0.5)",
          color3: "rgba(255, 255, 255, 0.9)",
        }
      } else if (variant === "dark") {
        return {
          color1: "rgba(91, 33, 182, 0.03)",
          color2: "rgba(79, 70, 229, 0.03)",
          color3: "rgba(255, 255, 255, 0.05)",
        }
      } else {
        return {
          color1: "rgba(245, 243, 255, 0.3)",
          color2: "rgba(237, 233, 254, 0.2)",
          color3: "rgba(255, 255, 255, 0.4)",
        }
      }
    }

    const draw = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { color1, color2, color3 } = getGradientColors()

      // Create gradient
      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.3 + mouseX * 0.1),
        canvas.height * (0.3 + mouseY * 0.1),
        0,
        canvas.width * (0.3 + mouseX * 0.1),
        canvas.height * (0.3 + mouseY * 0.1),
        canvas.width * 0.5,
      )
      gradient1.addColorStop(0, color1)
      gradient1.addColorStop(1, "rgba(255, 255, 255, 0)")

      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.7 - mouseX * 0.1),
        canvas.height * (0.7 - mouseY * 0.1),
        0,
        canvas.width * (0.7 - mouseX * 0.1),
        canvas.height * (0.7 - mouseY * 0.1),
        canvas.width * 0.5,
      )
      gradient2.addColorStop(0, color2)
      gradient2.addColorStop(1, "rgba(255, 255, 255, 0)")

      const gradient3 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time * 0.001) * 0.1),
        canvas.height * (0.5 + Math.cos(time * 0.001) * 0.1),
        0,
        canvas.width * (0.5 + Math.sin(time * 0.001) * 0.1),
        canvas.height * (0.5 + Math.cos(time * 0.001) * 0.1),
        canvas.width * 0.3,
      )
      gradient3.addColorStop(0, color3)
      gradient3.addColorStop(1, "rgba(255, 255, 255, 0)")

      // Draw gradients
      ctx.globalCompositeOperation = "source-over"
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "lighter"
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "lighter"
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time++
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [variant])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
