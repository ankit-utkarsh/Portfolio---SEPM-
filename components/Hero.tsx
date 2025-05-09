"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToDetails = () => {
    const detailsSection = document.getElementById("details")
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Ankit Utkarsh Hota
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl font-medium mb-6 text-gray-700"
        >
          Software Engineering & Project Management
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-600 mb-8"
        >
          Welcome to my portfolio showcasing my journey through software engineering and project management. Explore my
          academic achievements, laboratory exercises, and future aspirations in the field of computer science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button onClick={scrollToDetails} className="group">
            Explore My Work
            <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <Button variant="ghost" size="icon" onClick={scrollToDetails} className="animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
