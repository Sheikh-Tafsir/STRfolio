import React from 'react'

import {FaBriefcase} from "react-icons/fa";
const About = () => {
  return (
    <>
        <div className="abt" id="about">
          <h2>About Me</h2>
          <div className="abtmnu">
            <img src="https://i.ibb.co/ZY3wqCh/119266110-1229743677378093-5041812434358770382-n.jpg" height="320rem" width="320rem"></img>
            <div className="abtdesc">
              <div className="abticon">
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Experience</h3>
                  <p>1 Year Working</p>
                </div>
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Completed</h3>
                  <p>5+ Projects</p>
                </div>
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Support</h3>
                  <p>Online 24/7</p>
                </div>
              </div>
              <p id="abtdescp">Frontened developer, I crete responsive web pages with 
                UI/UX user interface, I have years of experience and 
                many clients are happy with the projects carried out.
                Connect with me.</p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
    </>
  )
}
export default About