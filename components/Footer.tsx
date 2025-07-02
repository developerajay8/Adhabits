"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-amber-400/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="flex items-center space-x-3">
            <Image src="/adhabits-logo.webp" alt="AdHabits Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-white">AdHabits</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">© {currentYear} AdHabits. All rights reserved.</p>
          </div>

          <nav className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-gray-500 text-sm">Professional Meta Ads Management for Affiliate Marketers</p>
        </motion.div>
      </div>
    </footer>
  )
}
