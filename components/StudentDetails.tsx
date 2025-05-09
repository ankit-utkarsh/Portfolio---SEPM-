"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { User, BookOpen, GraduationCap, MapPin } from "lucide-react"

export default function StudentDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="details" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="section-title text-foreground"
      >
        Student Details
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="overflow-hidden bg-white dark:bg-gray-800">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-primary/10 p-8 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-24 w-24 text-primary" />
                </div>
              </div>

              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ankit Utkarsh Hota</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Section</p>
                      <p className="font-medium text-foreground">J1</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Registration Number</p>
                      <p className="font-medium text-foreground">RA2211003010646</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
                      <p className="font-medium text-foreground">Computer Science Engineering</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    As a dedicated computer science student, I am passionate about software engineering principles and
                    project management methodologies. My academic journey has equipped me with both theoretical
                    knowledge and practical skills necessary for success in the technology industry.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
