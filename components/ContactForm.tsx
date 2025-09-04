'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { dict, getLangFromSearch } from '@/i18n/dictionaries'

const schema = z.object({
  type: z.enum(['wholesale','buyback','general']),
  company: z.string().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  channelUrl: z.string().url().optional().or(z.literal('')),
  categories: z.array(z.string()).optional(),
  monthlyBudget: z.enum(['50-100','100-300','300-500','500+']).optional(),
  market: z.enum(['domestic','overseas','both']).optional(),
  message: z.string().max(1000).optional(),
  agree: z.boolean().refine(v=>v, 'You must agree')
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
  const router = useRouter()
  const sp = useSearchParams()
  const lang = getLangFromSearch(sp as unknown as URLSearchParams)
  const t = dict[lang]
  const presetType = (sp.get('type') as FormValues['type']) || 'general'

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: presetType, agree: false }
  })

  async function onSubmit(values: FormValues) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ ...values, lang })
    })
    if (res.ok) {
      router.push(`/thanks?lang=${lang}`)
    } else {
      alert('Failed to send. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.type}</label>
          <select {...register('type')} className="h-10 w-full rounded-2xl border border-gray-300 px-3">
            <option value="wholesale">{t.contact.wholesale}</option>
            <option value="buyback">{t.contact.buyback}</option>
            <option value="general">{t.contact.general}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.company}</label>
          <Input {...register('company')} placeholder="株式会社〇〇" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.name}</label>
          <Input {...register('name')} placeholder="山田 太郎" required />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message as string}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.email}</label>
          <Input type="email" {...register('email')} placeholder="you@example.com" required/>
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message as string}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.phone}</label>
          <Input {...register('phone')} placeholder="+81-90-xxxx-xxxx" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.channelUrl}</label>
          <Input {...register('channelUrl')} placeholder="https://example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t.contact.categories}</label>
        <div className="flex flex-wrap gap-3 text-sm">
          {['Pokemon','MTG','Weiss','Figure','Model','Other'].map((c)=>(
            <label key={c} className="flex items-center gap-2">
              <input type="checkbox" value={c} {...register('categories')} />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.monthlyBudget}</label>
          <select {...register('monthlyBudget')} className="h-10 w-full rounded-2xl border border-gray-300 px-3">
            <option value="">-</option>
            <option value="50-100">¥50-100万</option>
            <option value="100-300">¥100-300万</option>
            <option value="300-500">¥300-500万</option>
            <option value="500+">¥500万+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t.contact.market}</label>
          <select {...register('market')} className="h-10 w-full rounded-2xl border border-gray-300 px-3">
            <option value="">-</option>
            <option value="domestic">国内</option>
            <option value="overseas">海外</option>
            <option value="both">両方</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t.contact.message}</label>
        <Textarea {...register('message')} maxLength={1000} />
      </div>
      <div className="flex items-center gap-2">
        <input id="agree" type="checkbox" {...register('agree')} />
        <label htmlFor="agree" className="text-sm">{t.contact.agree}</label>
      </div>
      <Button type="submit" disabled={isSubmitting}>{t.contact.submit}</Button>
    </form>
  )
}
