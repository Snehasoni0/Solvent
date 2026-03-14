import ContactInfo from '@/components/contact/Info'
import MapSection from '@/components/contact/location'
import ContactSection from '@/components/contact/Main'
import React from 'react'

const page = () => {
  return (
    <>
      <ContactSection />
      <ContactInfo />
      <MapSection />
    </>
  )
}

export default page
