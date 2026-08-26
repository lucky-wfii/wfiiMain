"use client"

import { useState } from "react"
import Link from "next/link"
import MobileNavbar from "@/components/global/mobile-navbar"

const Header = () => {
  return (
    <>
      {/* Mobile Navigation Component for Small/Medium Screens */}
      <MobileNavbar />

      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-sm">
        <div className=" mx-auto px-6 lg:px-24">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/wfii-logo.png"
                alt="WFII Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#about" className="text-gray-800 hover:text-[#FF4500] transition-colors duration-300">
              About us
              </Link>
              {/* <Link href="#events" className="text-white hover:text-[#FF6347] transition-colors duration-300">
                Events
              </Link> */}
              <Link href="#verticals" className="text-gray-800 hover:text-[#FF4500] transition-colors duration-300">
                Sectors
              </Link>
              <Link href="#event-activity" className="text-gray-800 hover:text-[#FF4500] transition-colors duration-300">
                Event & Activities
              </Link>
              {/* <Link href="#hall-of-fame" className="text-white hover:text-[#FF4500] transition-colors duration-300">
                Hall of Fame
              </Link> */}
              <Link href="#contact" className="text-gray-800 hover:text-[#FF6347] transition-colors duration-300">
                Contact
              </Link>
              {/* <a
                href="/exhibition"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF4500]/25 transition-all duration-300 hover:scale-105"
              >
                Visit Platform
              </a> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
