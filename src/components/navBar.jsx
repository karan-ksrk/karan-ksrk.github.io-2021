import React from 'react'
import logo from '../assets/images/logo.png'
const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            {/* <div className="nav-items">
          <div className="nav-item nav-active">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Contact Me</div>
      </div> */}
        </div>
    )
}

export default NavBar