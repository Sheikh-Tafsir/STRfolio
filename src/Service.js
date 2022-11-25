import React from 'react'

import { FaCross } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
const Service = () => {
    const srvcdeschid = () =>{
        document.querySelector(".srvcpntdesmenu").style.visibility="hidden";
        for(let i=0;i<6;i++){
            document.querySelectorAll(".srvcpntdesc")[i].style.visibility="hidden";
        }
    };
    const srvcdescshow = (x) =>{
        document.querySelector(".srvcpntdesmenu").style.visibility="visible";
        document.querySelectorAll(".srvcpntdesc")[x].style.visibility="visible";
        for(let i=0;i<6;i++){
          if(i!=x){
            document.querySelectorAll(".srvcpntdesc")[i].style.visibility="hidden";
          }
        }
    }
    return (
    <>
        <div className="srvc" id="service">
          <h2>What I Offer</h2>
          <div className="srvcmnu">
            <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
              <h3>Full Stack
                Developer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(0)} >See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
              <h3>UI/UX
                Designer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(1)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
              <h3>Mobile App
                Developer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(2)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
              <h3>Full Stack
                Developer</h3>
              <button class="srvcpntbut">See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
              <h3>UI/UX
                Designer</h3>
              <button class="srvcpntbut">See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
              <h3>Mobile App
                Developer</h3>
              <button class="srvcpntbut">See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
          </div>

          <div className="srvcpntdesmenu">
            <div className='srvcpntdesc'>
              <ImCross className="srvccros" onClick={() => srvcdeschid()}></ImCross>
              <h4>FullStack Developer</h4>
              <p>service with 3+ years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>Developing user friendly and attractive interface</li>
                <li>Frontend Web development with ReactJs</li>
                <li>Backend Web development with Nodejs Expressjs and Java</li>
                <li>Responsive interface</li>
                <li>Light and Dark theme mode pages</li>
              </ul>
            </div>
            <div className='srvcpntdesc'>
              <ImCross className="srvccros" onClick={() => srvcdeschid()}></ImCross>
              <h4>Software Engineer</h4>
              <p>service with 3+ years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>Java User interface software</li>
                <li>Fast and lightweight software with C++</li>
                <li>Machine learning and Artificial intelligence with Python</li>
                <li>Apps with JavaScript</li>
                
              </ul>
            </div>
            <div className='srvcpntdesc'>
              <ImCross className="srvccros" onClick={() => srvcdeschid()}></ImCross>
              <h4>Mobile App Developer</h4>
              <p>service with 3+ years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>Friendly User interface</li>
                <li>Cross PLatform native web app with React Native</li>
                <li>Cross PLatform native app with Flutter</li>
                <li>attractive UI for users</li>
                <li>Design and mockups products</li>
              </ul>
            </div>
           </div>
        </div>
    </>
  )
}

export default Service