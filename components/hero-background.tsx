"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0
    let hue = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      density: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = Math.random() * 2 + 1
        this.speedX = 0
        this.speedY = 0
        this.color = `hsla(${hue}, 100%, 50%, 0.8)`
        this.density = Math.random() * 30 + 1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = 100
        const force = (maxDistance - distance) / maxDistance
        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        if (distance < maxDistance) {
          this.speedX += directionX
          this.speedY += directionY
        } else {
          if (this.x !== this.originalX) {
            const dx = this.x - this.originalX
            this.speedX -= dx / 50
          }
          if (this.y !== this.originalY) {
            const dy = this.y - this.originalY
            this.speedY -= dy / 50
          }
        }

        this.x += this.speedX
        this.y += this.speedY

        // Friction
        this.speedX *= 0.9
        this.speedY *= 0.9
      }
    }

    const initParticles = () => {
      particles = []
      const numberOfParticles = (canvas.width * canvas.height) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push(new Particle(x, y))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update hue for color cycling
      hue = (hue + 0.5) % 360

      for (let i = 0; i < particles.length; i++) {
        particles[i].color = `hsla(${hue}, 100%, 50%, 0.8)`
        particles[i].update()
        particles[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = 1 - distance / 120
            ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.x
      mouseY = e.y
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-black"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(120, 81, 169, 0.3) 0%, rgba(0, 0, 0, 0) 50%)",
        }}
      />
    </>
  )
}
