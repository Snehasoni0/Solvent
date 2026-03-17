import BecomePartner from '@/components/partners/BecomePartner'
import PartnerBenefits from '@/components/partners/Benefits'
import PartnersHero from '@/components/partners/ParnterHero'
import PartnerDescription from '@/components/partners/PartnersDes'
import React from 'react'

const page = () => {
  return (
    <>
      <PartnersHero />
      <PartnerDescription />
      <PartnerBenefits />
      <BecomePartner />
    </>
  )
}

export default page
