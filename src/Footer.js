import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <div>
        <div className="footer">
            <img src="https://i.ibb.co/s6jGM7G/Vintage-Retro-Style-Surf-Shop-Logo-removebg-preview.png" height="100rem" width="150rem"></img>
            <div className="footmenu">
                <a href="#about">About</a>
                <a href="#works">Projects</a>
                <a href="#teams">Team</a>
            </div>
            <div className="footicons">
                <a href="https://www.facebook.com/tmr.rahman"><FaFacebook className="footicon"></FaFacebook></a>
                <a href="https://www.instagram.com/sheikh_tafsir_rahman"><FaInstagram className="footicon"></FaInstagram></a>
                <a href="#"><FaTwitter className="footicon"></FaTwitter></a>
            </div>
            <p>&#169; Sheikh, All rights reserved</p>
        </div>
    </div>
  )
}

export default footer