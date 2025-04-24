"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Mail,
  MessageCircle,
  Users,
  Zap,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedText } from "@/components/animated-text"
import { ParallaxSection } from "@/components/parallax-section"
import { SpotlightButton } from "@/components/spotlight-button"
import { SocialLinks } from "@/components/social-links"
import { MagneticButton } from "@/components/magnetic-button"
import { GradientText } from "@/components/gradient-text"
import { CursorFollower } from "@/components/cursor-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { EventCard3D } from "@/components/event-card-3d"
import { FloatingKeywords } from "@/components/floating-keywords"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { CountdownTimer } from "@/components/countdown-timer"
import { PodcastPlayer } from "@/components/podcast-player"
import { BackgroundVideo } from "@/components/background-video"
import { CommunityAvatars } from "@/components/community-avatars"
import { ScrollingQuotes } from "@/components/scrolling-quotes"
import { JourneyMap } from "@/components/journey-map"
import { FloatingCard } from "@/components/floating-card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const [audioEnabled, setAudioEnabled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showCommunityModal, setShowCommunityModal] = useState(false)

  const testimonials = [
    {
      quote:
        "Careerimagined connected me with mentors I never thought I'd have access to. The conversations changed my career trajectory.",
      author: "Priya M.",
      role: "Product Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The Leadership Circles gave me clarity and connections that completely transformed my approach to leadership.",
      author: "Rahul S.",
      role: "Engineering Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The authentic conversations I found through Careerimagined were exactly what I needed when transitioning careers.",
      author: "Sarah J.",
      role: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled)
  }

  return (
    <div ref={containerRef} className="relative">
      <CursorFollower />
      <ScrollProgress />

      {/* Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50"
        aria-label={audioEnabled ? "Mute background music" : "Play background music"}
      >
        {audioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>

      {audioEnabled && <audio src="/placeholder-audio.mp3" autoPlay loop className="hidden" />}

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        <BackgroundVideo />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <motion.div
          className="container relative z-20 mx-auto px-4 text-center"
          style={{ opacity, scale }}
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
            <span className="mr-2 inline-block animate-pulse text-purple-400">●</span>
            Real Voices from Leaders in Action
          </motion.div>

          <AnimatedText
            text="Where Careers Are Imagined — and Built."
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            delay={0.8}
          />

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            A platform that brings together leaders in action and learners in motion — through real conversations,
            curated experiences, and a community driven by human connection.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <SpotlightButton>
              <Button size="lg" className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <Zap className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" /> Explore Real Talks
              </Button>
            </SpotlightButton>
            <SpotlightButton>
              <Button size="lg" variant="outline" className="group border-white/20 text-white hover:bg-white/10">
                <Users className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" /> Join the Circle
              </Button>
            </SpotlightButton>
            <SpotlightButton>
              <Button size="lg" variant="outline" className="group border-white/20 text-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" /> Attend an Event
              </Button>
            </SpotlightButton>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <Play className="h-4 w-4 transition-transform group-hover:scale-125" />
              </div>
              <span>Watch our story</span>
            </Button>
          </motion.div>
        </motion.div>

        <FloatingElements />

        <motion.div
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Next Event Banner */}
      <div className="sticky top-20 z-30 w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
          <div className="flex items-center">
            <Badge variant="outline" className="mr-3 border-white/20 bg-white/10 text-white">
              NEXT EVENT
            </Badge>
            <span className="text-sm font-medium text-white">Leadership Circle: Future of Work</span>
          </div>
          <div className="mt-2 flex items-center sm:mt-0">
            <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
            <Button size="sm" variant="secondary" className="ml-4 bg-white/10 text-white hover:bg-white/20">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Section 1: The Movement */}
      <ParallaxSection
        className="bg-gradient-to-b from-black to-indigo-950 py-24 text-white md:py-32"
        id="the-movement"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                The Movement
              </div>
              <GradientText
                text="Why Careerimagined?"
                className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              />
              <div className="mx-auto max-w-2xl space-y-4 text-lg text-white/70">
                <p>Because the world doesn't need more noise — it needs more real voices.</p>
                <p>
                  Because we don't grow through inspiration alone — we grow through exposure, community, and action.
                </p>
              </div>
            </motion.div>

            <FloatingKeywords words={["Exposure", "Community", "Action", "Real Voices", "Growth", "Connection"]} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-1"
            >
              <div className="rounded-lg bg-black/50 p-8 backdrop-blur-sm md:p-12">
                <ScrollingQuotes
                  quotes={[
                    "We're not building a network. We're building net worth — in people, ideas, and action.",
                    "Careers don't get shaped inside four walls.",
                    "Real mentorship happens when leaders share not just success, but struggle.",
                    "We rise by lifting others — and we grow by walking together.",
                  ]}
                />
              </div>
            </motion.div>

            <div className="text-center">
              <MagneticButton>
                <Button size="lg" className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Section 2: Events That Shape You */}
      <section className="bg-gradient-to-b from-indigo-950 to-purple-950 py-24 md:py-32" id="events">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              Events That Shape You
            </div>
            <GradientText
              text="Where Conversations Spark Careers"
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              from="from-purple-400"
              to="to-pink-400"
            />
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Whether it's a rooftop roundtable, an invite-only dinner, or a virtual gathering with bold thinkers —
              every Careerimagined event is designed to give you proximity to real leadership.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <EventCard3D
              emoji="✨"
              title="Real Talks"
              description="Unfiltered interviews with leaders who share their journey, challenges, and insights in an intimate setting."
              color="purple"
              date="Monthly"
              location="In-person & Virtual"
            />
            <EventCard3D
              emoji="💬"
              title="Leadership Circles"
              description="Curated community forums where professionals at all levels gather to discuss industry trends and career growth."
              color="indigo"
              date="Bi-weekly"
              location="Rotating Venues"
            />
            <EventCard3D
              emoji="🗓️"
              title="Fireside Evenings"
              description="Deep dives on future-of-work topics with thought leaders who are reshaping how we think about careers."
              color="rose"
              date="Quarterly"
              location="Premium Venues"
            />
          </div>

          <div className="mt-12 text-center">
            <MagneticButton>
              <Button size="lg" className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> See Upcoming Events
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950 via-violet-900 to-indigo-950 py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              Voices of Impact
            </div>
            <GradientText
              text="What Our Community Says"
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              from="from-white"
              to="to-purple-200"
            />
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Section 3: Real Voices */}
      <section className="bg-gradient-to-b from-indigo-950 to-rose-950 py-24 md:py-32" id="real-voices">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-rose-500/10 px-4 py-1.5 text-sm font-medium text-rose-300">
              Real Voices
            </div>
            <GradientText
              text="Thoughts Worth Spreading. Careers Worth Watching."
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              from="from-rose-400"
              to="to-orange-400"
            />
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              We feature those who are doing the work, not just talking about it. From corporate boardrooms to
              grassroots founders — we capture the wisdom of action.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <FloatingCard
              title="From the Frontlines"
              description="Snapshots from C-level voices"
              category="🎤 Interviews"
              image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
              delay={0.1}
            />

            <FloatingCard
              title="On the Rise"
              description="Young talents rewriting the playbook"
              category="🌱 Emerging Leaders"
              image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
              delay={0.2}
            />

            <FloatingCard
              title="Real Talk Podcast"
              description="Deep conversations with industry leaders"
              category="🎧 Audio"
              image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
              delay={0.3}
            />


          </div>

          <div className="mt-16">
            <PodcastPlayer
              title="Real Talk Podcast"
              episode="Ep. 01: Reimagining Leadership"
              guest="Priya Sharma, CEO of TechFuture"
            />
          </div>

          <div className="mt-12 text-center">
            <MagneticButton>
              <Button size="lg" className="group bg-gradient-to-r from-rose-500 to-orange-500 text-white">
                Browse Stories <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Founder's Journey Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-950 to-purple-950 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300">
              Founder's Journey
            </div>
            <GradientText
              text="From India to Canada: A Leap of Growth"
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              from="from-orange-400"
              to="to-rose-400"
            />
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Peali Sarkar's story of transformation and the birth of Careerimagined.
            </p>
          </motion.div>

          <JourneyMap />

          <div className="mt-16 text-center">
            <MagneticButton>
              <Button size="lg" className="group bg-gradient-to-r from-orange-500 to-rose-500 text-white">
                Read My Full Story{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Section 4: Join the Circle */}
      <section className="bg-gradient-to-b from-purple-950 to-indigo-950 py-24 md:py-32" id="community">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              Join the Circle
            </div>
            <GradientText
              text="You Don't Just Attend — You Belong."
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              from="from-indigo-400"
              to="to-purple-400"
            />
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Careerimagined is not a platform for passive observers. It's a place to participate, share, grow — and
              belong to something larger than a LinkedIn connection.
            </p>
          </motion.div>

          <CommunityAvatars />

          <div className="mx-auto mt-16 max-w-4xl grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🔑",
                title: "Early Access",
                description: "Early access to curated events with industry leaders and exclusive content.",
              },
              {
                icon: "🧠",
                title: "Mentorship",
                description: "Join micro-learning pods led by experienced professionals in your field.",
              },
              {
                icon: "👥",
                title: "Community",
                description: "Connect with a growing tribe of leaders and changemakers who support each other.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              >
                <div className="flex h-full flex-col justify-between rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <div>
                    <motion.div
                      className="mb-4 text-3xl"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.2,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-indigo-300">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton>
              <Button
                size="lg"
                className="group animate-pulse bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:animate-none"
                onClick={() => setShowCommunityModal(true)}
              >
                <Users className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> Join the Community
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Section 5: Let's Build Together */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-indigo-950 to-black py-24 md:py-32"
        id="contact"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(120,_81,_169,_0.2)_0%,_rgba(0,_0,_0,_0)_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(233,_109,_233,_0.2)_0%,_rgba(0,_0,_0,_0)_70%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                Let's Build Together
              </div>
              <GradientText
                text="Want to Co-Create? Partner? Host?"
                className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                from="from-indigo-400"
                to="to-purple-400"
              />
              <p className="mx-auto max-w-2xl text-lg text-white/70">
                We're always open to working with people and organizations who believe in shaping futures, not waiting
                for them.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🎤",
                  title: "Become a speaker",
                  description: "Share your expertise and insights",
                },
                {
                  icon: "👑",
                  title: "Nominate a leader",
                  description: "Suggest someone with a story to tell",
                },
                {
                  icon: "🏢",
                  title: "Host an event",
                  description: "Create a space for meaningful connections",
                },
                {
                  icon: "🌱",
                  title: "Support young professionals",
                  description: "Help build the next generation of leaders",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex h-full flex-col justify-between rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                    <div>
                      <div className="mb-3 text-2xl">{item.icon}</div>
                      <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                    <div className="mt-4 text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <SpotlightButton>
                <Button size="lg" className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> Start a
                  Conversation
                </Button>
              </SpotlightButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <GradientText
                text="Let's imagine careers — together."
                className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                from="from-indigo-400"
                to="to-purple-400"
              />

              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
                Whether you're leading, learning, or just listening — your voice matters here. Let's connect. Let's
                build. Let's imagine careers that count.
              </p>

              <div className="mb-8">
                <SocialLinks />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-white">Stay Connected</h3>
                  <div className="flex">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Button className="rounded-l-none bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                      Subscribe
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <Mail className="mr-2 h-4 w-4" /> Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Careerimagined. Founded by Peali Sarkar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Community Join Modal */}
      <AnimatePresence>
        {showCommunityModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="rounded-lg bg-black/90 p-6 backdrop-blur-sm md:p-8">
                <button
                  className="absolute right-4 top-4 text-white/70 hover:text-white"
                  onClick={() => setShowCommunityModal(false)}
                >
                  <X className="h-5 w-5" />
                </button>

                <h2 className="mb-4 text-2xl font-bold text-white">Join Our Community</h2>
                <p className="mb-6 text-white/70">
                  Be part of a growing movement of professionals who are reimagining their careers through real
                  connections.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-white/70">Full Name</label>
                    <Input className="border-white/10 bg-white/5 text-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-white/70">Email</label>
                    <Input className="border-white/10 bg-white/5 text-white" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-white/70">Professional Role</label>
                    <Input className="border-white/10 bg-white/5 text-white" placeholder="Your current role" />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Join Now</Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
