import React, { useState, useEffect, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Alert = ({ visib, text, cname }) => {
  return <p className={`${cname} alert ${visib ? '' : 'hidden'}`}>{text}</p>
}

function Contact({ referal, empNum, service }) {
  const [rend, setRend] = useState(0)
  const form = useRef(null)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [change, setChange] = useState(true)
  const [topText, setTopText] = useState('')
  const [text, setText] = useState('Hallo Herr Schwager,\n\nfür eine Betreuung')
  const [generatedText, setGeneratedText] = useState({
    name: '',
    mail: '',
    mob: '',
  })

  const [nameLabel, setNameLabel] = useState(true)
  const [mailLabel, setMailLabel] = useState(true)
  const [serviceText, setserviceText] = useState('')
  const [mobileLabel, setMobileLabel] = useState(true)
  const [contactForm, setContactForm] = useState(false)
  const [requireName, setRequireName] = useState(false)
  const [requireMail, setReqireMail] = useState(false)
  const [requireText, setRequireText] = useState(false)
  const [reqNumber, setReqNumber] = useState(false)

  useEffect(() => {
    let fill = ''
    if (empNum && empNum > 0 && service) {
      fill += `Hallo Herr Schwager,\n\nfür eine Betreuung von ${empNum} Mitarbeitern in der Branche ${service}, bitte ich Sie umRücksprache.`
    } else {
      fill += `Hallo Herr Schwager,\n\nfür eine Betreuung bitte ich Sie um Rücksprache.`
    }

    if (
      form.current.time.value &&
      form.current.date.value &&
      form.current.number.value
    ) {
      fill += `Bitte rufen Sie mich am ${form.current.date.value} zwischen ${
        form.current.time.value.split('-')[0]
      } und ${form.current.time.value.split('-')[1]} an.`
    }
    if (change) {
      setText(fill)
    }
  })

  const submitHandle = (e) => {
    e.preventDefault()
    if (!name) {
      setRequireName(true)
    }
    if (!form.current.date.value && !mail && !form.current.number.value) {
      setReqireMail(true)
    }
    if (!text) {
      setRequireText(true)
    }
    if (form.current.date.value && !form.current.number.value) {
      setReqNumber(true)
      return
    }
    if ((form.current.number.value || mail) && name && text) {
      emailjs
        .sendForm(
          'service_vrlc55m',
          'template_sc3z9kf',
          e.target,
          'user_ZdI1L1z76pZCiNvRMxZnX',
        )
        .then(
          (result) => {
            alert('Ihre Nachricht wurde gesendet')
            form.current.reset()
            setText('')
            setMail('')
            setName('')
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }
  return (
    <div className="contact-form">
      <h1>KONTAKT</h1>
      <a
        href="#telephon"
        className="telephon"
        onClick={() => setContactForm(true)}
      >
        <BsFillTelephoneFill style={{ fontSize: '3rem' }} />
        <span
          style={{
            display: 'inline-block',
            position: 'relative',
            top: '-1.5vw',
            left: '-1.3vw',
            fontWeight: '1000',
            fontSize: '1.3rem',
          }}
        >
          Rückruf
        </span>
      </a>
      <form onSubmit={(e) => submitHandle(e)} ref={form}>
        <div className="email-form">
          <div className="visitor-info">
            <h2 className={nameLabel && 'label'}>Name</h2>
            <input
              type="text"
              value={name}
              name="user_name"
              style={requireName ? { border: '2px solid #0f76bb' } : {}}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameLabel(false)}
              onBlur={() => {
                if (!name) {
                  setNameLabel(true)
                  setRequireName(true)
                } else {
                  setRequireName(false)
                }
              }}
            />
            <Alert visib={requireName} text="Bitte Namen eingeben" />
            <h2 className={mailLabel && 'label'}>E-Mail-Ad­res­se</h2>
            <input
              type="mail"
              name="user_email"
              value={mail}
              style={requireMail ? { border: '2px solid #0f76bb' } : {}}
              onChange={(e) => setMail(e.target.value)}
              onFocus={() => setMailLabel(false)}
              onBlur={() => {
                if (!mail) {
                  setMailLabel(true)
                  setReqireMail(true)
                } else {
                  setReqireMail(false)
                }
              }}
            />
            <Alert visib={requireMail} text="Bitte Namen eingeben" />
          </div>
          <div className="visitor-text">
            <h2>Nachricht</h2>
            <textarea
              name="text"
              style={requireText ? { border: '2px solid #0f76bb' } : {}}
              onFocus={() => setChange(false)}
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
            <Alert visib={requireText} text="Bitte Text eingeben" />
          </div>
        </div>

        <h2
          style={{ textAlign: 'center' }}
          onClick={() => setContactForm(!contactForm)}
        >
          Rückrufservice{' '}
          <IoIosArrowDown
            style={{
              fontSize: '2rem',
              transform: `translate(0, 0.5vw) rotate(${
                contactForm ? '180deg' : '0deg'
              })`,
              transition: 'all 1s',
            }}
          />
        </h2>
        <div className={`contact-details ${contactForm ? 'show-form' : ''}`}>
          <h2 className={mobileLabel ? 'label' : ''}>Telefonnummer</h2>
          <input
            id="telephon"
            name="tel"
            style={reqNumber ? { border: '2px solid #0f76bb' } : {}}
            className="contact-info"
            type="number"
            onFocus={() => setMobileLabel(false)}
            onBlur={() =>
              !form.current.number.value ? setMobileLabel(true) : ''
            }
            onChange={() => setRend(rend + 1)}
            // value={mobNumber}
            // onChange={(e) => setMobileLabel(e.target.value)}
          />
          <Alert
            visib={reqNumber}
            text="Bitte Telefonnummer eingeben"
            cname="talert"
          />
          <h2>Wählen Sie einen Tag</h2>
          <input
            className="contact-info"
            type="date"
            name="date"
            onChange={() => setRend(rend + 1)}
          />
          <h2 style={{ marginTop: '1vw' }}>Wählen Sie eine Zeit</h2>
          <select
            name="time"
            onChange={() => setRend(rend + 1)}
            style={{ border: 'none', borderBottom: '2px solid #2d2d2d' }}
          >
            <option value="16:00-16:30">16:00-16:30</option>
            <option value="16:30-17:00">16:30-17:00</option>
            <option value="17:00-17:30">17:00-17:30</option>
            <option value="17:30-18:00">17:30-18:00</option>
            <option value="18:00-18:30">18:00-18:30</option>
            <option value="18:30-19:00">18:30-19:00</option>
            <option value="19:00-19:30">19:00-19:30</option>
            <option value="19:30-20:00">19:00-20:00</option>
          </select>
        </div>
        <input
          id="send"
          type="submit"
          value="Senden"
          style={{ border: '2px solid #2d2d2d' }}
        />
      </form>
    </div>
  )
}

export default Contact
