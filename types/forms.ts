export type InquiryType = 'wholesale' | 'buyback' | 'general'

export interface InquiryBase {
  type: InquiryType
  company?: string
  name: string
  email: string
  phone?: string
  channelUrl?: string
  categories?: string[]
  monthlyBudget?: '50-100'|'100-300'|'300-500'|'500+'
  market?: 'domestic'|'overseas'|'both'
  message?: string
  agree: boolean
}
