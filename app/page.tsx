"use client"

import type React from "react"

import { useRef } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import StudentDetails from "@/components/StudentDetails"
import CourseContent from "@/components/CourseContent"
import KeyLearnings from "@/components/KeyLearnings"
import LabExercises from "@/components/LabExercises"
import FutureApplications from "@/components/FutureApplications"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const learningsRef = useRef<HTMLDivElement>(null)
  const labsRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onDetailsClick={() => scrollToSection(detailsRef)}
        onContentClick={() => scrollToSection(contentRef)}
        onLearningsClick={() => scrollToSection(learningsRef)}
        onLabsClick={() => scrollToSection(labsRef)}
        onFutureClick={() => scrollToSection(futureRef)}
      />

      <div ref={homeRef}>
        <Hero />
      </div>

      <div ref={detailsRef}>
        <StudentDetails />
      </div>

      <div ref={contentRef}>
        <CourseContent />
      </div>

      <div ref={learningsRef}>
        <KeyLearnings />
      </div>

      <div ref={labsRef}>
        <LabExercises />
      </div>

      <div ref={futureRef}>
        <FutureApplications />
      </div>

      <Footer />
      <BackToTop />
    </main>
  )
}
