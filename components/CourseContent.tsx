"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plus, Minus } from "lucide-react"

type CourseUnit = {
  id: number
  title: string
  content: string
}

const courseUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Process Models & Initiation",
    content:
      "Explored various software development methodologies including Waterfall, Incremental, Spiral, and Agile approaches. Participated in project charter workshops to define project scope, objectives, and key stakeholder roles and responsibilities.",
  },
  {
    id: 2,
    title: "Requirements & Estimation",
    content:
      "Mastered techniques for gathering, analyzing, and documenting software requirements. Learned estimation methodologies including function point analysis and COCOMO models to accurately predict project timelines and resource needs.",
  },
  {
    id: 3,
    title: "Software Design",
    content:
      "Studied architectural patterns and design principles for creating robust software systems. Applied UML modeling techniques to visualize system components and their interactions, ensuring clear communication among development teams.",
  },
  {
    id: 4,
    title: "Coding & Testing",
    content:
      "Implemented best practices in code development including clean code principles and test-driven development. Explored various testing methodologies including unit testing, integration testing, and system testing to ensure software quality.",
  },
  {
    id: 5,
    title: "Release & Risk Management",
    content:
      "Learned strategies for managing software releases, including versioning, deployment planning, and post-release monitoring. Developed risk management frameworks to identify, assess, and mitigate potential project risks throughout the development lifecycle.",
  },
]

export default function CourseContent() {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleUnit = (id: number) => {
    setExpandedUnit(expandedUnit === id ? null : id)
  }

  return (
    <section id="content" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="section-title text-foreground"
      >
        Course Content
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4 max-w-3xl mx-auto"
      >
        {courseUnits.map((unit, index) => (
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleUnit(unit.id)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-foreground"
              aria-expanded={expandedUnit === unit.id}
              aria-controls={`content-${unit.id}`}
            >
              <h3 className="text-xl font-semibold text-foreground">{unit.title}</h3>
              <span className="text-primary">
                {expandedUnit === unit.id ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>

            <AnimatePresence>
              {expandedUnit === unit.id && (
                <motion.div
                  id={`content-${unit.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">{unit.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
