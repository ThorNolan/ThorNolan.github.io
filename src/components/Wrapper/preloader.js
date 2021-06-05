import React from 'react'

import "./preloader.scss"

import flatSun from "../../images/new-sun.png"

const Preloader = () => {
  return (
    <div className="loader-container" id="preloader">
      <div className="loading-sun">
        <img loading="eager" src={flatSun} alt="A shining, magnificent rotating sun" />
      </div>
    </div>
  )
}

export default Preloader
