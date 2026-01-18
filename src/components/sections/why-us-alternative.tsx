"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "PEŁEN ZAKRES ROBÓT",
    description: "Fundamenty, ściany nośne, stropy monolityczne, zbiorniki, mury oporowe. Jeden wykonawca na cały żelbet - bez koordynowania kilku ekip.",
    image: "/iconFirst-removebg-preview.png"
  },
  {
    title: "WŁASNY ZESPÓŁ",
    description: "Wykwalifikowani zbrojarze, cieśle szalunkowi, murarze. Nie korzystamy z przypadkowych podwykonawców - mamy stały, sprawdzony zespół.",
    image: "/iconCrew.png"
  },
  {
    title: "ZASIĘG 4 WOJEWÓDZTW",
    description: "Małopolskie, Podkarpackie, Śląskie, Świętokrzyskie. Dojeżdżamy na budowy w całej południowej Polsce.",
    image: "/iconPol-removebg-preview.png"
  },
  {
    title: "WYCENA W 24H",
    description: "Wyślij projekt - wycenę otrzymasz w ciągu jednego dnia roboczego. Bez czekania tygodniami.",
    image: "/iconRegion-removebg-preview.png"
  }
]

export function WhyUsAlternative() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{
             backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            DLACZEGO ZLECIĆ NAM <br/>
            <span className="text-primary border-b-4 border-primary pb-2">ROBOTY ŻELBETOWE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Specjalizujemy się w konstrukcjach żelbetowych od fundamentów po stropy.
            Pracujemy jako podwykonawca dla generalnych wykonawców i bezpośrednio dla inwestorów.
          </motion.p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Top Accent */}
              {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" /> */}
              
              {/* Icon Container with Glow */}
              <div className="relative w-64 h-64 mb-6 flex items-center justify-center">
                 <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="relative w-56 h-56 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Corner Indicators */}
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
