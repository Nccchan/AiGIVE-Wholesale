'use client'
import Link from 'next/link'
import LangToggle from './LangToggle'
import { useSearchParams } from 'next/navigation'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

export default function Header() {
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  const qp = (path: string) => `${path}?lang=${lang}`

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link href={qp('/')} className="font-semibold text-lg no-underline">AiGIVE Wholesale</Link>
        <nav className="hidden md:flex gap-6">
          <Link href={qp('/wholesale')} className="hover:underline">{t.nav.wholesale}</Link>
          <Link href={qp('/buyback')} className="hover:underline">{t.nav.buyback}</Link>
          <Link href={qp('/consulting')} className="hover:underline">{t.nav.consulting}</Link>
          <Link href={qp('/mission')} className="hover:underline">{t.nav.mission}</Link>
          <Link href={qp('/company')} className="hover:underline">{t.nav.company}</Link>
          <Link href={qp('/contact')} className="hover:underline">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle/>
        </div>
      </div>
    </header>
  )
}
