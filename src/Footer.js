import React from 'react'
import { GoMail, GoLocation } from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import { RiXingFill } from 'react-icons/ri'

function Footer() {
  return (
    <footer>
      {/* <h1>Contact Details</h1> */}
      <div>
        <a href="mailto:info@ihre-fasi.de">
          <GoMail className="cicon" />
          info@ihre-fasi.de
        </a>
        <a href="tel:+4915201952748">
          <BsTelephone className="cicon" />
          +4915201952748
        </a>
        <a href="https://www.xing.com/profile/Robert_Schwager3" target="_blank">
          <RiXingFill className="cicon" />
          Robert Schwager
        </a>
        <a
          href="https://www.google.com/maps/place/ihre-fasi.de/@52.6614036,13.5238558,18.75z/data=!4m5!3m4!1s0x0:0xc508c465e2b7ca14!8m2!3d52.6615474!4d13.5242885"
          target="_blank"
        >
          <GoLocation className="cicon" />
          Robert-Koch-Str
        </a>
      </div>
      <p
        style={{
          textAlign: 'right',
          margin: '0 auto 0vw auto',
          color: 'var(--info-color)',
        }}
      >
        © 2021. Ihre-FASI.de{' '}
      </p>
    </footer>
  )
}

export default Footer
