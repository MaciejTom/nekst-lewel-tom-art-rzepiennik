"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Building2, Factory, Home, Users } from "lucide-react"

const segments = [
  {
    id: "01",
    title: "GENERALNI WYKONAWCY",
    desc: "Szukacie solidnego podwykonawcy na żelbet? Wchodzimy w Wasz harmonogram, dowozimy terminowo, raportujemy postępy.",
    image: "/ai-third.jpg",
    icon: Building2,
    tags: ["Podwykonawstwo", "Terminowość"]
  },
  {
    id: "02",
    title: "PRZEMYSŁ I HALE",
    desc: "Hale magazynowe, zakłady produkcyjne, obiekty logistyczne. Fundamenty pod maszyny, zbiorniki technologiczne.",
    image: "/ai-first.jpg",
    icon: Factory,
    tags: ["Fundamenty Maszyn", "Konstrukcje Oporowe"]
  },
  {
    id: "03",
    title: "DEWELOPERZY",
    desc: "Budynki wielorodzinne, osiedla, apartamentowce. Fundamenty i konstrukcje żelbetowe dla inwestycji mieszkaniowych.",
    image: "/ai-fourth.jpg",
    icon: Users,
    tags: ["Stany Surowe", "Garaże Podziemne"]
  },
  {
    id: "04",
    title: "INWESTORZY PRYWATNI",
    desc: "Dom jednorodzinny lub mały obiekt? Zajmiemy się fundamentami i konstrukcją żelbetową. Ten sam zespół, ta sama jakość.",
    image: "/ai-second.jpg",
    icon: Home,
    tags: ["Domy", "Obiekty Prywatne"]
  }
]

export function ForWhomSection() {
  return (
    <section id="dla-kogo" className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-border pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                / ODBIORCY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              DLA KOGO<br />
              <span className="text-muted-foreground">PRACUJEMY?</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-sm text-muted-foreground font-mono">DOSTĘPNOŚĆ EKIP:</div>
            <div className="text-primary font-bold">NATYCHMIASTOWA</div>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-[420px] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 z-[15] bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300">
                  <Icon className="text-primary w-6 h-6" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  {/* Top Row */}
                  <div className="flex justify-end">
                    <div className="bg-black/60 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="text-primary w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {segment.title}
                    </h3>

                    {/* Description - visible on hover */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {segment.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {segment.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 px-2 py-1 bg-primary/10 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-border group-hover:border-primary/30 transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
