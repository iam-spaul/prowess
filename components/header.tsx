"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-purple-800">CareerReimagined</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-lg">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    About
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    Events
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    Real Talks
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    Community
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-purple-600" onClick={toggleMenu}>
                    Contact
                  </Link>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Join Now</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-purple-600">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-purple-600">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-purple-600">
                Events
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-purple-600">
                Real Talks
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-purple-600">
                Community
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-purple-600">
                Contact
              </Link>
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700">Join Now</Button>
          </>
        )}
      </div>
    </header>
  )
}
