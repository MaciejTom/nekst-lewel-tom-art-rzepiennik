/**
 * FAQ Types
 */

import type { SectionHeader } from './common'

export interface FaqContent extends SectionHeader {
  questions: Array<{
    question: string
    answer: string
  }>
}
