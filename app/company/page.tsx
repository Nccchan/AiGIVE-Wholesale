'use client'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">会社情報</h1>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <dl className="space-y-2">
            <div><dt className="text-sm text-gray-500">法人名</dt><dd className="font-medium">株式会社AiGIVE（アイギブ）</dd></div>
            <div><dt className="text-sm text-gray-500">法人番号</dt><dd className="font-medium">5110001038461</dd></div>
            <div><dt className="text-sm text-gray-500">代表者</dt><dd className="font-medium">代表取締役 内藤</dd></div>
            <div><dt className="text-sm text-gray-500">本店所在地</dt><dd className="font-medium">新潟県長岡市大手通2丁目2番地6</dd></div>
            <div><dt className="text-sm text-gray-500">設立</dt><dd className="font-medium">2024年6月11日</dd></div>
            <div><dt className="text-sm text-gray-500">資本金</dt><dd className="font-medium">400万円</dd></div>
            <div><dt className="text-sm text-gray-500">従業員数</dt><dd className="font-medium">3名（小規模法人）</dd></div>
          </dl>
          <dl className="space-y-2">
            <div><dt className="text-sm text-gray-500">事業</dt><dd className="font-medium">BtoB（卸売/中古買取/SNSコンサル）, BtoC（ECモール販売/イベント販売）, 越境EC/輸出入サポート</dd></div>
            <div><dt className="text-sm text-gray-500">適格請求書発行事業者番号</dt><dd className="font-medium">T-0000000000000（placeholder）</dd></div>
            <div><dt className="text-sm text-gray-500">古物商許可番号</dt><dd className="font-medium">第000000000000号（placeholder）</dd></div>
            <div><dt className="text-sm text-gray-500">反社会的勢力排除</dt><dd className="font-medium">当社は反社会的勢力との一切の関係を遮断します。</dd></div>
          </dl>
        </div>
      </Section>
      <Section title="B2C Links">
        <div className="flex flex-wrap gap-3">
          <Link href="https://www.amazon.co.jp/shops/REPLACE_AMAZON_ID" target="_blank" rel="noopener noreferrer" aria-label="Amazon ショップページ">
            <Button variant="outline">Amazon ショップページ</Button>
          </Link>
          <Link href="https://www.rakuten.co.jp/REPLACE_RAKUTEN_ID" target="_blank" rel="noopener noreferrer" aria-label="楽天市場 店舗ページ">
            <Button variant="outline">楽天市場 店舗ページ</Button>
          </Link>
          <Link href="https://store.shopping.yahoo.co.jp/REPLACE_YAHOO_ID" target="_blank" rel="noopener noreferrer" aria-label="Yahoo!ショッピング 店舗ページ">
            <Button variant="outline">Yahoo!ショッピング 店舗ページ</Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
