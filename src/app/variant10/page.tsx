"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Phone, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// ============================================
// HERO - Split Design (header112 pattern)
// ============================================
function HeroSplit() {
  return (
    <section className="bg-background min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Content */}
      <div className="flex items-center p-12 lg:p-20 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-primary/10 px-4 py-2 border border-primary/20">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-mono text-xs tracking-widest uppercase">
              Konstrukcje Żelbetowe
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[0.95]">
            PRECYZJA<br />
            W KAŻDYM<br />
            <span className="text-primary">DETALU</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-md">
            Specjalizujemy się w kompleksowym wykonawstwie konstrukcji żelbetowych. Od fundamentów po stropy - każdy projekt realizujemy z najwyższą starannością.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Wycena online
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              Zadzwoń
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="ml-2">5.0</span>
            </div>
            <span>•</span>
            <span>200+ realizacji</span>
            <span>•</span>
            <span>15 lat doświadczenia</span>
          </div>
        </motion.div>
      </div>

      {/* Right - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2"
      >
        <Image
          src="/first.jpg"
          alt="Konstrukcje żelbetowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/80 lg:to-background" />

        {/* Floating Stats */}
        <div className="absolute bottom-8 right-8 bg-card/95 backdrop-blur-sm p-6 border border-border max-w-xs">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "15+", label: "Lat" },
              { value: "200+", label: "Projektów" },
              { value: "4", label: "Regiony" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// ABOUT - Split Inline (layout109 pattern)
// ============================================
function AboutSection() {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px]">
              <Image
                src="/second.jpg"
                alt="O firmie"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / O firmie
            </span>

            <h2 className="text-4xl font-bold text-white mb-6">
              NIEDZIELA & KŁUSEK<br />
              <span className="text-muted-foreground">BUDUJEMY OD 2008</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Jesteśmy firmą specjalizującą się w kompleksowym wykonawstwie konstrukcji żelbetowych. Działamy na terenie Małopolski, Śląska i Podkarpacia.
            </p>

            <p className="text-muted-foreground mb-8">
              Nasz zespół doświadczonych zbrojarzy i cieśli gwarantuje najwyższą jakość wykonania i terminowość realizacji każdego projektu.
            </p>

            <Button className="bg-primary hover:bg-primary/90">
              Poznaj nas bliżej
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// GALLERY - Masonry Grid (gallery10 pattern)
// ============================================
function GalleryMasonry() {
  const images = [
    { src: "/first.jpg", title: "Hala magazynowa", span: "col-span-2 row-span-2" },
    { src: "/second.jpg", title: "Osiedle mieszkaniowe", span: "col-span-1 row-span-1" },
    { src: "/third.jpg", title: "Centrum logistyczne", span: "col-span-1 row-span-1" },
    { src: "/s-real-foundations.jpg", title: "Fundamenty", span: "col-span-1 row-span-1" },
    { src: "/s-real-walls.jpg", title: "Ściany żelbetowe", span: "col-span-1 row-span-2" },
    { src: "/fourth.jpg", title: "Rezydencja prywatna", span: "col-span-1 row-span-1" },
    { src: "/s-real-ceilings.png", title: "Stropy", span: "col-span-1 row-span-1" },
    { src: "/s-real-special.jpg", title: "Konstrukcje specjalne", span: "col-span-1 row-span-1" }
  ]

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / Galeria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NASZE REALIZACJE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Przegląd wybranych projektów zrealizowanych w ostatnich latach
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg text-center px-4">
                  {image.title}
                </span>
              </div>

              {/* Corner */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-primary border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// STATS - Centered with Background (stats19 pattern)
// ============================================
function StatsCentered() {
  const stats = [
    { value: "200+", label: "Zrealizowanych projektów" },
    { value: "15+", label: "Lat doświadczenia" },
    { value: "100%", label: "Terminowość" },
    { value: "4", label: "Województwa" }
  ]

  return (
    <section className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/third.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / W liczbach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            NASZE DOŚWIADCZENIE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS - Carousel (testimonial10 pattern)
// ============================================
function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      quote: "Współpraca z firmą Niedziela & Kłusek to czysta przyjemność. Profesjonalizm na najwyższym poziomie, terminowość i jakość wykonania bez zarzutu.",
      author: "Jan Kowalski",
      role: "Dyrektor Budowy, ABC Construction",
      image: "/first.jpg"
    },
    {
      quote: "Polecam każdemu deweloperowi. Ekipa sprawna, dokumentacja kompletna, żadnych problemów z odbiorami. Współpracujemy od 5 lat.",
      author: "Anna Nowak",
      role: "Prezes, Developer Plus",
      image: "/second.jpg"
    },
    {
      quote: "Zrealizowali dla nas kilkanaście projektów przemysłowych. Zawsze w terminie, zawsze zgodnie z projektem. Partnerzy godni zaufania.",
      author: "Piotr Wiśniewski",
      role: "Kierownik Projektu, Budimex",
      image: "/third.jpg"
    }
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / Opinie
            </span>
            <h2 className="text-4xl font-bold text-white">
              CO MÓWIĄ O NAS<br />
              <span className="text-muted-foreground">NASI KLIENCI</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[current].image}
                  alt="Projekt"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Quote className="w-12 h-12 text-primary mb-6" />

              <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonials[current].author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold">{testimonials[current].author}</div>
                  <div className="text-muted-foreground text-sm">{testimonials[current].role}</div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA - Split (cta21 pattern)
// ============================================
function CtaSplit() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ZACZNIJMY<br />
              <span className="text-primary">WSPÓŁPRACĘ</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Wyślij zapytanie i otrzymaj bezpłatną wycenę w ciągu 24 godzin. Jesteśmy gotowi do realizacji Twojego projektu budowlanego.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Wyślij zapytanie
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Phone className="mr-2 w-4 h-4" />
                +48 123 456 789
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[350px]"
          >
            <Image
              src="/fourth.jpg"
              alt="Kontakt"
              fill
              className="object-cover"
            />
            {/* Corner accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Variant10Page() {
  return (
    <main className="bg-background">
      <HeroSplit />
      <AboutSection />
      <GalleryMasonry />
      <StatsCentered />
      <TestimonialsCarousel />
      <CtaSplit />
      <ContactSection />
      <Footer />
    </main>
  )
}
