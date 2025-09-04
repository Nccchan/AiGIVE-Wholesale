'use client'
import { Button } from './ui/button'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

export default function Hero() {
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  const qp = (path: string) => `${path}?lang=${lang}`

  return (
    <section className="container py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-gray-700 mb-8">{t.hero.subtitle}</p>
          <div className="flex gap-3">
            <Link href={qp('/contact?type=wholesale')}><Button>{t.hero.ctaConsult}</Button></Link>
            <Link href={qp('/wholesale')}><Button variant="outline">{t.hero.ctaCategories}</Button></Link>
          </div>
        </div>
        <div className="card p-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><div className="text-4xl">🧒</div><div className="text-sm mt-2">安心</div></div>
            <div><div className="text-4xl">🔍</div><div className="text-sm mt-2">検品</div></div>
            <div><div className="text-4xl">🚨</div><div className="text-sm mt-2">リコール</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
