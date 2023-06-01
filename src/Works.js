import React, {useState, useEffect} from 'react'
import Workar from './Worksar'

import { FaArrowRight } from 'react-icons/fa';

const Works = () => {
    const [workData, setWorkData] = useState(Workar);
    let Theme=localStorage.getItem('Theme');

    const filteritems = (category) =>{
        //alert("he");
        const updatedList= Workar.filter((curElem)=>{
            return curElem.category===category;
        })
        setWorkData(updatedList);
    };
    

    useEffect(() => {
        filteritems("Web"); // Filter for "Web" category initially

    }, []);

    var btnn=document.querySelector
  return (
    <>
        <div className="Works" id="works">
            <h2>Works</h2>
            <div class="workmenubar">
                {/* <button className="workmenubarbut" onClick={() => {setWorkData(Workar);}}>All</button> */}
                <button className="workmenubarbut" onClick={() => {filteritems("Web");}}>Web</button>
                <button className="workmenubarbut" onClick={() => {filteritems("App");}}>App</button>
                <button className="workmenubarbut" onClick={() => {filteritems("Soft");}}>Soft</button>
                <button className="workmenubarbut" onClick={() => {filteritems("ml");}}>ML</button>
            </div>
            <div className="workmenu" data-aos="zoom-in">
                {workData.map((curElem)=>{
                    return(
                        <div className="workpnt" key={curElem.id}>
                            <img src={curElem.image} height="200rem" width="280rem"></img>
                            <h3>{curElem.name}</h3>
                            <p>{curElem.desc}</p>
                            <p>{curElem.techs}</p>
                            <a href={curElem.link} target="_blank"><button className="workpntbut">Demo <FaArrowRight className="warrow"></FaArrowRight></button></a>
                            <a href={curElem.gitlink} target="_blank"><button className="workpntbut">Github <FaArrowRight className="warrow"></FaArrowRight></button></a>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Works