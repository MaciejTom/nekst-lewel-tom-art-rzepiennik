/**
 * Why Us Types (Dlaczego my)
 */

import type { SectionHeader } from './common'

export interface WhyUsContent extends SectionHeader {
  items: Array<{
    /** Nazwa ikony (lucide) lub ścieżka do obrazka */
    icon?: string
    /** Ścieżka do obrazka (alternatywa dla icon) */
    image?: string
    title: string
    description: string
  }>

  /**
   * Wariant layoutu:
   * - 'auto' - automatycznie dobiera layout na podstawie liczby elementów
   * - 'grid-3' - 3 kolumny
   * - 'grid-4' - 4 kolumny
   * - 'grid-6' - 6 kolumn (lub 3x2)
   * - 'cards' - 2 kolumny (karty)
   * default: 'auto'
   */
  layoutVariant?: 'auto' | 'grid-3' | 'grid-4' | 'grid-6' | 'cards'

  /** Czy pokazać background grid pattern, default: true */
  showPattern?: boolean
}
