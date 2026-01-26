/**
 * Common Types - Wspólne interfejsy
 */

// ============================================
// SEKCJA - wspólne elementy
// ============================================

export interface SectionHeader {
  /** Tagline sekcji, np. "/ USŁUGI" */
  tagline?: string

  /** Główny tytuł */
  title: string

  /** Część tytułu z akcentem (opcjonalna) */
  titleAccent?: string

  /** Opis pod tytułem */
  subtitle?: string
}
