import React from 'react'

import { FaCross } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
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
            <div className="srvcpnt">
              <h3>Full Stack
                Developer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(0)} >See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt">
              <h3>UI/UX
                Designer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(1)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt">
              <h3>Mobile App
                Developer</h3>
              <button class="srvcpntbut" onClick={() => srvcdescshow(2)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt">
              <h3>Full Stack
                Developer</h3>
              <button>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt">
              <h3>UI/UX
                Designer</h3>
              <button>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
            <div className="srvcpnt">
              <h3>Mobile App
                Developer</h3>
              <button>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
            </div>
          </div>

          <div className="srvcpntdesmenu">
            <div className='srvcpntdesc'>
              <FaCross className="srvccros" onClick={() => srvcdeschid()}></FaCross>
              <h4>FullStack Developer</h4>
              <p>service with more than 3 years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>I develop user interface</li>
                <li>Webpage development</li>
                <li>ux element interaction</li>
                <li>position your company brand</li>
                <li>Design and mockups products</li>
              </ul>
            </div>
            <div className='srvcpntdesc'>
            <FaCross className="srvccros" onClick={() => srvcdeschid()}></FaCross>
              <h4>UI/UX Designer</h4>
              <p>service with more than 3 years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>I develop user interface</li>
                <li>Webpage development</li>
                <li>ux element interaction</li>
                <li>position your company brand</li>
                <li>Design and mockups products</li>
              </ul>
            </div>
            <div className='srvcpntdesc'>
            <FaCross className="srvccros" onClick={() => srvcdeschid()}></FaCross>
              <h4>Mobile App Developer</h4>
              <p>service with more than 3 years of
                  experience. Providing quallity work to clients
                  and companies</p>
              <ul>
                <li>I develop user interface</li>
                <li>Webpage development</li>
                <li>ux element interaction</li>
                <li>position your company brand</li>
                <li>Design and mockups products</li>
              </ul>
            </div>
           </div>
        </div>
    </>
  )
}

export default Service