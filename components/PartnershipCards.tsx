import Section from './Section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function PartnershipCards() {
  return (
    <Section title="Partnership Models" subtitle="協業スキームの例">
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle>共同仕入</CardTitle></CardHeader>
          <CardContent>ボリューム確保で条件最適化。</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>棚貸し・看板利用</CardTitle></CardHeader>
          <CardContent>ポップアップや棚貸しで実店舗展開。</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>業務委託</CardTitle></CardHeader>
          <CardContent>海外発送や顧客対応の一部を委託。</CardContent>
        </Card>
      </div>
    </Section>
  )
}
