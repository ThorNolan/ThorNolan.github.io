import React from 'react'

import "./preloader.scss"

const Preloader = () => {
  return (
    <div className="loader-container" id="preloader">
      <div className="loading-gooey">
        <div className="loading-gooey__dot loading-gooey__dot--dot3"></div>
        <div className="loading-gooey__dot loading-gooey__dot--dot2"></div>
        <div className="loading-gooey__dot loading-gooey__dot--dot1"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="loader-svg">
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Preloader