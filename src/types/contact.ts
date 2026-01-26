/**
 * Contact Types
 */

import type { SectionHeader } from './common'

export interface ContactContent extends SectionHeader {
  phone: string
  phoneLabel?: string
  email: string
  emailLabel?: string
  address: {
    street: string
    city: string
    zip: string
  }
  nip?: string
  companyName?: string
  mapEmbedUrl?: string
}
