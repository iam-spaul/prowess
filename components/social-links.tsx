"use client"

import { motion } from "framer-motion"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  )
}
