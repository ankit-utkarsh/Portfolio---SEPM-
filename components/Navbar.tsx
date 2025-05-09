"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  onHomeClick: () => void
  onDetailsClick: () => void
  onContentClick: () => void
  onLearningsClick: () => void
  onLabsClick: () => void
  onFutureClick: () => void
}

export default function Navbar({
  onHomeClick,
  onDetailsClick,
  onContentClick,
  onLearningsClick,
  onLabsClick,
  onFutureClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (callback: () => void) => {
    callback()
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-primary text-xl">Ankit Utkarsh Hota</div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-4 items-center">
                <Button variant="ghost" onClick={onHomeClick}>
                  Home
                </Button>
                <Button variant="ghost" onClick={onDetailsClick}>
                  Details
                </Button>
                <Button variant="ghost" onClick={onContentClick}>
                  Content
                </Button>
                <Button variant="ghost" onClick={onLearningsClick}>
                  Learnings
                </Button>
                <Button variant="ghost" onClick={onLabsClick}>
                  Labs
                </Button>
                <Button variant="ghost" onClick={onFutureClick}>
                  Future
                </Button>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-background pt-16"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <Button variant="ghost" onClick={() => handleNavClick(onHomeClick)}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick(onDetailsClick)}>
              Details
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick(onContentClick)}>
              Content
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick(onLearningsClick)}>
              Learnings
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick(onLabsClick)}>
              Labs
            </Button>
            <Button variant="ghost" onClick={() => handleNavClick(onFutureClick)}>
              Future
            </Button>
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
