"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function HeroSection() {
 

  return (
    <section className="relative pb-[80px] sm:min-h-screen flex items-center justify-center pt-[150px] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-amber-400">Affiliate Marketer?</span>
            <br />
            Let Us Run Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Meta Ads
            </span>
            <br />& Get You More Leads
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            3+ Years Experience | 250+ Affiliates Served | Trusted by 50+ Top Performers
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
    const section = document.getElementById("contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-8 sm:py-4 py-2 rounded-full sm:text-lg text-[14px] font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
          >
            <FaWhatsapp size={24} />
            <span>Yes, I want ad setup help!</span>
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-amber-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}
