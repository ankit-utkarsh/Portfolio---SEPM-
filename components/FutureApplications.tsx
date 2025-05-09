"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Code2, Users, Lightbulb, GraduationCap } from "lucide-react"

const applications = [
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Project Management",
    description:
      "Apply learned methodologies to lead software development projects, ensuring on-time delivery within budget constraints.",
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Software Development",
    description:
      "Utilize engineering principles to design and implement robust, scalable software solutions for complex business problems.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Team Leadership",
    description:
      "Lead cross-functional development teams, fostering collaboration and driving innovation in software projects.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Product Innovation",
    description:
      "Contribute to product strategy and innovation by applying technical expertise and market understanding.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Continued Learning",
    description:
      "Pursue advanced studies in specialized areas of software engineering and project management methodologies.",
  },
]

export default function FutureApplications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="future" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="section-title text-foreground"
      >
        Future Applications
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                {app.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{app.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{app.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
