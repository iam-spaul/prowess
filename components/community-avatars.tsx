"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CommunityAvatars() {
  // Sample avatar image URLs from Unsplash (replace with your own if needed)
  const avatarImages = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/women/7.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/women/11.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/women/13.jpg",
    "https://randomuser.me/api/portraits/men/14.jpg",
    "https://randomuser.me/api/portraits/women/15.jpg",
    "https://randomuser.me/api/portraits/men/16.jpg",
    "https://randomuser.me/api/portraits/women/17.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/women/19.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
  ]

  const avatars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    image: avatarImages[i],
    name: `Member ${i + 1}`,
    x: Math.random() * 80 + 10, // 10-90%
    y: Math.random() * 60 + 20, // 20-80%
    size: Math.random() * 20 + 40, // 40-60px
    delay: Math.random() * 2,
  }))

  return (
    <div className="relative mx-auto h-60 max-w-3xl overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm">
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className="absolute flex flex-col items-center"
          style={{
            left: `${avatar.x}%`,
            top: `${avatar.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: avatar.delay,
          }}
          whileHover={{ scale: 1.2, zIndex: 10 }}
        >
          <div
            className="overflow-hidden rounded-full border-2 border-indigo-500/30 bg-black/30 backdrop-blur-sm"
            style={{ width: avatar.size, height: avatar.size }}
          >
            <Image
              src={avatar.image}
              alt={avatar.name}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            className="mt-1 rounded-md bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {avatar.name}
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-bold">Join 500+ Members</span>
        </motion.div>
      </div>
    </div>
  )
}
