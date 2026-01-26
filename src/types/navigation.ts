/**
 * Navigation Types
 */

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
