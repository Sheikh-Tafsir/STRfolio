import React from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
const Eduork = () => {
    const showedu = () =>{
        /*.querySelectorAll(".edurkmenubut")[0].style.backgroundColor:*/
        document.querySelectorAll(".eduorkbarpnt")[1].style.visibility="hidden";
        document.querySelectorAll(".eduorkbarpnt")[0].style.visibility="visible";
    };
    const showwork = () =>{
        document.querySelectorAll(".eduorkbarpnt")[0].style.visibility="hidden";
        document.querySelectorAll(".eduorkbarpnt")[1].style.visibility="visible";
        
    };
  return (
    <div>
        <div className="edurk" id="eduork">
            <h2>Qualifications</h2>
            <div className="edurkmenubar">
                <button className="edurkmenubut" onClick={() => showedu()}><FaGraduationCap className="edurkmenubuticons"/>Education</button>
                <button className="edurkmenubut" onClick={() => showwork()}><FaBriefcase className="edurkmenubuticons"/>Work Exp</button>
            </div>
            <div className="eduorkbar" data-aos="fade-left">
                <div className="eduorkbarpnt">
                    <div className="eduorkbarpntdec">
                        <h3>Computer Science Engineering</h3>
                        <h4>Islamic University of Technology</h4>
                        <p>2020-2024</p>
                    </div>
                    <div className="eduorkbarpntdec">
                        <h3>HIgher School Certificate</h3>
                        <h4>Rajuk Uttara Model College</h4>
                        <p>2017-2019</p>
                    </div>
                    <div className="eduorkbarpntdec">
                        <h3>Secondary School Certificate</h3>
                        <h4>Safiuddin Sarker Academy and College</h4>
                        <p>2011-2017</p>
                    </div>
                    <div className="linee">
                        <div className="cicpnts"></div>
                        <div className="cicpnts"></div>
                        <div className="cicpnts"></div>
                    </div>
                </div>
                <div className="eduorkbarpnt">
                <div className="eduorkbarpntdec">
                        <h3>Software Engineering Intern </h3>
                        <h4>Brain Sattion 23</h4>
                        <p>2023-2023</p>
                    </div>
                    <div className="eduorkbarpntdec">
                        <h3>Full Stack Developer</h3>
                        <h4>Freelancer</h4>
                        <p>2022-</p>
                    </div>
                    {/* <div className="eduorkbarpntdec">
                        <h3>Project Manager</h3>
                        <h4>Safiuddin Sarker Academy and College</h4>
                        <p>2011-2017</p>
                    </div> */}
                    <div className="linee">
                        <div className="cicpnts"></div>
                        <div className="cicpnts"></div>
                        <div className="cicpnts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eduork