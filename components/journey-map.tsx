"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function JourneyMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const journeySteps = [
    {
      year: "2018",
      title: "Engineering Graduate",
      description: "Completed engineering degree in India with a focus on technology",
      icon: "🎓",
    },
    {
      year: "2019",
      title: "First Corporate Role",
      description: "Joined a technology firm and discovered the importance of mentorship",
      icon: "💼",
    },
    {
      year: "2020",
      title: "The Big Move",
      description: "Packed bags and moved to Canada within 15 days of opportunity",
      icon: "✈️",
    },
    {
      year: "2021",
      title: "Career Pivot",
      description: "Experienced new perspectives on leadership and community",
      icon: "🔄",
    },
    {
      year: "2022",
      title: "Careerimagined Born",
      description: "Founded Careerimagined to create access to real mentorship",
      icon: "🚀",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div ref={ref} className="py-4">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Journey line */}
        <div className="absolute left-[22px] top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-rose-500 md:left-1/2 md:-ml-0.5"></div>

        {/* Journey steps */}
        {journeySteps.map((step, index) => (
          <motion.div key={index} className="mb-12 flex md:justify-between" variants={itemVariants}>
            <div
              className={`relative w-full ${index % 2 === 0 ? "md:w-1/2 md:pr-12" : "md:ml-auto md:pl-12 md:w-1/2"}`}
            >
              <div
                className={`absolute top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-orange-500 bg-black text-xl ${
                  index % 2 === 0 ? "left-[18px] md:right-[-20px] md:left-auto" : "left-[18px]"
                }`}
              >
                {step.icon}
              </div>
              <div className="ml-16 rounded-lg bg-gradient-to-br from-orange-500/10 to-rose-500/10 p-1 md:ml-0">
                <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-300">
                    {step.year}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-white/70">{step.description}</p>

                  {index === 2 && (
                    <div className="mt-4 overflow-hidden rounded-lg">
                      <Image
                        src="/canada.jpg?height=200&width=400"
                        alt="Moving to Canada"
                        width={400}
                        height={200}
                        className="h-auto w-full"
                      />
                    </div>
                  )}

                  {index === 4 && (
                    <div className="mt-4">
                      <p className="italic text-white/70">
                        "That's when I knew: this kind of access should not be reserved for the elite or the extroverts.
                        It should be for anyone who's hungry to grow."
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
