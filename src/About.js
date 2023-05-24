import React from 'react'

import {FaBriefcase} from "react-icons/fa";
const About = () => {
  return (
    <>
        <div className="abt" id="about">
          <h2>About Me</h2>
          <div className="abtmnu">
            <div className="abtimg">
              <div className="abtimgbg"></div>
              <div className="abtimgbg"></div>
              <div className="abtimgbg">
                <img src="https://i.ibb.co/ZY3wqCh/119266110-1229743677378093-5041812434358770382-n.jpg" height="320rem" width="320rem" id="abtimag"/>
                <div className="abtimgbgdesc">
                  <h3>Tafsir Rahman</h3>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="abtdesc" data-aos="flip-up">
              <div className="abticon">
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Experience</h3>
                  <p>3 Year Working</p>
                </div>
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Completed</h3>
                  <p>20+ Projects</p>
                </div>
                <div class="abtpnt">
                  <FaBriefcase class="abticons"></FaBriefcase>
                  <h3>Support</h3>
                  <p>Active 24/7</p>
                </div>
              </div>
              <p id="abtdescp">Full Stack developer, I create RESRful and scalable 
                website with good UI/UX interface, I have years of experience and 
                many clients are happy with the projects carried out.
                connect with me.</p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
    </>
  )
}
export default About