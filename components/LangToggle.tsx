'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export default function LangToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()
  const lang = sp.get('lang') === 'en' ? 'en' : 'jp'
  function toggle() {
    const params = new URLSearchParams(sp.toString())
    params.set('lang', lang === 'jp' ? 'en' : 'jp')
    router.push(`${pathname}?${params.toString()}`)
  }
  return <Button onClick={toggle} variant="outline" aria-label="Toggle Language">{lang === 'jp' ? 'EN' : 'JP'}</Button>
}
