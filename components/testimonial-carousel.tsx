"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "CareerReimagined connected me with mentors I never thought I'd have access to. The conversations I've had through their events have shaped my leadership style in profound ways.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupX",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As someone early in my career, I was struggling to find direction. The Leadership Circles at CareerReimagined gave me clarity and connections that completely changed my trajectory.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Entrepreneur",
    company: "GrowthLabs",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The authentic conversations and community I found through CareerReimagined were exactly what I needed when transitioning from corporate to founding my own company.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <div className="overflow-hidden rounded-xl bg-white/10 p-1 backdrop-blur-sm">
        <div className="relative h-full w-full overflow-hidden rounded-lg p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white/20">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-xl italic text-white md:text-2xl">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-bold text-white">{testimonials[current].name}</p>
                <p className="text-white/70">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/30"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
