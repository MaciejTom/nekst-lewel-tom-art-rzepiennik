"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Phone, CheckCircle, Building2, Hammer, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// ============================================
// HERO SECTION - Split Layout (header1 pattern)
// ============================================
function HeroSplit() {
  return (
    <section className="bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                Konstrukcje Żelbetowe
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.9]">
              BUDUJEMY<br />
              <span className="text-primary">FUNDAMENTY</span><br />
              TWOJEGO SUKCESU
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Profesjonalne usługi żelbetowe dla generalnych wykonawców, deweloperów i inwestorów prywatnych. 15+ lat doświadczenia w branży.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Bezpłatna wycena
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Phone className="mr-2 w-4 h-4" />
                Zadzwoń teraz
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "15+", label: "Lat doświadczenia" },
                { value: "200+", label: "Realizacji" },
                { value: "100%", label: "Terminowość" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 border border-primary/20">
              <Image
                src="/first.jpg"
                alt="Konstrukcje żelbetowe"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT SECTION - Split Layout (layout1 pattern)
// ============================================
function AboutSplit() {
  const features = [
    { icon: Building2, text: "Kompleksowa obsługa inwestycji" },
    { icon: Hammer, text: "Własny sprzęt i ekipy" },
    { icon: Users, text: "Doświadczeni specjaliści" },
    { icon: Clock, text: "Terminowa realizacja" }
  ]

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / O Firmie
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NIEDZIELA & KŁUSEK<br />
              <span className="text-muted-foreground">TO GWARANCJA JAKOŚCI</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Od 2008 roku specjalizujemy się w kompleksowym wykonawstwie konstrukcji żelbetowych. Realizujemy projekty dla największych generalnych wykonawców w Polsce.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-white">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Poznaj nas bliżej
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[450px]"
          >
            <Image
              src="/second.jpg"
              alt="O firmie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/50" />
            {/* Overlay box */}
            <div className="absolute bottom-6 left-6 bg-primary p-6 max-w-xs">
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm">lat na rynku budowlanym</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES GALLERY - Grid Layout
// ============================================
function ServicesGallery() {
  const services = [
    {
      title: "Fundamenty",
      desc: "Płyty i ławy fundamentowe",
      image: "/s-real-foundations.jpg"
    },
    {
      title: "Ściany",
      desc: "Ściany żelbetowe i oporowe",
      image: "/s-real-walls.jpg"
    },
    {
      title: "Stropy",
      desc: "Stropy monolityczne",
      image: "/s-real-ceilings.png"
    },
    {
      title: "Specjalne",
      desc: "Konstrukcje nietypowe",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KOMPLEKSOWE USŁUGI<br />
            <span className="text-muted-foreground">ŻELBETOWE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Od fundamentów po stropy - realizujemy pełen zakres robót konstrukcyjnych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[300px] overflow-hidden cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PORTFOLIO - Grid 3 Columns (portfolio11 pattern)
// ============================================
function PortfolioGrid() {
  const projects = [
    { title: "Hala Logistyczna", location: "Kraków", image: "/first.jpg", type: "Przemysł" },
    { title: "Osiedle Mieszkaniowe", location: "Rzeszów", image: "/second.jpg", type: "Deweloperka" },
    { title: "Centrum Handlowe", location: "Tarnów", image: "/third.jpg", type: "Komercja" },
    { title: "Dom Jednorodzinny", location: "Nowy Sącz", image: "/fourth.jpg", type: "Prywatne" },
    { title: "Magazyn Wysokiego Składu", location: "Dębica", image: "/s-real-special.jpg", type: "Przemysł" },
    { title: "Parking Podziemny", location: "Kraków", image: "/s-real-foundations.jpg", type: "Infrastruktura" }
  ]

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NASZE REALIZACJE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wybrane projekty z ostatnich lat. Każda inwestycja to dowód naszego profesjonalizmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[350px] overflow-hidden cursor-pointer border border-border"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-mono">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Zobacz wszystkie realizacje
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA SECTION - Split Layout (cta1 pattern)
// ============================================
function CtaSplit() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GOTOWY NA<br />
              <span className="text-primary">WSPÓŁPRACĘ?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę w ciągu 24 godzin. Jesteśmy gotowi do realizacji Twojego projektu.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Bezpłatna wycena w 24h",
                "Elastyczne terminy realizacji",
                "Gwarancja jakości wykonania"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

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

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/third.jpg"
              alt="Współpraca"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Variant6Page() {
  return (
    <main className="bg-background">
      <HeroSplit />
      <AboutSplit />
      <ServicesGallery />
      <PortfolioGrid />
      <CtaSplit />
      <ContactSection />
      <Footer />
    </main>
  )
}
