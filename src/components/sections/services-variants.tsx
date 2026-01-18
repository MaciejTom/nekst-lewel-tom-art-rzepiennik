"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cuboid, Blocks, Layers3, Cylinder, Check, ArrowRight, Minus } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "fundamenty",
    icon: Cuboid,
    title: "Fundamenty",
    shortDesc: "Ławy, stopy i płyty fundamentowe.",
    fullDesc: "Solidna podstawa każdej inwestycji. Wykonujemy precyzyjne zbrojenia i betonowanie ław oraz płyt fundamentowych zgodnie z normami.",
    image: "/s-real-walls.jpg", // Swapped per previous request
    items: ["Płyty fundamentowe", "Stopy pod słupy", "Izolacje przeciwwilgociowe", "Chudy beton"]
  },
  {
    id: "sciany",
    icon: Blocks,
    title: "Ściany i Słupy",
    shortDesc: "Konstrukcje pionowe w szalunkach.",
    fullDesc: "Realizujemy ściany nośne, szyby windowe oraz słupy żelbetowe. Gwarantujemy idealną geometrię i gładkość powierzchni betonu.",
    image: "/s-real-foundations.jpg", // Swapped per previous request
    items: ["Ściany nośne", "Mury oporowe", "Słupy i filary", "Szyby windowe"]
  },
  {
    id: "stropy",
    icon: Layers3,
    title: "Stropy i Belki",
    shortDesc: "Monolityczne i prefabrykowane.",
    fullDesc: "Kompleksowe wykonawstwo stropów. Od szalowania, przez zbrojenie, aż po betonowanie i pielęgnację. Dowolna technologia.",
    image: "/s-real-ceilings.png",
    items: ["Stropy monolityczne", "Stropy Teriva", "Wieńce i nadproża", "Balkony i tarasy"]
  },
  {
    id: "specjalne",
    icon: Cylinder,
    title: "Specjalne",
    shortDesc: "Zbiorniki i nietypowe formy.",
    fullDesc: "Realizujemy skomplikowane formy inżynierskie wymagające indywidualnego podejścia i nietypowych szalunków.",
    image: "/s-real-special.jpg",
    items: ["Schody żelbetowe", "Zbiorniki szczelne", "Doki przeładunkowe", "Elementy małej architektury"]
  }
]

// --- WARIANT 1: CONCRETE TABS (Surowy Beton) ---
export function ServicesVariant1() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section className="bg-zinc-950 py-24 relative border-b border-white/10">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-sm font-mono text-primary mb-2">WARIANT 1: CONCRETE TABS</h2>
        <h3 className="text-4xl font-bold text-white">ZAKRES PRAC</h3>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-0 border border-zinc-800 bg-zinc-900">
          
          {/* Left: Tabs */}
          <div className="lg:w-1/3 flex flex-col border-r border-zinc-800">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`group relative p-8 text-left transition-all duration-300 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/50 ${
                  active === service.id ? "bg-zinc-800" : ""
                }`}
              >
                {active === service.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                )}
                <h4 className={`text-xl font-bold mb-2 ${active === service.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                  {service.title}
                </h4>
                <p className="text-sm text-zinc-500 line-clamp-2">{service.shortDesc}</p>
              </button>
            ))}
          </div>

          {/* Right: Content */}
          <div className="lg:w-2/3 relative h-[600px] lg:h-auto bg-black p-12">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === active && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-8">
                       <service.icon className="w-10 h-10 text-primary" />
                       <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                    </div>

                    <div className="relative w-full h-64 mb-8 overflow-hidden rounded-sm border border-zinc-800">
                       <Image src={service.image} alt={service.title} fill className="object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <p className="text-zinc-400 text-lg mb-8">{service.fullDesc}</p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                           {item}
                        </div>
                      ))}
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

// --- WARIANT 2: DIGITAL CONSOLE (Panel Sterowania) ---
export function ServicesVariant2() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section className="bg-black py-24 relative border-b border-white/10 overflow-hidden">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-sm font-mono text-primary mb-12">WARIANT 2: DIGITAL CONSOLE</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Buttons */}
          <div className="lg:col-span-4 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`w-full flex items-center justify-between p-6 border transition-all duration-300 ${
                  active === service.id 
                    ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(255,94,0,0.2)]" 
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
                }`}
              >
                <div className="flex items-center gap-4">
                  <service.icon className={`w-6 h-6 ${active === service.id ? "text-primary" : "text-zinc-600"}`} />
                  <span className={`font-mono font-bold uppercase ${active === service.id ? "text-white" : "text-zinc-500"}`}>
                    {service.title}
                  </span>
                </div>
                {active === service.id && <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Right: Screen */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 relative h-[600px] p-1">
             <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-600 m-2" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-600 m-2" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-600 m-2" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-600 m-2" />

             <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === active && (
                  <motion.div
                     key={service.id}
                     initial={{ opacity: 0, scale: 0.98 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     className="relative h-full w-full overflow-hidden bg-black"
                  >
                     <Image src={service.image} alt={service.title} fill className="object-cover opacity-60" />
                     <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
                     
                     <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 p-12 flex flex-col justify-center">
                       <h3 className="text-5xl font-bold text-white mb-6 uppercase leading-none">{service.title}</h3>
                       <div className="w-12 h-1 bg-primary mb-6" />
                       <p className="text-zinc-300 mb-8 leading-relaxed">{service.fullDesc}</p>
                       <ul className="space-y-3">
                         {service.items.map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-primary font-mono text-sm">
                             <span className="text-zinc-600">[+]</span> {item}
                           </li>
                         ))}
                       </ul>
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

// --- WARIANT 3: CLEAN ENGINEERING (Czysta Inżynieria) ---
export function ServicesVariant3() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section className="bg-black py-24 relative border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-16">WARIANT 3: CLEAN ENGINEERING</h2>
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Lista jako proste linki tekstowe */}
          <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                className="group text-left flex items-center gap-6"
              >
                <span className={`font-mono text-sm transition-colors ${active === service.id ? "text-primary" : "text-zinc-700"}`}>
                  0{index + 1}
                </span>
                <span className={`text-3xl md:text-5xl font-bold transition-all duration-300 ${
                   active === service.id 
                     ? "text-white translate-x-4" 
                     : "text-zinc-800 group-hover:text-zinc-600"
                }`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Kontent */}
          <div className="lg:w-2/3 relative h-[500px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                 service.id === active && (
                   <motion.div
                     key={service.id}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                     className="h-full flex flex-col md:flex-row gap-8"
                   >
                     {/* Obrazek wertykalny */}
                     <div className="relative w-full md:w-1/2 h-full bg-zinc-900">
                        <Image src={service.image} alt={service.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                     </div>
                     
                     {/* Tekst */}
                     <div className="w-full md:w-1/2 pt-8">
                        <service.icon className="w-12 h-12 text-white mb-6" strokeWidth={1} />
                        <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Szczegóły</h4>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                          {service.fullDesc}
                        </p>
                        <div className="h-px w-full bg-zinc-800 mb-8" />
                        <div className="flex flex-wrap gap-2">
                           {service.items.map((item, i) => (
                             <span key={i} className="px-3 py-1 border border-zinc-800 text-zinc-400 text-xs uppercase">
                               {item}
                             </span>
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

// --- WARIANT 4: HEAVY BLOCKS (Masywne Bloki) ---
export function ServicesVariant4() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section className="bg-zinc-950 py-24 relative border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-12">WARIANT 4: HEAVY BLOCKS</h2>
        
        {/* Górna nawigacja w postaci klocków */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
           {services.map((service) => (
             <button
               key={service.id}
               onClick={() => setActive(service.id)}
               className={`h-32 p-6 flex flex-col justify-between border-2 transition-all duration-300 ${
                 active === service.id 
                   ? "border-primary bg-primary text-black" 
                   : "border-zinc-800 bg-black text-zinc-500 hover:border-zinc-600"
               }`}
             >
               <service.icon className="w-6 h-6" />
               <span className="font-bold uppercase text-sm text-left">{service.title}</span>
             </button>
           ))}
        </div>

        {/* Dolny kontent */}
        <div className="bg-black border border-zinc-800 min-h-[400px] relative">
           <AnimatePresence mode="wait">
             {services.map((service) => (
               service.id === active && (
                 <motion.div
                   key={service.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                   className="flex flex-col md:flex-row h-full"
                 >
                   <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:bg-gradient-to-l" />
                   </div>
                   
                   <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-white mb-6">
                        {service.title} <span className="text-primary">.</span>
                      </h3>
                      <p className="text-zinc-400 text-lg mb-8">
                        {service.fullDesc}
                      </p>
                      <div className="space-y-2">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                             <Minus className="w-4 h-4 text-primary" />
                             <span className="text-zinc-300">{item}</span>
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
    </section>
  )
}

// --- WARIANT 5: GLASS OVERLAY (Szklana Nakładka) ---
export function ServicesVariant5() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section className="bg-black py-24 relative border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-12">WARIANT 5: GLASS OVERLAY</h2>
        
        <div className="relative h-[700px] w-full rounded-2xl overflow-hidden border border-zinc-800">
          
          {/* Background Image changes with selection */}
          <div className="absolute inset-0 z-0">
             <AnimatePresence mode="wait">
               {services.map((service) => (
                 service.id === active && (
                   <motion.div
                     key={service.id}
                     initial={{ opacity: 0, scale: 1.1 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.7 }}
                     className="absolute inset-0"
                   >
                     <Image src={service.image} alt={service.title} fill className="object-cover" />
                     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> {/* Blur background */}
                   </motion.div>
                 )
               ))}
             </AnimatePresence>
          </div>

          <div className="relative z-10 h-full flex flex-col md:flex-row">
            
            {/* Left Menu */}
            <div className="w-full md:w-1/3 bg-black/40 backdrop-blur-md border-r border-white/10 flex flex-col justify-center p-8 space-y-2">
               {services.map((service) => (
                 <button
                   key={service.id}
                   onClick={() => setActive(service.id)}
                   className={`p-4 rounded-lg text-left transition-all ${
                     active === service.id 
                       ? "bg-primary text-black font-bold shadow-lg transform scale-105" 
                       : "text-white/70 hover:bg-white/10"
                   }`}
                 >
                   {service.title}
                 </button>
               ))}
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 p-12 md:p-20 flex flex-col justify-center">
               <AnimatePresence mode="wait">
                 {services.map((service) => (
                   service.id === active && (
                     <motion.div
                       key={service.id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -20 }}
                     >
                       <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur">
                          <service.icon className="w-8 h-8 text-primary" />
                       </div>
                       <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                         {service.title}
                       </h2>
                       <p className="text-xl text-white/80 leading-relaxed mb-8 drop-shadow-md">
                         {service.fullDesc}
                       </p>
                       <div className="grid grid-cols-2 gap-4">
                         {service.items.map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-white/90">
                              <Check className="w-5 h-5 text-primary" />
                              {item}
                           </div>
                         ))}
                       </div>
                     </motion.div>
                   )
                 ))}
               </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
