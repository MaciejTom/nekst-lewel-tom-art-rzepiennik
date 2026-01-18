"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Building2, Factory, Home, User } from "lucide-react"

const segments = [
  {
    id: "01",
    title: "Generalni Wykonawcy",
    desc: "Partnerstwo, terminowość i pełna dokumentacja powykonawcza. Wchodzimy w Twój harmonogram.",
    image: "/1.jpg",
    icon: Building2
  },
  {
    id: "02",
    title: "Przemysł i Hale",
    desc: "Fundamenty pod maszyny, posadzki przemysłowe i konstrukcje o podwyższonej wytrzymałości.",
    image: "/2.jpg",
    icon: Factory
  },
  {
    id: "03",
    title: "Deweloperzy",
    desc: "Osiedla mieszkaniowe, garaże podziemne i stropy wielkopowierzchniowe. Skala to nie problem.",
    image: "/3.jpg",
    icon: Home
  },
  {
    id: "04",
    title: "Inwestorzy Prywatni",
    desc: "Budowa domu systemem gospodarczym? Zrobimy stan zerowy i stan surowy otwarty.",
    image: "/4.jpg",
    icon: User
  }
]

// --- WARIANT 1: AKORDEON (Stripes) ---
export function ForWhomVariant1() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-black py-24 border-b border-white/10">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-sm font-mono text-primary mb-2">WARIANT 1: AKORDEON</h2>
        <h3 className="text-4xl font-bold text-white">ODBIORCY</h3>
      </div>
      
      <div className="flex flex-col lg:flex-row h-[600px] w-full bg-zinc-900">
        {segments.map((segment, index) => (
          <motion.div
            key={index}
            className="relative h-full border-r border-black overflow-hidden cursor-pointer group"
            initial={{ flex: 1 }}
            animate={{ flex: active === index ? 3 : 1 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            onHoverStart={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <Image
              src={segment.image}
              alt={segment.title}
              fill
              className={`object-cover transition-all duration-700 ${active === index ? 'grayscale-0 scale-105' : 'grayscale opacity-50'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-6xl font-bold text-white/10 absolute -top-20 left-4 pointer-events-none">
                {segment.id}
              </div>
              <h3 className={`text-2xl font-bold text-white mb-4 whitespace-nowrap ${active !== index ? 'lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8' : ''}`}>
                {segment.title}
              </h3>
              
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 max-w-md">{segment.desc}</p>
                    <button className="mt-4 text-primary text-sm font-bold uppercase flex items-center gap-2">
                      Współpraca <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// --- WARIANT 2: LISTA SKUPIENIA (Focus List) ---
export function ForWhomVariant2() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-zinc-950 py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-12">WARIANT 2: INTERAKTYWNA LISTA</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: List */}
          <div className="space-y-2">
            {segments.map((segment, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className={`p-8 cursor-pointer transition-all duration-300 border-l-4 ${
                  active === index 
                    ? "border-primary bg-white/5" 
                    : "border-zinc-800 hover:border-zinc-600 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${active === index ? 'text-white' : 'text-zinc-500'}`}>
                    {segment.title}
                  </h3>
                  <span className="text-zinc-700 font-mono text-sm">0{index + 1}</span>
                </div>
                <p className={`text-sm transition-colors ${active === index ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {segment.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image Display */}
          <div className="relative h-[500px] w-full overflow-hidden border border-zinc-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={segments[active].image}
                  alt={segments[active].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur p-4 border-l-2 border-primary">
                  {/* FIX: Use segments[active].icon instead of segment.icon */}
                  {(() => {
                    const Icon = segments[active].icon
                    return <Icon className="w-6 h-6 text-primary mb-2" />
                  })()}
                  <div className="text-white font-bold text-sm uppercase">Obszar Działania</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- WARIANT 3: KLASYCZNE KARTY (Classic Cards) ---
export function ForWhomVariant3() {
  return (
    <section className="bg-black py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-12">WARIANT 3: PIONOWE KARTY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="group bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-colors flex flex-col h-[500px]">
              <div className="relative h-3/5 overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 text-xs font-mono text-white border border-white/10">
                  SEKTOR {segment.id}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {segment.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-zinc-800 group-hover:bg-primary transition-colors mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- WARIANT 4: ZIG-ZAG (Przeplatanka) ---
export function ForWhomVariant4() {
  return (
    <section className="bg-zinc-950 py-24 border-b border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-primary mb-16">WARIANT 4: PRZEPLATANKA (ZIG-ZAG)</h2>
        
        <div className="space-y-0">
          {segments.map((segment, index) => (
            <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} h-[400px] border border-zinc-800 mb-[-1px]`}>
              {/* Image Side */}
              <div className="lg:w-1/2 relative h-full min-h-[300px] group overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Content Side */}
              <div className="lg:w-1/2 bg-zinc-900/50 p-12 flex flex-col justify-center items-start border-l border-r border-zinc-800">
                <div className="text-6xl font-bold text-zinc-800 mb-4">{segment.id}</div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {segment.title}
                </h3>
                <p className="text-zinc-400 text-lg mb-8 max-w-md">
                  {segment.desc}
                </p>
                <button className="text-primary font-bold uppercase text-sm tracking-widest hover:text-white transition-colors">
                  Szczegóły Oferty &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- WARIANT 5: MAGAZINE SLIDER ---
export function ForWhomVariant5() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % segments.length)
  const prev = () => setCurrent((prev) => (prev - 1 + segments.length) % segments.length)

  return (
    <section className="bg-black py-24 relative overflow-hidden h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={segments[current].image}
              alt={segments[current].title}
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
           <h2 className="text-sm font-mono text-primary mb-4">WARIANT 5: MAGAZINE SLIDER</h2>
           
           <motion.div
             key={current}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="mb-12"
           >
             <div className="text-8xl font-bold text-white/10 mb-[-20px] ml-[-5px]">
               {segments[current].id}
             </div>
             <h3 className="text-6xl font-bold text-white mb-8 leading-tight">
               {segments[current].title}
             </h3>
             <p className="text-xl text-zinc-300 max-w-lg leading-relaxed border-l-4 border-primary pl-6">
               {segments[current].desc}
             </p>
           </motion.div>

           <div className="flex gap-4">
             <button onClick={prev} className="w-14 h-14 border border-zinc-700 hover:border-primary text-white flex items-center justify-center transition-colors">
               &larr;
             </button>
             <button onClick={next} className="w-14 h-14 bg-primary text-black font-bold flex items-center justify-center hover:bg-white transition-colors">
               &rarr;
             </button>
           </div>
        </div>
      </div>
    </section>
  )
}