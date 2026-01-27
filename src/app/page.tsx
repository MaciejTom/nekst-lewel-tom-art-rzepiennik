import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { ServicesEditorialWireframe } from "@/components/wireframe/services-editorial-wireframe"
import { ServicesOverlayWireframe } from "@/components/wireframe/services-overlay-wireframe"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ServicesCardsSection } from "@/components/sections/services-cards-section"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { ServicesOverlaySection } from "@/components/sections/services-overlay-section"
import { wireframePortfolio } from "@/content/wireframe/portfolio"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { wireframeServicesOverlay } from "@/content/wireframe/services-overlay"
import { tomArtPortfolio } from "@/content/tom-art/portfolio"
import { tomArtServices } from "@/content/tom-art/services"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"
import { tomArtServicesOverlay } from "@/content/tom-art/services-overlay"

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
        {/* Services Editorial (TOM-ART) */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              ServicesEditorialSection — alternating image+text, 5 etapow, CTA, Material Symbols
            </code>
          </div>
          <ServicesEditorialSection content={tomArtServicesEditorial} />
        </div>

        {/* Services Overlay (TOM-ART) */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              ServicesOverlaySection — overlay cards 3+2, zdjecie tlo + gradient, hover scale + line, Material Symbols
            </code>
          </div>
          <ServicesOverlaySection content={tomArtServicesOverlay} />
        </div>

        {/* Services Cards (TOM-ART) */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              ServicesCardsSection — karty uslug 3+2 grid, shadow-md, h2-accent, TOM-ART content
            </code>
          </div>
          <ServicesCardsSection content={tomArtServices} />
        </div>

        {/* Services Editorial Wireframe */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              ServicesEditorialWireframe — alternating image+text rows, 50/50 split, step badges, neutral
            </code>
          </div>
          <ServicesEditorialWireframe content={wireframeServicesEditorial} />
        </div>

        {/* Services Overlay Wireframe */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              ServicesOverlayWireframe — overlay cards 3+2, image placeholder + content overlay, neutral
            </code>
          </div>
          <ServicesOverlayWireframe content={wireframeServicesOverlay} />
        </div>

        {/* Portfolio Wireframe */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              PortfolioWireframe — grid: featured (2x2) + normal (1x1) + wide (2x1)
            </code>
          </div>
          <PortfolioWireframe content={wireframePortfolio} />
        </div>

        {/* Portfolio Section (styled) */}
        <div className="border-b border-dashed border-border">
          <div className="px-6 py-3 bg-muted border-b border-border">
            <code className="text-xs text-muted-foreground">
              PortfolioSection — stylowany komponent z dekoracjami, animacjami, next/image
            </code>
          </div>
          <PortfolioSection content={tomArtPortfolio} />
        </div>
      </main>
    </div>
  )
}
