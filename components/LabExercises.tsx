"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FileText, GitBranch, Lightbulb, Calculator, Code, AlertTriangle, Rocket } from "lucide-react"

const labExercises = [
  {
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: "SRS Workshop",
    description:
      "Created comprehensive software requirements specifications documenting functional and non-functional requirements for a project management system.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-purple-500" />,
    title: "UML Modeling",
    description:
      "Developed detailed UML diagrams including use case, class, sequence, and activity diagrams to visualize system architecture and behavior.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Design Heuristics",
    description:
      "Applied design principles and heuristics to evaluate and improve user interfaces, ensuring optimal usability and user experience.",
  },
  {
    icon: <Calculator className="h-8 w-8 text-green-500" />,
    title: "COCOMO Estimation",
    description:
      "Utilized the Constructive Cost Model to estimate project effort, duration, and cost based on software size and complexity factors.",
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-500" />,
    title: "TDD Pair Programming",
    description:
      "Practiced test-driven development in a pair programming environment, writing tests before implementation to ensure code quality.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Risk Register",
    description:
      "Created and maintained a comprehensive risk register identifying potential project risks, their likelihood, impact, and mitigation strategies.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-orange-500" />,
    title: "Release Simulation",
    description:
      "Participated in a simulated software release process, managing version control, deployment planning, and post-release monitoring.",
  },
]

export default function LabExercises() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="labs" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="section-title text-foreground"
      >
        Lab Exercises
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {labExercises.map((exercise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-2 bg-primary/10">{exercise.icon}</div>
                  <CardTitle className="text-foreground">{exercise.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{exercise.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
