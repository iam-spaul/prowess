"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedText } from "@/components/animated-text"
import { ParallaxSection } from "@/components/parallax-section"
import { GradientText } from "@/components/gradient-text"
import { ScrollProgress } from "@/components/scroll-progress"
import { MagneticButton } from "@/components/magnetic-button"
import { BackgroundVideo } from "@/components/background-video"
import { JourneyMap } from "@/components/journey-map"
import { ScrollingQuotes } from "@/components/scrolling-quotes"
import { FloatingKeywords } from "@/components/floating-keywords"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="relative">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        <BackgroundVideo />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <motion.div
          className="container relative z-20 mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            About Careerimagined
          </motion.div>

          <AnimatedText
            text="Founded by Peali Sarkar"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            delay={0.8}
          />

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-xl italic text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            "Careers don't get shaped inside four walls."
          </motion.p>
        </motion.div>

        <FloatingElements />
      </section>

      {/* About Section */}
      <ParallaxSection className="bg-gradient-to-b from-black to-indigo-950 py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <GradientText
                  text="That's not just a belief — it's a lived experience."
                  className="mb-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                />
                <div className="space-y-4 text-white/70">
                  <p>
                    I'm Peali Sarkar — not a name you've heard on big stages (yet), but someone who's walked through the
                    trenches of what career growth really feels like.
                  </p>
                  <p>
                    From becoming an engineering graduate and hustling for campus placements, I once believed that
                    getting a job was the ultimate goal. But the moment I stepped into the workforce, the truth hit me
                    hard — education alone doesn't make a professional.
                  </p>
                  <div className="py-2 text-lg font-medium text-white">
                    It's what you learn on the job.
                    <br />
                    It's who mentors you.
                    <br />
                    It's how someone ahead of you shows you the way.
                  </div>
                  <p>
                    That's where my journey truly began — realizing that careers are not built alone, and success isn't
                    just about resumes and skillsets. It's about community, guidance, and having access to the people
                    who've done the work and are willing to light the path forward.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1"
              >
                <div className="h-full rounded-xl bg-black/50 p-6 backdrop-blur-sm">
                  <Image
                    src="/peali.jpeg?height=600&width=500"
                    alt="Peali Sarkar"
                    width={500}
                    height={600}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Journey Section */}
      <ParallaxSection className="bg-gradient-to-b from-indigo-950 to-purple-950 py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
                My Journey
              </div>
              <GradientText
                text="From India to Canada: A Leap of Growth"
                className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                from="from-purple-400"
                to="to-pink-400"
              />
            </motion.div>

            <JourneyMap />

            <FloatingKeywords words={["Growth", "Opportunity", "Transformation", "Mentorship", "Vision", "Purpose"]} />
          </div>
        </div>
      </ParallaxSection>

      {/* Why I Started Section */}
      <ParallaxSection className="bg-gradient-to-b from-purple-950 to-rose-950 py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-300">
                Why I Started Careerimagined
              </div>
              <GradientText
                text="Because India — and the world — needs more real conversations."
                className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                from="from-rose-400"
                to="to-orange-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 p-1"
            >
              <div className="rounded-lg bg-black/50 p-8 backdrop-blur-sm md:p-12">
                <ScrollingQuotes
                  quotes={[
                    'Not surface-level networking. Not \\"motivational talks.\\"',
                    "But raw, practical, actionable mentorship.",
                    "It's a social cause as much as it is a professional mission.",
                    "We rise by lifting others — and we grow by walking together.",
                  ]}
                />
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="mb-4 text-lg text-white">I started Careerimagined to create a space where:</p>
                <ul className="space-y-4">
                  {[
                    "Real people meet real leaders",
                    "Freshers, young professionals, and aspiring entrepreneurs feel seen and supported",
                    "You don't need to be &quot;well-connected&quot; to get access",
                    "Mentors aren't out of reach — they're right here, in the room with you",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      <span className="text-white/70">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 p-1"
              >
                <div className="h-full rounded-xl bg-black/50 p-6 backdrop-blur-sm">
                  <div className="p-6">
                    <p className="mb-6 text-lg italic text-white/80">
                      "It's a social cause as much as it is a professional mission."
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-rose-500/20">
                        <Image
                          src="/peali.jpeg?height=100&width=100"
                          alt="Peali Sarkar"
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">Peali Sarkar</p>
                        <p className="text-sm text-white/70">Founder, Careerimagined</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Movement Section */}
      <ParallaxSection className="bg-gradient-to-b from-rose-950 to-black py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
                Join the Movement
              </div>
              <GradientText
                text="This Is a Movement, Not Just a Platform"
                className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                from="from-orange-400"
                to="to-yellow-400"
              />
              <p className="mx-auto max-w-2xl text-lg text-white/70">Join me — whether you're:</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "A budding leader ready to grow",
                "A frontline learner seeking direction",
                "A senior professional who wants to give back",
                "Or simply someone who believes that access to the right voice can change a life",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                >
                  <div className="flex h-full flex-col justify-between rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                    <p className="text-white/80">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 text-center"
            >
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                Let's build a community where careers are not imagined alone — but shaped together.
              </p>
              <MagneticButton>
                <Button
                  size="lg"
                  className="group animate-pulse bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:animate-none"
                >
                  <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" /> Join the Movement
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Final Message */}
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,_81,_169,_0.2)_0%,_rgba(0,_0,_0,_0)_70%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                From the Founder, With Heart
              </div>
              <GradientText
                text="Peali Sarkar"
                className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                from="from-indigo-400"
                to="to-purple-400"
              />
              <p className="mb-4 text-lg font-medium text-white/80">Founder, Careerimagined</p>
              <p className="mb-12 text-xl italic text-white/70">
                "We rise by lifting others — and we grow by walking together."
              </p>
              <MagneticButton>
                <Button size="lg" className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/50">© {new Date().getFullYear()} Careerimagined. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
