import React from 'react'
import github from '../assets/images/social-icons/github.png'
import linkedin from '../assets/images/social-icons/linkedin.png'
import facebook from '../assets/images/social-icons/facebook.png'
import twitter from '../assets/images/social-icons/twitter.png'
import youtube from '../assets/images/social-icons/youtube.png'
import medium from '../assets/images/social-icons/medium.png'
import instagram from '../assets/images/social-icons/instagram.png'


const Social = () => {
    return (
        <div className="social-container">
            <div className="heading">
                <h2><span>F</span>ollow <span>M</span>e</h2>
            </div>
            <div className="social-icons">
                <img class="social-icon
                .scial" src={linkedin} alt="" />
                <img class="social-icon" src={facebook} alt="" />
                <img class="social-icon" src={twitter} alt="" />
                <img class="social-icon" src={youtube} alt="" />
                <img class="social-icon" src={medium} alt="" />
                <img class="social-icon" src={github} alt="" />
                <img class="social-icon" src={instagram} alt="" />
            </div>
        </div>
    )
}

export default Social