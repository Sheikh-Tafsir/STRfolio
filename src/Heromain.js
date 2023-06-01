import React, { useState } from 'react'

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

  return (
    <div>
        <div class="back">
          <div className="headicons" data-aos="fade-down">
            <a href="https://www.facebook.com/tmr.rahman" target="_blank" className="headiconsa"><FaFacebookF className="headiconstyle"></FaFacebookF></a>
            <a href="https://www.instagram.com/sheikh_tafsir_rahman/" target="_blank" className="headiconsa"><FaInstagram className="headiconstyle"></FaInstagram></a>
            <a href="https://github.com/Sheikh-Tafsir" target="_blank" className="headiconsa"><FaGithub className="headiconstyle"></FaGithub></a>
            <a href="https://www.linkedin.com/in/tafsir-rahman-391767210/" target="_blank" className="headiconsa"><FaLinkedinIn className="headiconstyle"></FaLinkedinIn></a>
          </div>
          <div className="headmain">
            <div className="headdesc" data-aos="slide-right">
              <p>Hi! I am</p>
              <h1>Tafsir </h1>
              <h1 id="name2">Rahman</h1>
              <ul>
                <li><h3 className="job1">Fullstack </h3> <h3>Developer</h3></li>
                <li><h3 className="job1">Competitive </h3> <h3>Programmer</h3></li>
                <li><h3 className="job1">Software </h3> <h3>Developer</h3></li>
                <li><h3 className="job1">Mobile App </h3> <h3>Developer</h3></li>
              </ul>
              <button id="dnld"><a href="https://drive.google.com/file/d/1ylqpBvMOxTQdfewIbRT9645NJSpAzOca/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a></button>
              <button id="abtm"><a href="#about">About Me</a></button>
            </div>
            <div className="headimg" data-aos="slide-left">
              <div className="circ">
                <img src="https://i.ibb.co/Kzzg22r/pp.png" height="500rem" width="500rem"/>
              </div>
            </div>
          </div>
          <div className="sidename" data-aos="fade-down">
            <h3 id="sname1">Tafsir</h3>
            <h3>Rahman</h3>
          </div>
        </div>

        <div class="menu">
          <a href="#" className="menuicons"><FaHome ></FaHome></a>
          <a href="#about" className="menuicons"><FaUserCircle></FaUserCircle></a>
          <a href="#service" className="menuicons"><FaBriefcase></FaBriefcase></a>
          <a href="#teams" className="menuicons"><FaGlobe></FaGlobe></a>
          <a href="#contacts" className="menuicons"><FaFacebookMessenger></FaFacebookMessenger></a>
        </div>
    </div>
  )
}

export default Heromain