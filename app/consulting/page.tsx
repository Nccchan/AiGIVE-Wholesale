'use client'
import Section from '@/components/Section'

export default function ConsultingPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Consulting</h1>
      <Section title="Value">SNS×越境で売上最大化</Section>
      <Section title="Plans">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5"><h3 className="font-semibold mb-2">Light</h3><p>プレースホルダー</p></div>
          <div className="card p-5"><h3 className="font-semibold mb-2">Standard</h3><p>プレースホルダー</p></div>
          <div className="card p-5"><h3 className="font-semibold mb-2">Pro</h3><p>プレースホルダー</p></div>
        </div>
      </Section>
      <Section title="Mini-Cases">プレースホルダー</Section>
    </div>
  )
}
