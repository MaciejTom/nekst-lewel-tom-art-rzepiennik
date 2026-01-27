import { HeroWireframe } from "@/components/wireframe/hero-wireframe"
import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { ServicesEditorialWireframe } from "@/components/wireframe/services-editorial-wireframe"
import { ServicesIconGridWireframe } from "@/components/wireframe/services-icon-grid-wireframe"
import { ServicesOverlayWireframe } from "@/components/wireframe/services-overlay-wireframe"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ServicesCardsSection } from "@/components/sections/services-cards-section"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { ServicesOverlaySection } from "@/components/sections/services-overlay-section"
import { wireframeHero } from "@/content/wireframe/hero"
import { wireframePortfolio } from "@/content/wireframe/portfolio"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { wireframeServicesIconGrid } from "@/content/wireframe/services-icon-grid"
import {
  wireframeServicesOverlay,
  wireframeOverlay4,
  wireframeOverlay3,
  wireframeOverlay3Cta,
  wireframeOverlay5Cta,
} from "@/content/wireframe/services-overlay"
import { tomArtPortfolio } from "@/content/tom-art/portfolio"
import { tomArtServices } from "@/content/tom-art/services"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"
import { tomArtServicesOverlay } from "@/content/tom-art/services-overlay"

function SectionGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b-4 border-border">
      <div className="px-6 py-4 bg-foreground text-background">
        <h2 className="text-sm font-bold font-mono uppercase tracking-widest">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function ComponentLabel({ label, variant }: { label: string; variant: "wireframe" | "styled" }) {
  return (
    <div className="px-6 py-2 bg-muted border-b border-border flex items-center gap-3">
      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border ${
        variant === "wireframe"
          ? "border-border text-muted-foreground"
          : "border-foreground text-foreground"
      }`}>
        {variant}
      </span>
      <code className="text-xs text-muted-foreground">{label}</code>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground font-mono">
          Wireframe Templates
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Klocki do skladania stron. Wybierz layout, podmien content.
        </p>
      </header>

      <main>
        {/* ── HERO ── */}
        <SectionGroup title="Hero">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="HeroWireframe — full-screen, badge + 3-line headline + CTA + stats + scroll" variant="wireframe" />
            <HeroWireframe content={wireframeHero} />
          </div>
        </SectionGroup>

        {/* ── SERVICES EDITORIAL ── */}
        <SectionGroup title="Services Editorial">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="ServicesEditorialWireframe — alternating image+text rows, step badges" variant="wireframe" />
            <ServicesEditorialWireframe content={wireframeServicesEditorial} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="ServicesEditorialSection — serif, Material Symbols, dekoracyjne ramki" variant="styled" />
            <ServicesEditorialSection content={tomArtServicesEditorial} />
          </div>
        </SectionGroup>

        {/* ── SERVICES OVERLAY ── */}
        <SectionGroup title="Services Overlay">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="5 items → 3+2 centered" variant="wireframe" />
            <ServicesOverlayWireframe content={wireframeServicesOverlay} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="4 items → 2+2" variant="wireframe" />
            <ServicesOverlayWireframe content={wireframeOverlay4} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="3 items → 3 in a row" variant="wireframe" />
            <ServicesOverlayWireframe content={wireframeOverlay3} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="3 items + CTA card → 3+1 centered" variant="wireframe" />
            <ServicesOverlayWireframe content={wireframeOverlay3Cta} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="5 items + CTA card → 3+3" variant="wireframe" />
            <ServicesOverlayWireframe content={wireframeOverlay5Cta} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="ServicesOverlaySection — styled, gradient, hover scale" variant="styled" />
            <ServicesOverlaySection content={tomArtServicesOverlay} />
          </div>
        </SectionGroup>

        {/* ── SERVICES CARDS ── */}
        <SectionGroup title="Services Cards">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="ServicesCardsSection — karty 3+2 grid, shadow-md" variant="styled" />
            <ServicesCardsSection content={tomArtServices} />
          </div>
        </SectionGroup>

        {/* ── SERVICES ICON GRID ── */}
        <SectionGroup title="Services Icon Grid">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="ServicesIconGridWireframe — centered header + 4-col icon cards, no images" variant="wireframe" />
            <ServicesIconGridWireframe content={wireframeServicesIconGrid} />
          </div>
        </SectionGroup>

        {/* ── PORTFOLIO ── */}
        <SectionGroup title="Portfolio">
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="PortfolioWireframe — mosaic grid: featured (2x2) + normal (1x1) + wide (2x1)" variant="wireframe" />
            <PortfolioWireframe content={wireframePortfolio} />
          </div>
          <div className="border-b border-dashed border-border">
            <ComponentLabel label="PortfolioSection — framer-motion, corner accents, next/image" variant="styled" />
            <PortfolioSection content={tomArtPortfolio} />
          </div>
        </SectionGroup>
      </main>
    </div>
  )
}
