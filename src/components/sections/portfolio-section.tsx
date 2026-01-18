"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Obiekt przemysłowy",
    location: "Konstrukcja żelbetowa",
    specs: "Fundamenty płytowe + ściany żelbetowe",
    image: "/1.jpg",
    size: "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto h-auto min-h-[400px]",
  },
  {
    id: 2,
    title: "Budynek mieszkalny",
    location: "Ściany żelbetowe",
    specs: "Ściany piwnic i kondygnacji",
    image: "/3.jpg",
    size: "col-span-1 md:col-span-1 row-span-1 aspect-square h-auto",
  },
  {
    id: 3,
    title: "Strop monolityczny",
    location: "Strop żelbetowy",
    specs: "Zbrojenie i deskowanie",
    image: "/2.jpg",
    size: "col-span-1 md:col-span-1 row-span-1 aspect-square h-auto",
  },
  {
    id: 4,
    title: "Fundamenty pod halę",
    location: "Ławy i stopy",
    specs: "Zbrojenie pod konstrukcję stalową",
    image: "/4.jpg",
    size: "col-span-1 md:col-span-2 row-span-1 aspect-[2/1] h-auto",
  }
]

export function PortfolioSection() {
  return (
    <section id="realizacje" className="bg-black py-24 relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
              / REALIZACJE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              PRZYKŁADOWE <span className="text-muted-foreground">REALIZACJE</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
               <div className="text-3xl font-bold text-white">45+</div>
               <div className="text-xs text-muted-foreground uppercase">Zakończonych Inwestycji</div>
             </div>
             <div className="w-px h-12 bg-border" />
             <div className="text-right">
               <div className="text-3xl font-bold text-primary">100%</div>
               <div className="text-xs text-muted-foreground uppercase">Terminowości</div>
             </div>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300 ${project.size}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                   <div className="bg-primary/90 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider inline-block">
                     Realizacja #{project.id}
                   </div>
                   <div className="bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                     <ArrowUpRight className="text-white w-5 h-5" />
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{project.specs}</span>
                </div>
              </div>

              {/* Technical Corners */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />

            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border border-border text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300">
            Zobacz Pełną Galerię
          </button>
        </div>

      </div>
    </section>
  )
}
