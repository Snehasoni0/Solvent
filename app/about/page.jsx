import AboutHero from '@/components/about/AboutHero'
import Partners from '@/components/about/Brands'
import Certifications from '@/components/about/Certification'
import FAQPreview from '@/components/about/Faqs'
import MissionVision from '@/components/about/MissionVision'
import QualityStandards from '@/components/about/QualityStandards'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutHero />
      <MissionVision /> 
      <QualityStandards />
      <Partners />
      <Certifications />
      <FAQPreview />
    </>
  )
}

export default page
