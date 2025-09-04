'use client'
import Section from '@/components/Section'

export default function MissionPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Mission</h1>
      <Section title="宣言">子どもたちへ「安心・安全・真心」を届ける宣言</Section>
      <Section title="Safety & Sustainability">
        <ul className="list-disc pl-6 space-y-1">
          <li>年齢表示の徹底</li>
          <li>素材情報の開示</li>
          <li>サプライチェーン倫理</li>
        </ul>
      </Section>
    </div>
  )
}
