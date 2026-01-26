import type { NavigationContent } from '@/types'

export const demoNavigation: NavigationContent = {
  logo: {
    type: 'initials',
    value: 'WB',
    name: 'WEBSITE',
    subtext: 'BUILDER',
  },
  links: [
    { label: 'Hero', href: '#hero-1' },
    { label: 'Why Us', href: '#why-us-1' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    type: 'button',
    text: 'Demo Page',
    href: '#',
  },
  email: 'demo@example.com',
}
