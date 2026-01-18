"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ArrowLeft, Phone, ChevronLeft, ChevronRight, Building2, Hammer, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// ============================================
// HERO - Centered with Fullwidth Image (header106 pattern)
// ============================================
function HeroCentered() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/fourth.jpg"
          alt="Konstrukcje żelbetowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 bg-primary/20 backdrop-blur-sm px-4 py-2 border border-primary/30">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Konstrukcje Żelbetowe
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
            SOLIDNE<br />
            <span className="text-primary">FUNDAMENTY</span><br />
            SUKCESU
          </h1>

          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Profesjonalne wykonawstwo konstrukcji żelbetowych. Od fundamentów po stropy - kompleksowa obsługa inwestycji budowlanych.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              Kontakt
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 md:gap-20">
            {[
              { value: "15+", label: "Lat doświadczenia" },
              { value: "200+", label: "Realizacji" },
              { value: "4", label: "Województwa" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// SERVICES - Split with Icons (layout101 pattern)
// ============================================
function ServicesSplit() {
  const services = [
    {
      icon: Building2,
      title: "Fundamenty",
      desc: "Płyty fundamentowe, ławy, stopy. Profesjonalne zbrojenie i betonowanie.",
      image: "/s-real-foundations.jpg"
    },
    {
      icon: Hammer,
      title: "Ściany żelbetowe",
      desc: "Ściany nośne, oporowe, szyby windowe. Idealna geometria i gładkość.",
      image: "/s-real-walls.jpg"
    },
    {
      icon: Shield,
      title: "Stropy",
      desc: "Stropy monolityczne, prefabrykowane, gęstożebrowe. Każda technologia.",
      image: "/s-real-ceilings.png"
    },
    {
      icon: Clock,
      title: "Konstrukcje specjalne",
      desc: "Schody, balkony, nadproża. Niestandardowe rozwiązania konstrukcyjne.",
      image: "/s-real-special.jpg"
    }
  ]

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / Usługi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            PEŁEN ZAKRES<br />
            <span className="text-muted-foreground">ROBÓT ŻELBETOWYCH</span>
          </h2>
        </div>

        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{service.desc}</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Dowiedz się więcej
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative h-[350px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// GALLERY CAROUSEL (gallery13 pattern)
// ============================================
function GalleryCarousel() {
  const [current, setCurrent] = useState(0)

  const images = [
    { src: "/first.jpg", title: "Hala Magazynowa", location: "Kraków" },
    { src: "/second.jpg", title: "Osiedle Parkowe", location: "Rzeszów" },
    { src: "/third.jpg", title: "Centrum Logistyczne", location: "Tarnów" },
    { src: "/fourth.jpg", title: "Rezydencja Prywatna", location: "Nowy Sącz" }
  ]

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / Galeria
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              NASZE REALIZACJE
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Info */}
              <div className="absolute bottom-8 left-8">
                <div className="text-primary text-sm font-mono mb-2">
                  {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{images[current].title}</h3>
                <p className="text-white/60">{images[current].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION (stats15 pattern)
// ============================================
function StatsSection() {
  const stats = [
    { value: "200+", label: "Zrealizowanych projektów" },
    { value: "15+", label: "Lat doświadczenia" },
    { value: "50+", label: "Stałych klientów" },
    { value: "4", label: "Województwa działania" }
  ]

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <Image
              src="/s-real-special.jpg"
              alt="Statystyki"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / W liczbach
            </span>
            <h2 className="text-4xl font-bold text-white mb-8">
              NASZE DOŚWIADCZENIE<br />
              <span className="text-muted-foreground">W LICZBACH</span>
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-primary pl-6">
                  <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA - Centered with Image (cta3 pattern)
// ============================================
function CtaCentered() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/second.jpg"
          alt="CTA background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ROZPOCZNIJ<br />
            <span className="text-primary">WSPÓŁPRACĘ</span>
          </h2>

          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Jesteśmy gotowi do realizacji Twojego projektu.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Wyślij zapytanie
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              +48 123 456 789
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Variant7Page() {
  return (
    <main className="bg-background">
      <HeroCentered />
      <ServicesSplit />
      <GalleryCarousel />
      <StatsSection />
      <CtaCentered />
      <ContactSection />
      <Footer />
    </main>
  )
}
