"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import Image from "next/image"
import { getPortfolioConfig, type PortfolioConfig, type PortfolioProject } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

/**
 * Portfolio Section - config-driven
 *
 * Warianty:
 * - mosaic: Bento-style grid z różnymi rozmiarami
 * - grid-3col: Równy grid 3 kolumnowy
 * - carousel: Karuzela projektów
 */
export function Portfolio() {
  const config = getPortfolioConfig()

  switch (config.variant) {
    case 'grid-3col':
      return <PortfolioGrid3Col config={config} />
    case 'carousel':
      return <PortfolioCarousel config={config} />
    case 'mosaic':
    default:
      return <PortfolioMosaic config={config} />
  }
}

// ============ VARIANTS ============

interface PortfolioVariantProps {
  config: PortfolioConfig
}

/**
 * Wariant: mosaic
 * Bento-style grid z różnymi rozmiarami kart
 */
function PortfolioMosaic({ config }: PortfolioVariantProps) {
  // Determine grid sizes based on featured flag
  const getSizeClass = (project: PortfolioProject, index: number) => {
    if (project.featured) {
      return "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto h-auto min-h-[400px]"
    }
    if (index === config.projects.length - 1) {
      return "col-span-1 md:col-span-2 row-span-1 aspect-[2/1] h-auto"
    }
    return "col-span-1 md:col-span-1 row-span-1 aspect-square h-auto"
  }

  return (
    <SectionWrapper id="realizacje" darkBg showGrid>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          {config.sectionLabel && (
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
              {config.sectionLabel}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {config.title}{" "}
            {config.titleAccent && (
              <span className="text-muted-foreground">{config.titleAccent}</span>
            )}
          </h2>
        </div>
        {config.stats && config.stats.length > 0 && (
          <div className="flex gap-4">
            {config.stats.map((stat, index) => (
              <div key={index} className="flex gap-4">
                {index > 0 && <div className="w-px h-12 bg-border" />}
                <div className="text-right">
                  <div className={`text-3xl font-bold ${index === 0 ? 'text-white' : 'text-primary'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {config.projects.map((project, index) => (
          <PortfolioMosaicCard
            key={index}
            project={project}
            index={index}
            sizeClass={getSizeClass(project, index)}
          />
        ))}
      </div>

      {/* Gallery Button */}
      {config.showGalleryButton && (
        <div className="mt-12 text-center">
          <button className="border border-border text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300">
            {config.galleryButtonText || "Zobacz Pełną Galerię"}
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}

/**
 * Wariant: grid-3col
 * Równy grid 3 kolumnowy
 */
function PortfolioGrid3Col({ config }: PortfolioVariantProps) {
  return (
    <SectionWrapper id="realizacje" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
        centered
      />

      {/* Stats */}
      {config.stats && config.stats.length > 0 && (
        <div className="flex justify-center gap-8 mt-8 mb-16">
          {config.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {config.projects.map((project, index) => (
          <PortfolioSimpleCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Gallery Button */}
      {config.showGalleryButton && (
        <div className="mt-12 text-center">
          <button className="border border-border text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300">
            {config.galleryButtonText || "Zobacz Pełną Galerię"}
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}

/**
 * Wariant: carousel
 * Horizontal scrollable cards
 */
function PortfolioCarousel({ config }: PortfolioVariantProps) {
  return (
    <SectionWrapper id="realizacje" showGrid>
      <SectionHeader
        label={config.sectionLabel}
        title={config.title}
        titleAccent={config.titleAccent}
      />

      {/* Stats inline with header */}
      {config.stats && config.stats.length > 0 && (
        <div className="flex gap-8 mt-4 mb-12">
          {config.stats.map((stat, index) => (
            <div key={index}>
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-muted-foreground ml-2">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Scrollable carousel */}
      <div className="-mx-6 px-6 overflow-x-auto">
        <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
          {config.projects.map((project, index) => (
            <div key={index} className="w-[350px] flex-shrink-0">
              <PortfolioSimpleCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Button */}
      {config.showGalleryButton && (
        <div className="mt-8">
          <button className="border border-border text-white px-6 py-3 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300">
            {config.galleryButtonText || "Zobacz Pełną Galerię"}
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}

// ============ SHARED COMPONENTS ============

interface PortfolioCardProps {
  project: PortfolioProject
  index: number
}

/**
 * Karta mosaic dla wariantu mosaic
 */
function PortfolioMosaicCard({ project, index, sizeClass }: PortfolioCardProps & { sizeClass: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300 ${sizeClass}`}
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
            Realizacja #{index + 1}
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
            <MapPin className="w-3 h-3" /> {project.category}
          </span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full" />
          <span>{project.specs}</span>
        </div>
      </div>

      {/* Technical Corners */}
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

/**
 * Prosta karta dla wariantów grid-3col i carousel
 */
function PortfolioSimpleCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card border border-border hover:border-primary/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

        {/* Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Wyróżnione
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-primary font-mono uppercase mb-2">{project.category}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.specs}</p>
      </div>
    </motion.div>
  )
}

export default Portfolio
