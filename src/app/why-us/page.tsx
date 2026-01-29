import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { WhyUsCardsWireframe } from "@/components/wireframe/why-us-cards-wireframe"
import { WhyUsTimelineWireframe } from "@/components/wireframe/why-us-timeline-wireframe"
import { WhyUsSplitWireframe } from "@/components/wireframe/why-us-split-wireframe"
import { WhyUsCardsSection } from "@/components/sections/why-us-cards-section"
import { WhyUsTimelineSection } from "@/components/sections/why-us-timeline-section"
import { WhyUsSplitSection } from "@/components/sections/why-us-split-section"
import { whyUsContent } from "@/content/tom-art/why-us"

export default function WhyUsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Why Us / Dlaczego warto" description="Sekcja USP z ikonami. 3 warianty layoutu." />

      <main>
        {/* ── V1: CARDS ─────────────────────────────────── */}
        <SectionGroup title="V1 — Cards (4-col grid)">
          <ComponentLabel label="Wireframe — 4 karty w gridzie, ikona na górze" variant="wireframe" />
          <WhyUsCardsWireframe content={whyUsContent} />
          <ComponentLabel label="Styled — WhyUsCardsSection z 3D ikoną" variant="styled" />
          <WhyUsCardsSection content={whyUsContent} />
        </SectionGroup>

        {/* ── V2: TIMELINE ──────────────────────────────── */}
        <SectionGroup title="V2 — Timeline (horizontal)">
          <ComponentLabel label="Wireframe — ikony w rzędzie z linią łączącą" variant="wireframe" />
          <WhyUsTimelineWireframe content={whyUsContent} />
          <ComponentLabel label="Styled — WhyUsTimelineSection z 3D ikoną" variant="styled" />
          <WhyUsTimelineSection content={whyUsContent} />
        </SectionGroup>

        {/* ── V3: SPLIT ─────────────────────────────────── */}
        <SectionGroup title="V3 — Split (image + list)">
          <ComponentLabel label="Wireframe — duży obraz po lewej, lista po prawej" variant="wireframe" />
          <WhyUsSplitWireframe content={whyUsContent} />
          <ComponentLabel label="Styled — WhyUsSplitSection z 3D ikoną" variant="styled" />
          <WhyUsSplitSection content={whyUsContent} />
        </SectionGroup>
      </main>
    </div>
  )
}
