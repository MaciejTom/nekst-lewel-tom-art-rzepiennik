"use client"

import { motion } from "framer-motion"
import { Layers, Users, MapPin, Clock, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Kompleksowość",
    desc: "Od fundamentów po stropy. Pełen zakres robót żelbetowych w jednym miejscu.",
    colSpan: "md:col-span-2",
    bg: "bg-card"
  },
  {
    icon: Clock,
    title: "Wycena 24h",
    desc: "Szybki kosztorys bez zbędnej zwłoki.",
    colSpan: "md:col-span-1",
    bg: "bg-secondary/10"
  },
  {
    icon: Users,
    title: "Własny Zespół",
    desc: "Sprawdzeni specjaliści. Żadnych przypadkowych podwykonawców.",
    colSpan: "md:col-span-1",
    bg: "bg-card"
  },
  {
    icon: MapPin,
    title: "4 Województwa",
    desc: "Małopolskie, Śląskie, Podkarpackie, Świętokrzyskie.",
    colSpan: "md:col-span-2",
    bg: "bg-card"
  }
]

export function WhyUsSection() {
  return (
    <section id="dlaczego-my" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Header Area */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                DLACZEGO <br/>
                <span className="text-primary">NIEDZIELA & KŁUSEK?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Łączymy inżynierską precyzję z terminowością. Nasze podejście opiera się na transparentności i solidnym wykonawstwie.
              </p>
              <div className="h-1 w-20 bg-primary mb-8" />
              
              <div className="hidden lg:block text-sm text-muted-foreground font-mono">
                <p>STATUS: DOSTĘPNI</p>
                <p>LOKALIZACJA: TARNÓW</p>
              </div>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={`${feature.colSpan} ${feature.bg} group relative overflow-hidden border border-border hover:border-primary/50 transition-colors p-6 flex flex-col justify-between`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-primary w-6 h-6" />
                </div>
                
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}