import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { HeroWireframe } from "@/components/wireframe/hero-wireframe"
import { wireframeHero } from "@/content/wireframe/hero"

export default function HeroPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Hero" description="Full-screen hero z badge, headline, CTA, stats, scroll indicator." />

      <main>
        <SectionGroup title="Wireframe">
          <ComponentLabel label="Full-screen, badge + 3-line headline + CTA + stats + scroll" variant="wireframe" />
          <HeroWireframe content={wireframeHero} />
        </SectionGroup>
      </main>
    </div>
  )
}
