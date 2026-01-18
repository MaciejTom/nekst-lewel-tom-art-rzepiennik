"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { NavigationContent } from "@/types/content"

// ============================================
// STYLES
// ============================================

const baseStyles = {
  header: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
  headerScrolled: "bg-background/80 backdrop-blur-md border-border py-4",
  headerTop: "bg-transparent border-transparent py-6",
  container: "container mx-auto px-6 flex items-center justify-between",

  // Logo
  logoWrapper: "flex items-center gap-2 group",
  logoInitials: "w-10 h-10 bg-primary text-background font-bold flex items-center justify-center text-xl rounded-sm",
  logoName: "font-bold text-white leading-none group-hover:text-primary transition-colors",
  logoSubtext: "font-bold text-muted-foreground text-sm leading-none",

  // Nav
  nav: "hidden md:flex items-center gap-8",
  navLink: "text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-wide",
  ctaButton: "bg-primary text-white hover:bg-primary/90 font-bold rounded-none gap-2",

  // Mobile
  mobileMenuBtn: "md:hidden text-white p-2",
  mobileOverlay: "fixed inset-0 z-[60] bg-background border-l border-border flex flex-col p-8",
  mobileHeader: "flex justify-between items-center mb-12",
  mobileTitle: "font-bold text-2xl text-white",
  mobileCloseBtn: "text-white",
  mobileNav: "flex flex-col gap-6",
  mobileNavLink: "text-2xl font-bold text-muted-foreground hover:text-primary transition-colors",
  mobileFooter: "mt-auto border-t border-border pt-8",
  mobileContactLabel: "text-sm text-muted-foreground mb-4 uppercase tracking-widest",
  mobilePhone: "text-3xl font-bold text-primary block mb-2",
  mobileEmail: "text-lg text-white",
} as const

// ============================================
// COMPONENT
// ============================================

interface NavigationProps {
  content: NavigationContent
}

export function Navigation({ content }: NavigationProps) {
  const { logo, links, cta, email } = content

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Render logo based on type
  const renderLogo = () => {
    if (logo.type === 'initials') {
      return (
        <>
          <div className={baseStyles.logoInitials}>
            {logo.value}
          </div>
          {(logo.name || logo.subtext) && (
            <div className="flex flex-col">
              {logo.name && <span className={baseStyles.logoName}>{logo.name}</span>}
              {logo.subtext && <span className={baseStyles.logoSubtext}>{logo.subtext}</span>}
            </div>
          )}
        </>
      )
    }

    if (logo.type === 'text') {
      return (
        <div className="flex flex-col">
          <span className={baseStyles.logoName}>{logo.value}</span>
          {logo.subtext && <span className={baseStyles.logoSubtext}>{logo.subtext}</span>}
        </div>
      )
    }

    if (logo.type === 'image') {
      return <img src={logo.value} alt={logo.name || 'Logo'} className="h-10" />
    }

    return null
  }

  return (
    <>
      <header
        className={`${baseStyles.header} ${
          scrolled ? baseStyles.headerScrolled : baseStyles.headerTop
        }`}
      >
        <div className={baseStyles.container}>
          <a href="#" className={baseStyles.logoWrapper}>
            {renderLogo()}
          </a>

          <nav className={baseStyles.nav}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={baseStyles.navLink}
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <Button asChild className={baseStyles.ctaButton}>
                <a href={cta.href}>
                  {cta.type === 'phone' && <Phone className="w-4 h-4" />}
                  {cta.text}
                </a>
              </Button>
            )}
          </nav>

          <button
            className={baseStyles.mobileMenuBtn}
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
            className={baseStyles.mobileOverlay}
          >
            <div className={baseStyles.mobileHeader}>
              <span className={baseStyles.mobileTitle}>MENU</span>
              <button onClick={() => setIsOpen(false)} className={baseStyles.mobileCloseBtn}>
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className={baseStyles.mobileNav}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={baseStyles.mobileNavLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {(cta || email) && (
              <div className={baseStyles.mobileFooter}>
                <p className={baseStyles.mobileContactLabel}>Kontakt</p>
                {cta && (
                  <a href={cta.href} className={baseStyles.mobilePhone}>
                    {cta.text}
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} className={baseStyles.mobileEmail}>
                    {email}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
