/**
 * For Whom Types (Dla kogo pracujemy)
 */

import type { SectionHeader } from './common'

export interface ForWhomContent extends SectionHeader {
  /** Label dostępności (np. "DOSTĘPNOŚĆ EKIP:") */
  availabilityLabel?: string
  /** Wartość dostępności (np. "NATYCHMIASTOWA") */
  availabilityValue?: string

  items: Array<{
    icon: string
    title: string
    description: string
    image?: string
    tags?: string[]
  }>
}
