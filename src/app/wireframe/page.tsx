import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ServicesCardsSection } from "@/components/sections/services-cards-section"
import { wireframePortfolio } from "@/content/wireframe/portfolio"
import { demoPortfolio } from "@/content/demo"
import { tomArtServices } from "@/content/tom-art/services"

export default function WireframePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-200 px-6 py-4">
        <h1 className="text-lg font-semibold text-neutral-800 font-mono">
          Wireframe Templates
        </h1>
        <p className="text-sm text-neutral-400 font-mono">
          Klocki do skladania stron. Wybierz layout, podmien content.
        </p>
      </header>

      <main>
        {/* Portfolio Wireframe */}
        <div className="border-b border-dashed border-neutral-200">
          <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-200">
            <code className="text-xs text-neutral-500">
              PortfolioWireframe — grid: featured (2x2) + normal (1x1) + wide (2x1)
            </code>
          </div>
          <PortfolioWireframe content={wireframePortfolio} />
        </div>

        {/* Portfolio Section (styled) */}
        <div className="border-b border-dashed border-neutral-200">
          <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-200">
            <code className="text-xs text-neutral-500">
              PortfolioSection — stylowany komponent z dekoracjami, animacjami, next/image
            </code>
          </div>
          <PortfolioSection content={demoPortfolio} />
        </div>

        {/* Services Cards (TOM-ART) */}
        <div className="border-b border-dashed border-neutral-200">
          <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-200">
            <code className="text-xs text-neutral-500">
              ServicesCardsSection — karty uslug 3+2 grid, shadow-md, h2-accent, TOM-ART content
            </code>
          </div>
          <ServicesCardsSection content={tomArtServices} />
        </div>
      </main>
    </div>
  )
}
