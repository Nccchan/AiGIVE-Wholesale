import Section from './Section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function ServiceCards() {
  return (
    <Section title="Services" subtitle="B2B卸・中古買取・SNSコンサル">
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle>Wholesale</CardTitle></CardHeader>
          <CardContent>国内外の小売店・EC事業者向けに、玩具/TCGを安定供給。</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Buyback</CardTitle></CardHeader>
          <CardContent>中古トレカ・ホビーの適正査定と迅速入金。</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Consulting</CardTitle></CardHeader>
          <CardContent>SNS×越境で販売チャネル拡張を支援。</CardContent>
        </Card>
      </div>
    </Section>
  )
}
