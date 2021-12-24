import React, { useState, useRef, useEffect } from 'react'
import { HiLightBulb } from 'react-icons/hi'

const SingleService = ({ id, img, desc, hidden, name, list }) => {
  // const [more, setMore] = useState(false)
  const [anim, setAnim] = useState(false)

  const imgRef = useRef(null)
  useEffect(() => {
    if (
      !anim &&
      imgRef.current.getBoundingClientRect().y < window.innerHeight * 0.8
    ) {
      setAnim(true)
    }
  })
  return (
    <article
      className="service"
      ref={imgRef}
      // style={{ marginLeft: !(id % 2) ? '15vw' : '5vw' }}
    >
      {id % 2 ? <DisplayImg img={img} name={name} anim={anim} /> : ''}
      <div className="service-info">
        <h2>{name}</h2>
        <p style={{ width: '56vw' }}>
          {desc}{' '}
          {list ? (
            <span style={{ display: 'block', height: '0.6rem' }}></span>
          ) : (
            ''
          )}
          {list
            ? list.map((li, index) => {
                return (
                  <li
                    key={index}
                    style={{ fontSize: '1.5rem', width: 'max-content' }}
                  >
                    {li}
                  </li>
                )
              })
            : ''}
          <span
            style={{
              display: 'inline-block',
              paddingTop: '0.6rem',
              fontSize: '1.5rem',
            }}
          >
            {hidden}
          </span>
          {/* <span className="more" onClick={() => setMore(!more)}>
            {more ? 'weniger' : 'mehr'}
          </span> */}
        </p>
      </div>
      {!(id % 2) ? <DisplayImg img={img} anim={anim} /> : ''}
    </article>
  )
}

const DisplayImg = ({ img, anim, imgRef }) => {
  return (
    <div className="service-image">
      {img.map((photo, index) => {
        if (photo.name == 'light') {
          return (
            <span key={index} id="light">
              <HiLightBulb
                className={anim ? 'toggle-light' : ''}
                style={{
                  fontSize: anim ? '5vw' : '0',
                }}
              />
            </span>
          )
        } else {
          return (
            <img
              src={photo.src}
              alt={photo.name}
              id={photo.name}
              key={photo.name}
              style={{
                transform: `${anim ? 'translate(0,0) scale(1)' : ''}`,
                opacity: anim ? '1' : '0',
              }}
            />
          )
        }
      })}
    </div>
  )
}

export default SingleService
