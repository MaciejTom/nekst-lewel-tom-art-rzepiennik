"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Building2, Hammer, Shield, Clock, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// ============================================
// HERO - Split with Large Image (header111 pattern)
// ============================================
function HeroSplit() {
  return (
    <section className="bg-background min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Content */}
      <div className="flex items-center p-12 lg:p-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Niedziela & Kłusek
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[0.9]">
            ŻELBET<br />
            <span className="text-primary">NA MIARĘ</span><br />
            TWOICH POTRZEB
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-lg">
            Kompleksowe usługi żelbetowe dla generalnych wykonawców, deweloperów i inwestorów prywatnych. 15 lat doświadczenia w branży budowlanej.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Bezpłatna wycena
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Phone className="mr-2 w-4 h-4" />
              Kontakt
            </Button>
          </div>

          {/* Mini Stats */}
          <div className="flex gap-8">
            {[
              { value: "15+", label: "Lat" },
              { value: "200+", label: "Projektów" },
              { value: "100%", label: "Terminowość" }
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative min-h-[500px] lg:min-h-full"
      >
        <Image
          src="/third.jpg"
          alt="Konstrukcje żelbetowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:via-background/20" />

        {/* Floating Card */}
        <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:w-80 bg-card/95 backdrop-blur-sm p-6 border border-border">
          <div className="text-primary font-mono text-xs uppercase mb-2">Aktualnie realizujemy</div>
          <div className="text-white font-bold text-lg mb-1">Centrum Logistyczne</div>
          <div className="text-muted-foreground text-sm">Kraków, Małopolskie</div>
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// SERVICES - Alternating Split (layout10 pattern)
// ============================================
function ServicesAlternating() {
  const services = [
    {
      icon: Building2,
      title: "FUNDAMENTY",
      desc: "Płyty fundamentowe, ławy, stopy. Profesjonalne zbrojenie i betonowanie z zachowaniem najwyższych standardów.",
      image: "/s-real-foundations.jpg",
      features: ["Płyty fundamentowe", "Ławy i stopy", "Izolacje"]
    },
    {
      icon: Hammer,
      title: "ŚCIANY ŻELBETOWE",
      desc: "Ściany nośne, oporowe, szyby windowe. Gwarantujemy idealną geometrię i gładkość powierzchni betonu.",
      image: "/s-real-walls.jpg",
      features: ["Ściany nośne", "Ściany oporowe", "Szyby windowe"]
    },
    {
      icon: Shield,
      title: "STROPY",
      desc: "Stropy monolityczne, prefabrykowane, gęstożebrowe. Kompleksowe wykonawstwo od szalowania po pielęgnację.",
      image: "/s-real-ceilings.png",
      features: ["Stropy monolityczne", "Prefabrykaty", "Żebra i wieńce"]
    },
    {
      icon: Clock,
      title: "KONSTRUKCJE SPECJALNE",
      desc: "Schody, balkony, nadproża, attyki. Niestandardowe rozwiązania konstrukcyjne wymagające precyzji.",
      image: "/s-real-special.jpg",
      features: ["Schody żelbetowe", "Balkony", "Elementy nietypowe"]
    }
  ]

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / Usługi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            KOMPLEKSOWE USŁUGI<br />
            <span className="text-muted-foreground">ŻELBETOWE</span>
          </h2>
        </div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-[450px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
                {/* Corner accents */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-6xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-8">{service.desc}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Więcej szczegółów
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PORTFOLIO - Split Cards (portfolio2 pattern)
// ============================================
function PortfolioSplit() {
  const projects = [
    { title: "Hala Logistyczna A4", location: "Kraków", area: "12,000 m²", image: "/first.jpg" },
    { title: "Osiedle Park Residence", location: "Rzeszów", area: "8,500 m²", image: "/second.jpg" },
    { title: "Centrum Dystrybucyjne", location: "Tarnów", area: "15,000 m²", image: "/third.jpg" },
    { title: "Willa Nowoczesna", location: "Nowy Sącz", area: "450 m²", image: "/fourth.jpg" }
  ]

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / Realizacje
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              WYBRANE PROJEKTY
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hidden md:flex">
            Wszystkie realizacje
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-[300px] overflow-hidden group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Content */}
              <div className={`p-8 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <div className="text-primary font-mono text-sm mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.location} • {project.area}</p>
                <Button variant="link" className="text-primary p-0">
                  Zobacz projekt <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// TEAM / ABOUT - Split (team11 pattern)
// ============================================
function TeamSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              / Zespół
            </span>

            <h2 className="text-4xl font-bold text-white mb-6">
              DOŚWIADCZONY<br />
              <span className="text-muted-foreground">ZESPÓŁ SPECJALISTÓW</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Nasz zespół to doświadczeni zbrojarze, cieśle i inżynierowie budowlani. Każdy projekt realizujemy własnymi siłami, bez przypadkowych podwykonawców.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Users, label: "30+ specjalistów" },
                { icon: Building2, label: "Własny sprzęt" },
                { icon: Shield, label: "Pełne ubezpieczenie" },
                { icon: Clock, label: "Elastyczne terminy" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-white text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Poznaj nas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="/second.jpg"
              alt="Zespół"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
            {/* Overlay box */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-white/80 text-sm">specjalistów</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA - Split (cta15 pattern)
// ============================================
function CtaSplit() {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ROZPOCZNIJ<br />
              <span className="text-primary">WSPÓŁPRACĘ</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę w ciągu 24 godzin. Jesteśmy gotowi do realizacji Twojego projektu.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 w-4 h-4" />
                Wyślij zapytanie
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
            <div className="absolute inset-0 border border-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Variant9Page() {
  return (
    <main className="bg-background">
      <HeroSplit />
      <ServicesAlternating />
      <PortfolioSplit />
      <TeamSection />
      <CtaSplit />
      <ContactSection />
      <Footer />
    </main>
  )
}
