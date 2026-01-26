/**
 * Process Types (Jak pracujemy)
 */

import type { SectionHeader } from './common'

export interface ProcessContent extends SectionHeader {
  steps: Array<{
    number: string
    icon?: string
    title: string
    subtitle?: string
    description: string
  }>
  bottomCta?: {
    label?: string
    text: string
    href: string
  }
}
