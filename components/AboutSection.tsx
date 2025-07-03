"use client"
import Marquee from "react-fast-marquee";

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  
  const logos = [
    { name: "iDigitalPreneur", src: "/placeholder.svg?height=60&width=150" },
    { name: "Bizgurukul", src: "/placeholder.svg?height=60&width=150" },
    { name: "MillionaireTrack", src: "/placeholder.svg?height=60&width=150" },
    { name: "Forever Living", src: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 sm:leading-[80px] leading-[44px]">
            Trusted by Top Affiliates from<span className="text-amber-400"> These Platforms.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className=""
        >
          <Marquee
            className="overflow-hidden"
            pauseOnHover={true}
            speed={50}
            autoFill={true}
            gradient={false} // optional: remove fade edges
          >
            <div className="flex items-center">
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/third.webp" className="w-[160px] h-[100px]" alt="Image 1" />
              </div>
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/fourth.png" className="w-[160px] h-[100px]" alt="Image 2" />
              </div>
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/six.png" className="w-[160px] h-[100px]" alt="Image 3" />
              </div>
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/second.png" className="w-[160px] h-[100px]" alt="Image 4" />
              </div>
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/first.png" className="w-[160px] h-[100px]" alt="Image 5" />
              </div>
              <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                <img src="/IMG_0727 copy.PNG" className="w-[160px] h-[100px]" alt="Image 5" />
              </div>
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  )
}
