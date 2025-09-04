'use client'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <Section>
        <ContactForm/>
      </Section>
      <Section title="Contact Info">
        <p className="text-sm text-gray-600">Email: sales@example.com / Address: 新潟県長岡市大手通2丁目2番地6（仮）</p>
      </Section>
    </div>
  )
}
