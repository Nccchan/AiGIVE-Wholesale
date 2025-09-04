'use client'
import Section from '@/components/Section'
import { Accordion, AccordionItem } from '@/components/ui/accordion'

export default function WholesalePage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Wholesale</h1>
      <Section title="Terms" subtitle="プレースホルダー（置き換え可）">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>法人限定 / 前入金可 / 最低発注目安 / 送料条件</li>
          <li>予約配分(実績連動) / 越境ポリシー</li>
        </ul>
      </Section>
      <Section title="Categories">
        <ul className="list-disc pl-6 space-y-1">
          <li>TCG（ポケカ / MTG / ヴァイス）</li>
          <li>Toys（キャラ / フィギュア / 模型）</li>
        </ul>
      </Section>
      <Section title="Process">
        <ol className="list-decimal pl-6 space-y-1">
          <li>問い合わせ</li>
          <li>審査/必要書類</li>
          <li>初回発注</li>
          <li>定期運用</li>
        </ol>
      </Section>
      <Section title="FAQ">
        <Accordion>
          <AccordionItem title="EC出品は可能ですか？">条件付きで可能です（個別契約）。</AccordionItem>
          <AccordionItem title="配分基準は？">実績と販売計画に連動します。</AccordionItem>
          <AccordionItem title="与信は？">初回は前入金、以降は相談。</AccordionItem>
          <AccordionItem title="納期は？">在庫品は2〜3営業日出荷、予約品は発売日以降。</AccordionItem>
        </Accordion>
      </Section>
    </div>
  )
}
