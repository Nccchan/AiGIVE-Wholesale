'use client'
import Hero from '@/components/Hero'
import SafetyBadges from '@/components/SafetyBadges'
import ServiceCards from '@/components/ServiceCards'
import PartnershipCards from '@/components/PartnershipCards'
import Section from '@/components/Section'

export default function Page() {
  return (
    <>
      <Hero/>
      <SafetyBadges/>
      <ServiceCards/>
      <PartnershipCards/>
      <Section>
        <div className="text-sm text-gray-600">
          <p>※ 本サイトはB2B向けです。一般のお客様は各ECモールをご利用ください。</p>
        </div>
      </Section>
    </>
  )
}
