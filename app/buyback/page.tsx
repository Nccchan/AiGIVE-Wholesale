'use client'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'

export default function BuybackPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Buyback</h1>
      <Section title="Scope">中古トレカ/ホビーを対象</Section>
      <Section title="Grading">状態/真贋/付属/相場連動（簡潔）</Section>
      <Section title="Compliance">古物商番号 / 本人確認</Section>
      <Section title="Request Form">
        <ContactForm/>
      </Section>
    </div>
  )
}
