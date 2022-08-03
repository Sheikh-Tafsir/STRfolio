import React from 'react'

import {FaFacebookF, FaFacebookMessenger} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

import {FaHome} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";
import {FaGlobe} from "react-icons/fa";
import {FaFacebookMessenge} from "react-icons/fa";

import { FaCross } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import {FaSun} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";

const Heromain = () => {
    const setlit = () =>{
        document.querySelector(".fa-moon").style.visibility="hidden";
        document.querySelector(".fa-sun").style.visibility="visible";
      };
      const setdark = () =>{
        document.querySelector(".fa-moon").style.visibility="visible";
        document.querySelector(".fa-sun").style.visibility="hidden";
      };
      
  return (
    <div>
        <div className="headbar">
          <div className="headlogo">
            <a href="https://ibb.co/4Mrp97L"><img src="https://i.ibb.co/Sv0xbpg/logo5.png" alt="pp" border="0" height="50rem" width="200rem"/></a>
          </div>
          <div className="thm">
            <FaSun className="fa-sun" onClick={() => setdark()}></FaSun>
            <FaMoon className="fa-moon" onClick={() => setlit()}></FaMoon>
          </div>
        </div>
        
        <div class="back">
          <div className="headicons">
            <a href="https://www.facebook.com/tmr.rahman" target="_blank" class="icon-style"><FaFacebookF/></a>
            <a href="https://www.instagram.com/sheikh_tafsir_rahman/" target="_blank" class="icon-style"><FaInstagram/></a>
            <a href="https://github.com/Sheikh-Tafsir" target="_blank" class="icon-style"><FaGithub/></a>
            <a href="https://github.com/Sheikh-Tafsir" target="_blank" class="icon-style"><FaLinkedinIn/></a>
          </div>
          <div className="headmain">
            <div className="headdesc">
              <p>Hi! I am</p>
              <h1>Tafsir </h1>
              <h1 id="name2">Rahman</h1>
              <ul>
                <li><h3 className="job1">Fullstack </h3> <h3>Developer</h3></li>
                <li><h3 className="job1">Competitive </h3> <h3>Programmer</h3></li>
                <li><h3 className="job1">Software </h3> <h3>Developer</h3></li>
                <li><h3 className="job1">UX/UI </h3> <h3>Developer</h3></li>
              </ul>
              <button id="dnld">Download CV</button>
              <button id="abtm">About Me</button>
            </div>
            <div className="headimg">
              <div className="circ">
                <img src="https://i.ibb.co/Kzzg22r/pp.png" height="500rem" width="500rem"/>
              </div>
            </div>
          </div>
          <div className="sidename">
            <h3 id="sname1">Tafsir</h3>
            <h3>Rahman</h3>
          </div>
        </div>

        <div class="menu">
          <a href="#"><FaHome className="menuicons"></FaHome></a>
          <a href="#about"><FaUserCircle className="menuicons"></FaUserCircle></a>
          <a href="#service"><FaBriefcase className="menuicons"></FaBriefcase></a>
          <a href="#teams"><FaGlobe className="menuicons"></FaGlobe></a>
          <a href="#contacts"><FaFacebookMessenger className="menuicons"></FaFacebookMessenger></a>
        </div>
    </div>
  )
}

export default Heromain