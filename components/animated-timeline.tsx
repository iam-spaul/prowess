"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AnimatedTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const timelineEvents = [
    {
      year: "2018",
      title: "Engineering Graduate",
      description: "Completed engineering degree in India with a focus on technology",
    },
    {
      year: "2019",
      title: "First Corporate Role",
      description: "Joined a technology firm and discovered the importance of mentorship",
    },
    {
      year: "2020",
      title: "The Big Move",
      description: "Packed bags and moved to Canada within 15 days of opportunity",
    },
    {
      year: "2021",
      title: "Career Pivot",
      description: "Experienced new perspectives on leadership and community",
    },
    {
      year: "2022",
      title: "CareerReimagined Born",
      description: "Founded CareerReimagined to create access to real mentorship",
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
        {/* Timeline line */}
        <div className="absolute left-[15px] top-0 h-full w-0.5 bg-purple-200 md:left-1/2 md:-ml-0.5"></div>

        {/* Timeline events */}
        {timelineEvents.map((event, index) => (
          <motion.div key={index} className="mb-8 flex md:justify-between" variants={itemVariants}>
            <div className={`relative w-full ${index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:ml-auto md:pl-8 md:w-1/2"}`}>
              <div
                className={`absolute top-5 h-4 w-4 rounded-full border-4 border-purple-600 bg-white ${
                  index % 2 === 0 ? "left-[11px] md:right-[-8px] md:left-auto" : "left-[11px]"
                }`}
              ></div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
                  {event.year}
                </span>
                <h3 className="mt-2 text-lg font-bold">{event.title}</h3>
                <p className="mt-1 text-gray-600">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
