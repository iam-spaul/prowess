"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Career</span>
            <span className="text-white">imagined</span>
          </Link>

          <nav className="hidden space-x-8 md:flex">
            {["About", "Events", "Real Voices", "Community", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "About" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Get in Touch</Button>
          </nav>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col bg-black/95 pt-24 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto flex flex-1 flex-col px-4">
              <nav className="flex flex-col space-y-6 py-8">
                {["About", "Events", "Real Voices", "Community", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-2xl font-bold text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto py-8">
                <Button
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
