/**
 * Site Content Types - Pełna struktura strony
 */

import type { NavigationContent } from './navigation'
import type { HeroContent } from './hero'
import type { WhyUsContent } from './why-us'
import type { ServicesContent } from './services'
import type { ForWhomContent } from './for-whom'
import type { ProcessContent } from './process'
import type { PortfolioContent } from './portfolio'
import type { FaqContent } from './faq'
import type { ContactContent } from './contact'
import type { FooterContent } from './footer'

export interface SiteContent {
  meta: {
    name: string
    tagline: string
    phone: string
    email: string
  }
  navigation: NavigationContent
  hero: HeroContent
  whyUs: WhyUsContent
  services: ServicesContent
  forWhom: ForWhomContent
  process: ProcessContent
  portfolio: PortfolioContent
  faq: FaqContent
  contact: ContactContent
  footer: FooterContent
}
