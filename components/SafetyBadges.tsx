'use client'
import { Badge } from './ui/badge'
import Section from './Section'
import { useSearchParams } from 'next/navigation'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

export default function SafetyBadges() {
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  return (
    <Section title="Safety">
      <div className="flex flex-wrap gap-3">
        <Badge aria-label={t.safety.age}>{t.safety.age}</Badge>
        <Badge aria-label={t.safety.inspect}>{t.safety.inspect}</Badge>
        <Badge aria-label={t.safety.recall}>{t.safety.recall}</Badge>
      </div>
    </Section>
  )
}
