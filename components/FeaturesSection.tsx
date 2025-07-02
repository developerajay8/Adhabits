"use client"

import { motion } from "framer-motion"
import { FaCheck, FaUsers, FaPen, FaRupeeSign, FaUserFriends, FaShieldAlt } from "react-icons/fa"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaCheck className="text-2xl" />,
      title: "100% Focus on Affiliate Ad Campaigns",
      description: "Specialized expertise in affiliate marketing campaigns",
    },
    {
      icon: <FaPen className="text-2xl" />,
      title: "Custom Ad Copy Provided Every Month",
      description: "Fresh, converting copy delivered monthly",
    },
    {
      icon: <FaRupeeSign className="text-2xl" />,
      title: "₹50+ Lakh Ad Budget Managed",
      description: "Proven track record with large budgets",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "250+ Affiliates Served",
      description: "Extensive experience across diverse niches",
    },
    {
      icon: <FaUserFriends className="text-2xl" />,
      title: "50+ Top Affiliates Monthly",
      description: "Consistent results for top performers",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Verified Results Available",
      description: "Transparent reporting and proven outcomes",
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-amber-400">AdHabits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver results that matter to your affiliate business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-600 group"
            >
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
