/**
 * Hero Split Types (tekst + zdjęcie obok siebie)
 */

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
