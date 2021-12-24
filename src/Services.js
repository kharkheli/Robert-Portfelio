import React, { useState, useEffect } from 'react'
import { serviceData } from './serviceData'
import SingleService from './SingleService'

function Services() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY))
  }, [])
  return (
    <>
      <h1>LEISTUNGEN</h1>
      {serviceData.map((service) => {
        return <SingleService key={service.id} {...service} />
      })}
    </>
  )
}

export default Services
