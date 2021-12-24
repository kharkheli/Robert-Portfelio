import React, { useEffect, useRef, useState } from 'react'
import rob from './photoes/rob-no.png'
import { IoIosWoman, IoIosMan } from 'react-icons/io'

const colors = [
  '#6FB6D3',
  '#8DAE0D',
  '#6E2804',
  '#0DF2D1',
  '#227100',
  '#38B768',
  '#8F725F',
  '#3280FF',
  '#F1F564',
  '#C72A45',
  '#76674E',
  '#576DD2',
  '#F2740A',
  '#E5D454',
]

const Spec = React.memo(({ empNum, setEmpNum }) => {
  const [icons, setIcons] = useState([1])
  const iconRef = useRef(null)
  useEffect(() => {
    iconRef.current.value = empNum
    checkNum()
  }, [empNum])

  const checkNum = () => {
    let arr = []
    let k = 1
    setEmpNum(iconRef.current.value)
    let n =
      iconRef.current.value <= 55
        ? iconRef.current.value
        : iconRef.current.value < 1
        ? 1
        : 55
    n = n ? n : 1
    while (n) {
      if (n - k > 0) {
        arr.push(k)
      } else {
        arr.push(n)
        break
      }
      n -= k
      k += 1
    }
    setIcons(arr)
  }
  return (
    <section className="spec-serv">
      <article style={{ margin: 'auto', width: '90vw' }}>
        <h1 className="heading">Gemeinsam Besser</h1>
        <h3>
          Lassen Sie sich sicherheitstechnisch beraten, verbessern Sie Ihre
          Arbeitssicherheit und vermeiden Sie Arbeitsunfälle.
        </h3>
        <div className="magic-place-cont">
          <div className="magic-place">
            <img
              src={rob}
              alt="robert"
              style={{ width: '50vw', position: 'relative', left: '-5vw' }}
            />
            {icons.map((number, index) => {
              return (
                <div
                  key={index}
                  className={`icon-cont icons-${index}`}
                  style={{ width: 'max-content' }}
                >
                  {[...Array(number)].map((e, i) => (
                    <span
                      key={i}
                      className="icons"
                      style={{
                        color:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      {Math.random() > 0.5 ? (
                        <IoIosMan className={`icons${index}`} />
                      ) : (
                        <IoIosWoman className={`icons${index}`} />
                      )}
                    </span>
                  ))}
                </div>
              )
            })}
          </div>
          <p style={{ textAlign: 'center' }}>
            Wie viele Mitarbeiter haben Sie?
          </p>
          <input
            style={{
              margin: 'auto',
              display: 'block',
              fontSize: '1.5rem',
              textAlign: 'center',
              width: '10rem',
            }}
            type="number"
            ref={iconRef}
            placeholder="z.B. 1"
            onChange={() => checkNum()}
          />
        </div>
      </article>
    </section>
  )
})

export default Spec
