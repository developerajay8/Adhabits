"use client"

import { motion } from "framer-motion"
import { FaBullseye, FaPen, FaCrosshairs, FaChartLine, FaWhatsapp, FaCheck } from "react-icons/fa"

export default function PlanSection() {
  const features = [
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "Personalized Ad Strategy",
      description: "Custom strategy tailored to your niche and goals",
    },
    {
      icon: <FaPen className="text-2xl" />,
      title: "Monthly Ad Copy",
      description: "Fresh, converting copy delivered every month",
    },
    {
      icon: <FaCrosshairs className="text-2xl" />,
      title: "Targeting Setup",
      description: "Audience Research + Funnel optimization",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Weekly Optimization",
      description: "Continuous monitoring and performance improvements",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp Support",
      description: "Direct access for quick questions and updates",
    },
  ]

  return (
    <section id="plans" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Monthly Plan <span className="text-amber-400">Breakdown</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to scale your affiliate business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 border border-amber-400/30 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Complete Ad Management Package</h3>
            <p className="text-gray-300 text-lg">Everything included in your monthly plan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all duration-300 group"
              >
                <div className="text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-4">
              <FaCheck />
              <span className="font-semibold">All Features Included</span>
            </div>
            <p className="text-gray-300">No hidden costs, no setup fees - everything you need in one package</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
