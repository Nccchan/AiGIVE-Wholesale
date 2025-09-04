'use client'
import Section from '@/components/Section'

export default function SafetyPolicyPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Safety & Recall</h1>
      <Section title="Age Labeling">年齢表示、誤飲注意（チョーキングハザード）、素材表示</Section>
      <Section title="Inspection">外観/破損/欠品/衛生などの検品基準</Section>
      <Section title="Recall Flow">通知 → 回収 → 代替 → 報告</Section>
    </div>
  )
}
