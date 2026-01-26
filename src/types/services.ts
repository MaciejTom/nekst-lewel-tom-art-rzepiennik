/**
 * Services Types (Usługi)
 */

import type { SectionHeader } from './common'

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
