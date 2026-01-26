/**
 * Footer Types
 */

export interface FooterContent {
  companyName: string
  description: string
  navLinks: Array<{
    label: string
    href: string
  }>
  companyInfo?: {
    nip?: string
    location?: string
    privacyPolicy?: string
  }
  copyright: string
  designCredit?: string
}
