import React, { useState, useEffect } from 'react'
import logo from './photoes/logo.png'

const Navigation = ({ start, about, service, calculate, contact }) => {
  const [height, setHeight] = useState(window.innerHeight)

  const [navbar, setNavbar] = useState('start')
  useEffect(() => {
    window.addEventListener('scroll', scrollCont)
    return () => {
      window.removeEventListener('scroll', scrollCont)
    }
  }, [navbar])
  const scrollCont = () => {
    if (contact.current.getBoundingClientRect().y < height * 0.5) {
      setNavbar('contact')
    } else if (height * 0.5 > calculate.current.getBoundingClientRect().y) {
      setNavbar('calculate')
    } else if (height * 0.5 > service.current.getBoundingClientRect().y) {
      setNavbar('service')
    } else if (height * 0.5 > about.current.getBoundingClientRect().y) {
      setNavbar('about')
    } else {
      setNavbar('start')
    }
  }
  return (
    <>
      <div className="logo">
        <img src={logo} alt="ihre-FASI.de" style={{ width: '15rem' }} />
        <p
          style={{
            fontSize: '1rem',
            margin: '-1.5rem 4.3rem',
            color: 'black',
            fontWeight: '1000',
          }}
        >
          Robert Schwager
        </p>
      </div>
      <div className="nav-links">
        <a href="#START" className={navbar == 'start' ? 'active' : ''}>
          START
        </a>
        <a href="#PROFIL" className={navbar == 'about' ? 'active' : ''}>
          PROFIL
        </a>
        <a href="#LEISTUNGEN" className={navbar == 'service' ? 'active' : ''}>
          LEISTUNGEN
        </a>
        <a
          href="#KALKULATION"
          className={navbar == 'calculate' ? 'active' : ''}
        >
          KALKULATION
        </a>
        <a href="#KONTAKT" className={navbar == 'contact' ? 'active' : ''}>
          KONTAKT
        </a>
      </div>
    </>
  )
}

export default Navigation
