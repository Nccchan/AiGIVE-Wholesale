# AiGIVE Wholesale — Minimal B2B Site (Next.js + TS + Tailwind)

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Minimal shadcn-like UI components (Button, Card, Input, Textarea, Badge, Accordion, Separator)
- React Hook Form + zod
- Simple i18n via URL param `?lang=jp|en` (default jp). Lang toggle provided.
- Email via Resend (API call). No DB; forms send email.

## Routes
- `/` — Home (hero, services, safety, partnerships)
- `/wholesale`
- `/buyback`
- `/consulting`
- `/mission`
- `/company`
- `/contact`
- `/privacy`
- `/policy/safety`
- `/policy/compliance`
- `/thanks`

## Setup
```bash
npm i
cp .env.local.example .env.local
# Fill env vars
npm run dev
```

## Environment
Create `.env.local`:
```
RESEND_API_KEY=
TO_SALES=sales@example.com
FROM_SALES=no-reply@example.com
```

## Notes
- i18n uses URL search param `lang` and a client-side toggle.
- Contact form posts to `/api/contact` and sends both a sales email and an auto-reply (if RESEND_API_KEY set).
- All external links open with `target="_blank"` and `rel="noopener noreferrer"` for safety.
- Styling is clean/minimal with rounded-2xl cards and visible focus rings.

Trigger Vercel deploy
