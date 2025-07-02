"use client"

import { motion } from "framer-motion"
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function TestimonialsSection() {


  return (
    <section id="testimonials" className="py-20 bg-slate-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-amber-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">See what our successful affiliates have to say</p>
        </motion.div>

        {/* First Row - Left to Right */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className=""
          >

            <Marquee
              className="overflow-hidden mb-[20px]"
              pauseOnHover={true}
              speed={50}
              autoFill={true}
              gradient={false} // optional: remove fade edges
            >
              <div className="flex items-center">
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp1.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                 <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp2.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp3.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp4.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp5.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp6.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                
                
              </div>
            </Marquee>

            <Marquee
              className="overflow-hidden"
              pauseOnHover={true}
              speed={50}
              direction="right"
              autoFill={true}
              gradient={false} // optional: remove fade edges
            >
              <div className="flex items-center">
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp7.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                 <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp8.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp9.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp10.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
                <div className="mr-5 bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-amber-400/20">
                  <img src="/WhatsApp11.jpg" className="w-[240px] h-[470px]" alt="Image 1" />
                </div>
               
                
                
              </div>
            </Marquee>




          </motion.div>
        </div>


      </div>
    </section>
  )
}
