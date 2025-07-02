"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaWhatsapp, FaRocket } from "react-icons/fa"

export default function CTASection() {
 

  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setCount(Math.floor(start))
      }, 16)

      return () => clearInterval(timer)
    }, [end, duration])

    return <span>{count}</span>
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full mb-8">
            <FaRocket />
            <span className="font-semibold">Ready to Scale?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Get <span className="text-amber-400">Daily Leads?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Click the button below and message us on WhatsApp to get started with your professional ad setup today!
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           onClick={() => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white sm:px-12 px-6 sm:py-6 py-2 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
          >
            <FaWhatsapp size={28} />
            <span>Yes, I want ad setup help!</span>
          </motion.button>

          {/* Animated Counters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                <Counter end={3} />+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                <Counter end={250} />+
              </div>
              <div className="text-gray-300">Affiliates Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                ₹<Counter end={50} />L+
              </div>
              <div className="text-gray-300">Ad Budget Managed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
