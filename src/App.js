import React, { useState, useRef } from 'react'
import Navigation from './Navigation'
import Start from './Start'
import Profile from './Profile'
import Services from './Services'
import Calculate from './Calculate'
import Contacts from './Contacts'
import Footer from './Footer'

function App() {
  const startRef = useRef()
  const aboutRef = useRef()
  const serviceRef = useRef()
  const calculateRef = useRef()
  const contactRef = useRef()
  const [empNum, setEmpNum] = useState('')
  const [service, setService] = useState('')
  return (
    <div className="App">
      <nav>
        <Navigation
          start={startRef}
          about={aboutRef}
          service={serviceRef}
          calculate={calculateRef}
          contact={contactRef}
        />
      </nav>
      <section ref={startRef}>
        <Start empNum={empNum} setEmpNum={setEmpNum} />
      </section>
      <section id="PROFIL" ref={aboutRef}>
        <Profile />
      </section>
      <section id="LEISTUNGEN" ref={serviceRef}>
        <Services />
      </section>
      <section id="KALKULATION" ref={calculateRef}>
        <Calculate
          empNum={empNum}
          setEmpNum={setEmpNum}
          opService={setService}
        />
      </section>
      <section id="KONTAKT" ref={contactRef}>
        <Contacts empNum={empNum} service={service} />
      </section>
      <Footer />
    </div>
  )
}

export default App
