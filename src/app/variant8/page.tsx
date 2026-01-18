"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Quote, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// ============================================
// HERO - Stacked Layout (header110 pattern)
// ============================================
function HeroStacked() {
  return (
    <section className="bg-background">
      {/* Top Content */}
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Niedziela & Kłusek
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[0.9]">
            KONSTRUKCJE<br />
            ŻELBETOWE<br />
            <span className="text-primary">NA LATA</span>
          </h1>

          <p className="text-muted-foreground text-xl mb-8 max-w-2xl">
            Profesjonalne wykonawstwo konstrukcji żelbetowych dla wymagających inwestorów. Gwarancja jakości i terminowości.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              Zadzwoń
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Full-width Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative h-[60vh]"
      >
        <Image
          src="/first.jpg"
          alt="Konstrukcje żelbetowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {[
                { value: "15+", label: "Lat" },
                { value: "200+", label: "Projektów" },
                { value: "100%", label: "Terminowość" }
              ].map((stat, i) => (
                <div key={i} className="bg-card/90 backdrop-blur-sm p-4 border border-border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// ABOUT - Split Layout (layout105 pattern)
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
            className="relative h-[500px]"
          >
            <Image
              src="/third.jpg"
              alt="O firmie"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8">
              <div className="text-5xl font-bold text-white">15+</div>
              <div className="text-white/80 text-sm">lat doświadczenia</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / O nas
            </span>

            <h2 className="text-4xl font-bold text-white mb-6">
              BUDUJEMY<br />
              <span className="text-muted-foreground">Z PASJĄ I PRECYZJĄ</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Od 2008 roku specjalizujemy się w kompleksowym wykonawstwie konstrukcji żelbetowych. Nasz zespół doświadczonych specjalistów gwarantuje najwyższą jakość i terminowość realizacji.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Własne ekipy zbrojarskie i ciesielskie",
                "Nowoczesny sprzęt i szalunki",
                "Kompleksowa dokumentacja",
                "Gwarancja terminowości"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Poznaj nas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// PORTFOLIO - Stacked Full-width (portfolio17 pattern)
// ============================================
function PortfolioStacked() {
  const projects = [
    { title: "Hala Magazynowa A4", location: "Kraków", type: "Przemysł", image: "/first.jpg" },
    { title: "Osiedle Green Park", location: "Rzeszów", type: "Deweloperka", image: "/second.jpg" },
    { title: "Centrum Logistyczne", location: "Tarnów", type: "Komercja", image: "/third.jpg" },
    { title: "Rezydencja Premium", location: "Nowy Sącz", type: "Prywatne", image: "/fourth.jpg" }
  ]

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            WYBRANE REALIZACJE
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                  {project.type}
                </span>
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 font-mono">{project.location}</p>
              </div>

              {/* Number */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 text-[150px] font-bold text-white/5">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// STATS - Bento Grid (stats29 pattern)
// ============================================
function StatsBento() {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Image Card */}
          <div className="md:col-span-2 relative h-[400px] overflow-hidden">
            <Image
              src="/second.jpg"
              alt="Realizacja"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-primary font-mono text-sm">/ Doświadczenie</span>
              <h3 className="text-3xl font-bold text-white mt-2">
                Ponad 200 zrealizowanych<br />projektów
              </h3>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="bg-background p-8 border border-border h-[188px] flex flex-col justify-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Lat na rynku budowlanym</div>
            </div>
            <div className="bg-primary p-8 h-[188px] flex flex-col justify-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Terminowość realizacji</div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bg-background p-8 border border-border flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-sm">Stałych klientów</div>
            </div>
          </div>

          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/fourth.jpg"
              alt="Realizacja"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-background p-8 border border-border flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-primary">4</div>
              <div className="text-muted-foreground text-sm">Województwa działania</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIAL - Split (testimonial13 pattern)
// ============================================
function TestimonialSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="/s-real-foundations.jpg"
              alt="Testimonial"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-primary mb-6" />

            <blockquote className="text-2xl text-white font-medium mb-8 leading-relaxed">
              "Współpraca z firmą Niedziela & Kłusek to czysta przyjemność. Profesjonalizm, terminowość i najwyższa jakość wykonania. Polecam każdemu generalnemu wykonawcy."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">JK</span>
              </div>
              <div>
                <div className="text-white font-bold">Jan Kowalski</div>
                <div className="text-muted-foreground text-sm">Dyrektor Budowy, ABC Construction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA - Stacked with Image (cta31 pattern)
// ============================================
function CtaStacked() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GOTOWY DO <span className="text-primary">WSPÓŁPRACY?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Skontaktuj się z nami i otrzymaj bezpłatną wycenę w ciągu 24 godzin.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Wyślij zapytanie
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Phone className="mr-2 w-4 h-4" />
            Zadzwoń
          </Button>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="relative h-[300px]">
        <Image
          src="/s-real-walls.jpg"
          alt="CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card to-transparent" />
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Variant8Page() {
  return (
    <main className="bg-background">
      <HeroStacked />
      <AboutSection />
      <PortfolioStacked />
      <StatsBento />
      <TestimonialSection />
      <CtaStacked />
      <ContactSection />
      <Footer />
    </main>
  )
}
