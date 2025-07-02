"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import StateGrid from "../components/statesGrid"
export default function ExpertSection() {
  return (
    <section id="expert" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Your <span className="text-amber-400">Expert</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <Image
                  src="/rehmaanji.webp"
                  alt="Rahman - AdHabits Expert"
                  width={380}
                  height={450}
                  className="rounded-2xl border-4 border-amber-400/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Hey! I'm <span className="text-amber-400">Rahman... </span></h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 3 years of experience in affiliate marketing and Meta ads, I've helped 250+ affiliates scale
                their businesses. My approach is simple: I don't just teach theory, I run your campaigns and deliver
                real results. From custom ad copy to audience targeting, I handle everything so you can focus on what
                you do best - converting leads into sales.
              </p>
              {/* <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">3+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">250+</div>
                  <div className="text-sm text-gray-300">Affiliates Served</div>
                </div>
              </div> */}
              <StateGrid />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
onClick={() => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-8 sm:py-4 py-2 rounded-full sm:text-lg text-[14px] font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                <FaWhatsapp size={24} />
                <span>Let's Talk on WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
