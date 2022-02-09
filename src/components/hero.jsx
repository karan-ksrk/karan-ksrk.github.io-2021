import React from 'react'
import arrow_icon from '../assets/images/arrow_down_alt.svg'
export const Hero = () => {
  return (
<div className="hero-container">
    <div className="title-container">
        <div className="title">
            <h1>Hi, It's </h1>
            <h1><span class="tech-data">Web </span><span>Developer</span></h1>
        </div>
        <div className="subtitle">
            <p>Creating world of tomorrow</p>
        </div>
        <div className="button-container">
            <div className="button">Know Me</div>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
</div>
  )
}
