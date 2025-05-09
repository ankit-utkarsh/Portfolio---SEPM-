"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Users, Code, LineChart, ShieldAlert } from "lucide-react"

const learnings = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Project Management Fundamentals",
    description:
      "Mastered core project management concepts including scope definition, scheduling, resource allocation, and stakeholder management.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Team Collaboration",
    description:
      "Developed skills in effective team communication, conflict resolution, and collaborative problem-solving in software development contexts.",
  },
  {
    icon: <Code className="h-8 w-8 text-green-500" />,
    title: "Software Development Lifecycle",
    description:
      "Gained comprehensive understanding of the entire software development process from requirements gathering to deployment and maintenance.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-purple-500" />,
    title: "Estimation Techniques",
    description:
      "Learned various methods for accurately estimating project timelines, costs, and resource requirements using industry-standard approaches.",
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-red-500" />,
    title: "Risk Management",
    description:
      "Acquired strategies for identifying potential project risks, assessing their impact, and implementing effective mitigation measures.",
  },
]

export default function KeyLearnings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="learnings" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="section-title text-foreground"
      >
        Key Learnings
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {learnings.map((learning, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{learning.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{learning.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{learning.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
