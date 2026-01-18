/**
 * Config Reader - czyta konfigurację strony z JSON
 *
 * Użycie:
 * import { getSiteConfig, getHeroConfig } from '@/lib/config'
 *
 * const site = getSiteConfig()
 * const hero = getHeroConfig()
 */

// Import configu - w przyszłości można to zrobić dynamicznie
import siteConfigData from '../../_builder/_config/sites/niedziela-klusek-v2.json'

// ============ TYPES ============

export interface SiteMeta {
  name: string
  tagline: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    zip: string
  }
  nip: string
}

export interface NavLink {
  label: string
  href: string
}

export interface NavigationConfig {
  variant: 'fixed-transparent' | 'fixed-solid' | 'static'
  logo: {
    type: 'initials' | 'text' | 'image'
    value: string
    secondaryText?: string
  }
  links: NavLink[]
  cta: {
    type: 'phone' | 'button' | 'none'
    text: string
    href: string
  }
}

export interface HeroConfig {
  variant: 'fullscreen-left' | 'fullscreen-center' | 'split-left' | 'split-right'
  badge?: string
  headline: string[]
  headlineAccent: number
  subtitle?: string
  ctaPrimary: {
    text: string
    href: string
    type: 'phone' | 'email' | 'link'
  }
  ctaSecondary?: {
    text: string
    scrollTo: string
  }
  stats?: Array<{
    value: string
    label: string
  }>
  backgroundImage?: string
  showBadge: boolean
  showStats: boolean
  showRebarPattern: boolean
  showDecorations: boolean
  showScrollIndicator: boolean
}

export interface WhyUsItem {
  icon: string
  title: string
  description: string
}

export interface WhyUsConfig {
  variant: '4-column-icons' | '3-column-cards' | '2-column-split'
  sectionLabel?: string | null
  title: string
  titleAccent?: string
  subtitle?: string
  items: WhyUsItem[]
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  shortDesc: string
  fullDesc: string
  image: string
  features: string[]
}

export interface ServicesConfig {
  variant: 'tabs-with-image' | 'cards-grid' | 'accordion'
  sectionLabel?: string
  title: string
  titleAccent?: string
  subtitle?: string
  items: ServiceItem[]
}

export interface ForWhomItem {
  icon: string
  title: string
  description: string
  image: string
  tags: string[]
}

export interface ForWhomConfig {
  variant: '2x2-grid' | '4-column' | 'carousel'
  sectionLabel?: string
  title: string
  titleAccent?: string
  sideInfo?: {
    label: string
    value: string
  }
  items: ForWhomItem[]
}

export interface ProcessStep {
  number: string
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface ProcessConfig {
  variant: '4-column-timeline' | 'vertical-steps' | 'numbered-list'
  sectionLabel?: string
  title: string
  titleAccent?: string
  steps: ProcessStep[]
  bottomCta?: {
    text: string
    href: string
  }
}

export interface PortfolioProject {
  title: string
  category: string
  specs: string
  image: string
  featured: boolean
}

export interface PortfolioConfig {
  variant: 'mosaic' | 'grid-3col' | 'carousel'
  sectionLabel?: string
  title: string
  titleAccent?: string
  stats?: Array<{
    value: string
    label: string
  }>
  projects: PortfolioProject[]
  showGalleryButton: boolean
  galleryButtonText?: string
}

export interface FaqQuestion {
  question: string
  answer: string
}

export interface FaqConfig {
  variant: 'accordion-centered' | 'accordion-split' | 'grid'
  title: string
  titleAccent?: string
  questions: FaqQuestion[]
}

export interface ContactConfig {
  variant: 'split-with-map' | 'form-only' | 'cards'
  title: string
  titleAccent?: string
  subtitle?: string
  showPhone: boolean
  phoneLabel?: string
  showEmail: boolean
  emailLabel?: string
  showAddress: boolean
  showNip: boolean
  showMap: boolean
  mapEmbedUrl?: string
}

export interface FooterConfig {
  variant: '4-column' | 'simple' | 'mega'
  description?: string
  navLinks?: NavLink[]
  showBigTypography: boolean
  copyright?: string
}

export interface SiteConfig {
  meta: SiteMeta
  theme: {
    style: string
    primaryColor: string
  }
  sections: Array<{
    id: string
    enabled: boolean
  }>
  navigation: NavigationConfig
  hero: HeroConfig
  whyUs: WhyUsConfig
  services: ServicesConfig
  forWhom: ForWhomConfig
  process: ProcessConfig
  portfolio: PortfolioConfig
  faq: FaqConfig
  contact: ContactConfig
  footer: FooterConfig
}

// ============ CONFIG GETTERS ============

const siteConfig = siteConfigData as SiteConfig

/**
 * Pobierz pełną konfigurację strony
 */
export function getSiteConfig(): SiteConfig {
  return siteConfig
}

/**
 * Pobierz meta dane strony (nazwa, telefon, email, adres)
 */
export function getSiteMeta(): SiteMeta {
  return siteConfig.meta
}

/**
 * Pobierz config nawigacji
 */
export function getNavigationConfig(): NavigationConfig {
  return siteConfig.navigation
}

/**
 * Pobierz config sekcji Hero
 */
export function getHeroConfig(): HeroConfig {
  return siteConfig.hero
}

/**
 * Pobierz config sekcji Why Us
 */
export function getWhyUsConfig(): WhyUsConfig {
  return siteConfig.whyUs
}

/**
 * Pobierz config sekcji Services
 */
export function getServicesConfig(): ServicesConfig {
  return siteConfig.services
}

/**
 * Pobierz config sekcji For Whom
 */
export function getForWhomConfig(): ForWhomConfig {
  return siteConfig.forWhom
}

/**
 * Pobierz config sekcji Process
 */
export function getProcessConfig(): ProcessConfig {
  return siteConfig.process
}

/**
 * Pobierz config sekcji Portfolio
 */
export function getPortfolioConfig(): PortfolioConfig {
  return siteConfig.portfolio
}

/**
 * Pobierz config sekcji FAQ
 */
export function getFaqConfig(): FaqConfig {
  return siteConfig.faq
}

/**
 * Pobierz config sekcji Contact
 */
export function getContactConfig(): ContactConfig {
  return siteConfig.contact
}

/**
 * Pobierz config Footer
 */
export function getFooterConfig(): FooterConfig {
  return siteConfig.footer
}

/**
 * Sprawdź czy sekcja jest włączona
 */
export function isSectionEnabled(sectionId: string): boolean {
  const section = siteConfig.sections.find(s => s.id === sectionId)
  return section?.enabled ?? false
}

/**
 * Pobierz listę włączonych sekcji w kolejności
 */
export function getEnabledSections(): string[] {
  return siteConfig.sections
    .filter(s => s.enabled)
    .map(s => s.id)
}
