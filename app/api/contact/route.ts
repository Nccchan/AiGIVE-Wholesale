import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      type, company, name, email, phone, channelUrl, categories, monthlyBudget, market, message, agree, lang
    } = body || {}
    if (!type || !name || !email || !agree) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const toSales = process.env.TO_SALES || 'sales@example.com'
    const fromSales = process.env.FROM_SALES || 'no-reply@example.com'
    const apiKey = process.env.RESEND_API_KEY

    const subjectSales = `[Inquiry:${type}] ${name} <${email}>`
    const textSales = `New inquiry:\n\nType: ${type}\nCompany: ${company||'-'}\nName: ${name}\nEmail: ${email}\nPhone: ${phone||'-'}\nURL: ${channelUrl||'-'}\nCategories: ${(categories||[]).join(', ')||'-'}\nBudget: ${monthlyBudget||'-'}\nMarket: ${market||'-'}\nMessage:\n${message||'-'}`

    const subjectUser = lang === 'en' ? 'Thanks for contacting AiGIVE' : 'お問い合わせありがとうございます（AiGIVE）'
    const textUser = lang === 'en'
      ? 'We have received your message. Our team will reply within 2 business days.'
      : 'お問い合わせありがとうございます。2営業日以内に担当よりご連絡いたします。'

    async function sendViaResend(to: string, subject: string, text: string) {
      if (!apiKey) return
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from: fromSales, to, subject, text })
      })
    }

    await Promise.all([
      sendViaResend(toSales, subjectSales, textSales),
      sendViaResend(email, subjectUser, textUser)
    ])

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
