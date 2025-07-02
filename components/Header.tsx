"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Image src="/adhabits-logo.webp" alt="AdHabits Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-white">AdHabits</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["About", "Features", "Expert", "Plans", "Testimonials", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {["About", "Features", "Expert", "Plans", "Testimonials", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
              >
                {item}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
