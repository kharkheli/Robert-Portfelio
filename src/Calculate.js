import React, { useState, useRef, useEffect } from 'react'
import upArrow from './photoes/upArrow.png'
import clear from './photoes/close.png'
import { serviceList } from './serviceList'

function Calculate({ empNum, setEmpNum, opService }) {
  const [services, setServices] = useState(serviceList)
  const [numFocus, setNumFocus] = useState(false)
  const [servFocus, setServFocus] = useState(false)
  const [number, setNumber] = useState('')
  const [service, setService] = useState('')
  const [servValue, setServValue] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  useEffect(() => {
    setNumber(empNum)
  }, [empNum])
  useEffect(() => {
    const newServices = serviceList.filter((ser) => {
      return ser.toLowerCase().includes(service.toLowerCase())
    })
    setServices(newServices)
  }, [service])
  //   userefs
  const formRef = useRef(null)
  const numberRef = useRef(null)
  const servRef = useRef(null)
  useEffect(() => {
    if (servValue && number && number > 0) {
      setMinPrice(parseInt(Math.max(servValue * 0.2, 0.2) * number * 66))
      setMaxPrice(
        parseInt((servValue - Math.max(servValue * 0.2, 0.2)) * 66 * number),
      )
    } else {
      setMaxPrice(0)
      setMinPrice(0)
    }
  }, [servValue, number])
  //   const handeSubmit = (e) => {
  //     console.log('wtf')
  //     e.preventDefault()
  //     setMinPrice(parseInt(Math.max(servValue * 0.2, 0.2) * number * 66))
  //     setMaxPrice(
  //       parseInt((servValue - Math.max(servValue * 0.2, 0.2)) * 66 * number),
  //     )
  //   }
  return (
    <>
      <h1>KALKULATION</h1>
      <p style={{ textShadow: '0px 0px 10px black' }}>
        Berechnen Sie hier Ihre geschätzten sicherheitstechnischen
        Grundbetreuungskosten. Diese variieren in Abhängigkeit der Aufteilung
        der Betreuung zwischen Betriebsarzt und Fachkraft für Arbeitssicherheit.
      </p>
      <form onSubmit={(e) => e.preventDefault()} ref={formRef}>
        <div>
          <div style={{ flex: '25%' }}>
            <h3
              className={!numFocus && !number ? 'label' : ''}
              style={{ marginLeft: '13.5%' }}
              onClick={() => numberRef.current.focus()}
            >
              Anzahl Mitarbeiter
            </h3>
            <input
              ref={numberRef}
              type="number"
              style={{ textAlign: 'center', marginLeft: '10.5%' }}
              onFocus={() => setNumFocus(true)}
              onBlur={() => (!number ? setNumFocus(false) : '')}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value)
                setEmpNum(e.target.value)
              }}
            />
          </div>
          <div style={{ flex: '75%', position: 'relative' }}>
            <h3
              className={!servFocus && !service ? 'label' : ''}
              style={{ marginLeft: '1.5%' }}
              onClick={() => {
                servRef.current.focus()
              }}
            >
              Service Type
            </h3>
            <input
              ref={servRef}
              type="text"
              name=""
              id=""
              style={{
                marginLeft: '0%',
                width: '67%',
                paddingRight: '5rem',
                transform: 'translate(0, -0.2vw)',
              }}
              onFocus={() => setServFocus(true)}
              onBlur={() => setServFocus(false)}
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <img
              src={upArrow}
              className="option-arrow"
              alt="arrow"
              style={{
                width: '2rem',
                position: 'relative',
                left: '-2.3rem',
                top: '0.4rem',
                zIndex: '6',
                transition: 'all 1s',
                transform: `rotate(${servFocus ? '180deg' : '0deg'})`,
              }}
              onClick={() => {
                !servFocus ? servRef.current.blur() : servRef.current.focus()
                setServFocus(!servFocus)
              }}
            />
            {service ? (
              <img
                src={clear}
                className="clear"
                alt="clear"
                style={{
                  width: '1.5rem',
                  position: 'relative',
                  top: '0.1rem',
                  right: '6.5rem',
                }}
                onClick={() => {
                  setService('')
                  setServValue(0)
                }}
              />
            ) : (
              ''
            )}
            {services.length ? (
              <div
                id="options"
                style={{
                  height: servFocus ? services.length * 2 + 'vw' : '0vw',
                  maxHeight: '20vw',
                  position: 'absolute',
                  zIndex: '8',
                }}
              >
                <div style={{ direction: 'ltr' }}>
                  {services.map((ser, index) => {
                    return (
                      <span
                        className="option"
                        onClick={() => {
                          setService(ser)
                          opService(ser)
                          if (index < 9) {
                            setServValue(0.5)
                          } else if (index < 19) {
                            setServValue(1.5)
                          } else {
                            setServValue(2.5)
                          }
                        }}
                      >
                        {ser}
                      </span>
                    )
                  })}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
      {minPrice ? (
        <h4>
          Ihr geschätzter Betreuungsbedarf kostet zwischen{' '}
          <span
            style={{
              color: 'green',
              fontSize: '1.5rem',
              // textShadow: '0px 0px 2px black',
            }}
          >
            {minPrice}
          </span>{' '}
          und{' '}
          <span
            style={{
              color: 'red',
              fontSize: '1.5rem',
              // textShadow: '0px 0px 2px black',
            }}
          >
            {maxPrice}
          </span>{' '}
          €
        </h4>
      ) : (
        ''
      )}
    </>
  )
}

export default Calculate
