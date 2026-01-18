/**
 * Content Types - Interfejsy dla contentu sekcji
 *
 * Te typy definiują CO można przekazać do komponentu (content).
 * Style są stałe w komponencie - tutaj tylko dane.
 */

// ============================================
// HERO
// ============================================

export interface HeroContent {
  // === CONTENT (treść) ===

  /** Badge nad nagłówkiem, np. "KONSTRUKCJE ŻELBETOWE" */
  badge: string

  /** Główny nagłówek - może być string lub tablica linii */
  headline: string | string[]

  /** Która linia ma kolor primary (0-indexed), np. 1 = druga linia */
  headlineAccentLine?: number

  /** Tekst pod nagłówkiem */
  subheadline: string

  /** Główny przycisk CTA */
  ctaPrimary: {
    text: string
    href: string
    /** Typ: 'phone' | 'link' | 'scroll' */
    type?: 'phone' | 'link' | 'scroll'
  }

  /** Drugi przycisk CTA (opcjonalny) */
  ctaSecondary?: {
    text: string
    href?: string
    scrollTo?: string
  }

  /** Wariant buttonów: 'default' | 'shadow' | 'outline', default: 'default' */
  buttonVariant?: 'default' | 'shadow' | 'outline'

  /** Statystyki pod CTA */
  stats?: Array<{
    value: string
    label: string
  }>

  // === BACKGROUND (tło) ===

  /** URL zdjęcia w tle */
  backgroundImage?: string

  /** Przezroczystość overlay na zdjęciu (0-1), default: 0.7 */
  overlayOpacity?: number

  // === PATTERN (wzór siatki) ===

  /** Czy pokazać pattern, default: true */
  showPattern?: boolean

  /** Typ patternu: 'rebar' | 'grid' | 'dots' | 'none', default: 'rebar' */
  patternType?: 'rebar' | 'grid' | 'dots' | 'none'

  /** Przezroczystość patternu (0-1), default: 0.3 */
  patternOpacity?: number

  // === LAYOUT ===

  /** Pozycja contentu: 'left' | 'center', default: 'left' */
  contentPosition?: 'left' | 'center'

  /** Minimalna wysokość: 'screen' | '80vh' | '70vh', default: 'screen' */
  minHeight?: 'screen' | '80vh' | '70vh'

  // === DECORATIONS ===

  /** Czy pokazać dekoracyjne elementy (obracane kwadraty), default: true */
  showDecorations?: boolean

  // === SCROLL INDICATOR ===

  /** Czy pokazać scroll indicator, default: true */
  showScrollIndicator?: boolean

  /** Tekst scroll indicator, default: "SCROLL" */
  scrollIndicatorText?: string
}

// ============================================
// HERO SPLIT (tekst + zdjęcie obok siebie)
// ============================================

export interface HeroSplitContent {
  // === CONTENT ===

  /** Badge z kropką dostępności, np. "Dostępne terminy na maj 2024" */
  badge?: {
    text: string
    dotColor?: string // default: green
  }

  /** Nagłówek - linie tekstu */
  headline: string[]

  /** Fragment nagłówka do podświetlenia (tło primary) */
  headlineHighlight?: string

  /** Tekst pod nagłówkiem */
  subheadline: string

  /** Główny przycisk CTA */
  ctaPrimary: {
    text: string
    href: string
  }

  /** Drugi przycisk CTA */
  ctaSecondary?: {
    text: string
    href: string
  }

  /** Wariant buttonów: 'default' | 'shadow' | 'outline', default: 'shadow' */
  buttonVariant?: 'default' | 'shadow' | 'outline'

  /** Statystyki z ikonami */
  stats?: Array<{
    icon: string
    value: string
    label: string
  }>

  // === IMAGE ===

  /** Zdjęcie po prawej stronie */
  image: {
    src: string
    alt: string
  }

  /** Overlay na zdjęciu (np. telefon) */
  imageOverlay?: {
    label: string
    value: string
  }

  // === BACKGROUND ===

  /** Kolor tła sekcji */
  backgroundColor?: string
}

// ============================================
// SEKCJA - wspólne elementy
// ============================================

export interface SectionHeader {
  /** Label sekcji, np. "/ USŁUGI" */
  sectionLabel?: string

  /** Główny tytuł */
  title: string

  /** Część tytułu z akcentem (opcjonalna) */
  titleAccent?: string

  /** Opis pod tytułem */
  subtitle?: string
}

// ============================================
// WHY US (Dlaczego my)
// ============================================

export interface WhyUsContent extends SectionHeader {
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}

// ============================================
// SERVICES (Usługi)
// ============================================

export interface ServiceItem {
  id: string
  icon: string
  title: string
  shortDesc: string
  fullDesc: string
  image?: string
  features: string[]
}

export interface ServicesContent extends SectionHeader {
  items: ServiceItem[]
}

// ============================================
// FOR WHOM (Dla kogo pracujemy)
// ============================================

export interface ForWhomContent extends SectionHeader {
  items: Array<{
    icon: string
    title: string
    description: string
    image?: string
    tags?: string[]
  }>
}

// ============================================
// PROCESS (Jak pracujemy)
// ============================================

export interface ProcessContent extends SectionHeader {
  steps: Array<{
    number: string
    icon?: string
    title: string
    subtitle?: string
    description: string
  }>
  bottomCta?: {
    text: string
    href: string
  }
}

// ============================================
// PORTFOLIO (Realizacje)
// ============================================

export interface PortfolioContent extends SectionHeader {
  stats?: Array<{
    value: string
    label: string
  }>
  projects: Array<{
    title: string
    category: string
    specs: string
    image: string
    featured?: boolean
  }>
}

// ============================================
// FAQ
// ============================================

export interface FaqContent extends SectionHeader {
  questions: Array<{
    question: string
    answer: string
  }>
}

// ============================================
// CONTACT
// ============================================

export interface ContactContent extends SectionHeader {
  phone: string
  email: string
  address: {
    street: string
    city: string
    zip: string
  }
  nip?: string
  mapCoordinates?: {
    lat: number
    lng: number
  }
}

// ============================================
// FOOTER
// ============================================

export interface FooterContent {
  description: string
  navLinks: Array<{
    label: string
    href: string
  }>
  copyright: string
}

// ============================================
// NAVIGATION
// ============================================

export interface NavigationContent {
  logo: {
    type: 'initials' | 'text' | 'image'
    value: string
    /** Główna nazwa firmy, np. "NIEDZIELA" */
    name?: string
    /** Podtytuł, np. "& KŁUSEK" */
    subtext?: string
  }
  links: Array<{
    label: string
    href: string
  }>
  cta?: {
    type: 'phone' | 'button'
    text: string
    href: string
  }
  /** Email do mobile menu */
  email?: string
}

// ============================================
// FULL SITE CONTENT
// ============================================

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
