"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPlus, FaMinus } from "react-icons/fa"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Which platforms do you work with?",
      answer:
        "We specialize in Meta (Facebook & Instagram) ads, which are the most effective for affiliate marketing. We also provide guidance for other platforms based on your niche.",
    },
    {
      question: "What's the minimum budget required?",
      answer:
        "We recommend a minimum ad spend of ₹15,000-20,000 per month for optimal results. This allows for proper testing and scaling of campaigns.",
    },
    {
      question: "Do you provide copy and creative guidance?",
      answer:
        "Yes! We provide custom ad copy every month and guide you on creative strategies. We also help with landing page optimization and funnel setup.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most clients see initial results within 7-14 days. Significant improvements typically occur within 30-45 days as we optimize and scale successful campaigns.",
    },
    {
      question: "Do you work with all affiliate programs?",
      answer:
        "We work with most legitimate affiliate programs including iDigitalPreneur, Bizgurukul, MillionaireTrack, Forever Living, and many others. We'll assess your program during consultation.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "You get direct WhatsApp support, weekly optimization reports, monthly strategy calls, and access to our team for any questions or concerns.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">Get answers to common questions about our services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-amber-400/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="text-amber-400 flex-shrink-0">{openIndex === index ? <FaMinus /> : <FaPlus />}</div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
