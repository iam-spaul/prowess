"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { motion } from "framer-motion"

interface PodcastPlayerProps {
  title: string
  episode: string
  guest: string
}

export function PodcastPlayer({ title, episode, guest }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      setDuration(audioRef.current.duration || 0)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = percent * duration
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Generate random waveform data
  const waveformData = Array.from({ length: 40 }, () => Math.random() * 0.8 + 0.2)

  return (
    <div className="overflow-hidden rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 p-1">
      <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <div className="mb-4 flex-shrink-0 md:mb-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gradient-to-br from-rose-500 to-orange-500">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="text-3xl">🎧</span>
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
            <p className="mb-2 text-white/70">{episode}</p>
            <p className="mb-4 text-sm text-white/50">{guest}</p>

            <div className="mb-2 flex items-center gap-4">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Skip backward"
              >
                <SkipBack className="h-4 w-4" />
              </button>

              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-1" />}
              </button>

              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Skip forward"
              >
                <SkipForward className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-white/70" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
                  className="h-1 w-20 appearance-none rounded-full bg-white/20 accent-rose-500"
                  aria-label="Volume"
                />
              </div>
            </div>

            <div ref={progressRef} className="mb-2 h-10 cursor-pointer" onClick={handleProgressClick}>
              <div className="flex h-full items-center gap-0.5">
                {waveformData.map((height, index) => (
                  <motion.div
                    key={index}
                    className="h-full w-1 rounded-full bg-white/30"
                    style={{
                      scaleY: height,
                      originY: 0.5,
                    }}
                    animate={
                      isPlaying
                        ? {
                            scaleY: [height, height * 1.5, height],
                            opacity: [0.3, 0.7, 0.3],
                          }
                        : {}
                    }
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      delay: (index * 0.05) % 0.5,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs text-white/50">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration || 0)}</span>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src="/placeholder-audio.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      </div>
    </div>
  )
}
