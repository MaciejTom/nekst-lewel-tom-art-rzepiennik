/**
 * Hero Types
 */

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

  /** Minimalna wysokość: 'screen' | '80vh' | '70vh' | '60vh', default: 'screen' */
  minHeight?: 'screen' | '80vh' | '70vh' | '60vh'

  // === DECORATIONS ===

  /** Czy pokazać dekoracyjne elementy (obracane kwadraty), default: true */
  showDecorations?: boolean

  // === SCROLL INDICATOR ===

  /** Czy pokazać scroll indicator, default: true */
  showScrollIndicator?: boolean

  /** Tekst scroll indicator, default: "SCROLL" */
  scrollIndicatorText?: string
}
