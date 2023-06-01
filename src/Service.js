import React, {useState, useEffect} from 'react'
import Serviceara from './Serviceara'
import { FaArrowRight } from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
const Service = () => {
      const [workData, setWorkData] = useState(Serviceara);
      const srvcdeschid = () =>{
          document.querySelector(".srvcpntdesmenu").style.visibility="hidden";
      };

      const srvcdescshow = (x) =>{
          document.querySelector(".srvcpntdesmenu").style.visibility="visible";
          // alert(x);
          const updatedList= Serviceara.filter((curElem)=>{
             return curElem.id == x;
          })
          //alert(JSON.stringify(updatedList));
          setWorkData(updatedList);
      };

      useEffect(() => {
        //srvcdescshow("0"); // Filter for "Web" category initially
      }, []);

    return (
      <>
        <div className="srvc" id="service">
            <h2>What I Do</h2>
            <div className="srvcmnu">
                <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
                  <h3>Full Stack Developer</h3>
                  <button class="srvcpntbut" onClick={() => srvcdescshow(0)} >See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
                <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
                  <h3>Problem Solver</h3>
                  <button class="srvcpntbut" onClick={() => srvcdescshow(1)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
                <div className="srvcpnt" data-aos="slide-right" data-aos-duration="1500">
                  <h3>Software Developer </h3>
                  <button class="srvcpntbut" onClick={() => srvcdescshow(2)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
                <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
                  <h3>Mobile App Developer</h3>
                  <button class="srvcpntbut" onClick={() => srvcdescshow(3)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
                <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
                  <h3>Data Analyst</h3>
                  <button class="srvcpntbut" onClick={() => srvcdescshow(4)}>See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
                <div className="srvcpnt" data-aos="slide-left" data-aos-duration="1500">
                  <h3>UX UI Designer</h3>
                  <button class="srvcpntbut">See more <FaArrowRight className="rarrow"></FaArrowRight></button>
                </div>
            </div>

            <div className="srvcpntdesmenu">
                {workData.map((curElem)=>{
                    return(
                        <div className="srvcpntdesc" key={curElem.id}>
                          <ImCross className="srvccros" onClick={() => srvcdeschid()}></ImCross>
                            <h4>{curElem.h4}</h4>
                            <p>{curElem.p}</p>
                            <ul>
                              <li>{curElem.li1}</li>
                              <li>{curElem.l2}</li>
                              <li>{curElem.l3}</li>
                              <li>{curElem.l4}</li>
                            </ul>
                        </div>
                        )
                    })
                  }
            </div>
        </div>
    </>
  )
}

export default Service