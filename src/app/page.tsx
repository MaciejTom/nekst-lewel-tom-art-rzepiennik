import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { HeroSplit } from "@/components/sections/hero-split"
import { WhyUsAlternative } from "@/components/sections/why-us-alternative"
import { ForWhomSection } from "@/components/sections/for-whom-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/Footer"

// Content
import { navigationContent, heroContent, heroContent2, heroContent3, heroSplitContent } from "@/content/niedziela-klusek"

export default function HomePage() {
  return (
    <>
      <Navigation content={navigationContent} />
      <main>
        {/* Hero 1 - Konstrukcje żelbetowe (accent na linii 1) */}
        <HeroSection content={heroContent} />

        {/* Hero 2 - Usługi remontowe (accent na linii 0) */}
        <HeroSection content={heroContent2} />

        {/* Hero 3 - Fotowoltaika (minimalna - bez stats) */}
        <HeroSection content={heroContent3} />

        {/* Hero 4 - Split (Fixman - tekst + zdjęcie) */}
        <HeroSplit content={heroSplitContent} />

        <WhyUsAlternative />
        <ServicesSection />
        <ForWhomSection />
        <ProcessSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}