"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#jak-pracujemy", label: "Proces" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-background/80 backdrop-blur-md border-border py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-background font-bold flex items-center justify-center text-xl rounded-sm">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white leading-none group-hover:text-primary transition-colors">NIEDZIELA</span>
              <span className="font-bold text-muted-foreground text-sm leading-none">& KŁUSEK</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary text-white hover:bg-primary/90 font-bold rounded-none gap-2">
              <Phone className="w-4 h-4" />
              696 092 434
            </Button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background border-l border-border flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-2xl text-white">MENU</span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">Kontakt</p>
              <a href="tel:696092434" className="text-3xl font-bold text-primary block mb-2">696 092 434</a>
              <a href="mailto:pbitarnow@gmail.com" className="text-lg text-white">pbitarnow@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}