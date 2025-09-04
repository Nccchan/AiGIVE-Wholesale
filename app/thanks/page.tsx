'use client'
import { useSearchParams } from 'next/navigation'
import Section from '@/components/Section'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

export default function ThanksPage() {
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">{t.contact.thanksTitle}</h1>
      <Section>
        <p className="text-gray-700">{t.contact.thanksBody}</p>
      </Section>
    </div>
  )
}
