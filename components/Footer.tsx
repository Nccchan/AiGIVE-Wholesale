'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

export default function Footer() {
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  const qp = (path: string) => `${path}?lang=${lang}`
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container py-8 grid gap-4 md:grid-cols-2">
        <p className="text-sm text-gray-600">{t.footer.summary}</p>
        <div className="flex gap-4 text-sm justify-start md:justify-end">
          <Link href={qp('/privacy')} className="hover:underline">{t.footer.privacy}</Link>
          <Link href={qp('/policy/safety')} className="hover:underline">{t.footer.safety}</Link>
          <Link href={qp('/policy/compliance')} className="hover:underline">{t.footer.compliance}</Link>
          <a href="mailto:sales@example.com" className="hover:underline">sales@example.com</a>
        </div>
      </div>
      <div className="container pb-8 text-xs text-gray-500">© {new Date().getFullYear()} AiGIVE Inc.</div>
    </footer>
  )
}
