'use client'
import Section from '@/components/Section'

export default function CompliancePage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Compliance</h1>
      <Section title="古物営業法">本人確認 / 台帳の整備</Section>
      <Section title="景品表示法・知的財産">適正表示 / 権利配慮</Section>
      <Section title="越境販売">各国規制・輸出入の留意点</Section>
    </div>
  )
}
