"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cuboid, Blocks, Layers3, Cylinder, Check, ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "fundamenty",
    index: "01",
    icon: Cuboid,
    title: "Fundamenty",
    shortDesc: "Pod każdy obiekt budowlany.",
    fullDesc: "Ławy fundamentowe, płyty fundamentowe, stopy. Pod hale magazynowe, budynki mieszkalne, zakłady produkcyjne. Także fundamenty pod maszyny i urządzenia przemysłowe wymagające specjalnych parametrów.",
    image: "/s-real-walls.jpg",
    items: ["Ławy i stopy fundamentowe", "Płyty fundamentowe", "Fundamenty pod maszyny przemysłowe", "Fundamenty pod hale i magazyny"]
  },
  {
    id: "sciany",
    index: "02",
    icon: Blocks,
    title: "Ściany żelbetowe",
    shortDesc: "Nośne i mury oporowe.",
    fullDesc: "Ściany żelbetowe o dowolnym formacie - nośne, osłonowe, oporowe. Szalunki systemowe dla precyzji wykonania. Piwnice, podziemia garaży, ściany hal przemysłowych.",
    image: "/s-real-foundations.jpg",
    items: ["Ściany nośne żelbetowe", "Mury oporowe", "Ściany piwnic i garaży", "Ściany hal przemysłowych"]
  },
  {
    id: "stropy",
    index: "03",
    icon: Layers3,
    title: "Stropy",
    shortDesc: "Monolityczne i prefabrykowane.",
    fullDesc: "Stropy żelbetowe monolityczne, gęstożebrowe, z elementów prefabrykowanych. Dobór technologii do projektu i budżetu inwestora.",
    image: "/s-real-ceilings.png",
    items: ["Stropy monolityczne", "Stropy gęstożebrowe", "Stropy prefabrykowane", "Belki i podciągi"]
  },
  {
    id: "specjalne",
    index: "04",
    icon: Cylinder,
    title: "Konstrukcje specjalne",
    shortDesc: "Zbiorniki, mosty, przepusty.",
    fullDesc: "Zbiorniki okrągłe metodą studniarską, oczyszczalnie ścieków, przepompownie. Mosty, przepusty drogowe, kanały rewizyjne. Konstrukcje wymagające specjalistycznego doświadczenia.",
    image: "/s-real-special.jpg",
    items: ["Zbiorniki żelbetowe (metoda studniarska)", "Oczyszczalnie i przepompownie", "Mosty i przepusty drogowe", "Komory kanalizacyjne"]
  }
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section id="uslugi" className="bg-background py-24 relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            / USŁUGI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ZAKRES <span className="text-primary">ROBÓT ŻELBETOWYCH</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Wykonujemy konstrukcje żelbetowe dla budownictwa przemysłowego, mieszkaniowego i infrastrukturalnego.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] h-auto">
          
          {/* --- LEFT COLUMN: NAVIGATION LIST --- */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <div className="flex flex-col h-full bg-card border border-border">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`
                    group relative w-full text-left outline-none flex flex-col justify-center
                    flex-1 px-8 py-6 border-b lg:border-b-0 lg:border-l-4 transition-all duration-300
                    ${activeService === service.id 
                      ? "border-primary bg-white/5" 
                      : "border-transparent border-b-border hover:bg-white/[0.02]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`
                      text-lg lg:text-xl font-bold transition-colors
                      ${activeService === service.id ? "text-white" : "text-muted-foreground group-hover:text-white"}
                    `}>
                      {service.title}
                    </span>
                    
                    {activeService === service.id && (
                      <ArrowRight className="text-primary w-5 h-5 lg:w-6 lg:h-6 animate-in slide-in-from-left-2" />
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 opacity-70">
                    {service.shortDesc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL DISPLAY --- */}
          <div className="lg:col-span-8 relative min-h-[500px] lg:h-full bg-card border border-border overflow-hidden group">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col justify-end"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-black rounded-sm">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                        {service.fullDesc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm font-medium text-white/90">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}