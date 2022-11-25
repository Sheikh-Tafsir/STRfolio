import React, {useState} from 'react'
import Workar from './Worksar'

import { FaArrowRight } from 'react-icons/fa';

const Works = () => {
    const [workData, setWorkData] = useState(Workar);

    const filteritems = (category) =>{
        //alert("he");
        const updatedList= Workar.filter((curElem)=>{
            return curElem.category===category;
        })
        setWorkData(updatedList);
        //col_chng(updatedList);
    };
    
    /*const col_chng = (updatedList) =>{
        alert(updatedList.length);
        for(var i=0;i<updatedList.length;i++){
            document.querySelectorAll(".workpnt")[i].classList.add("workpnt-lit");
        }
    }*/
    var btnn=document.querySelector
  return (
    <>
        <div className="Works" id="works">
            <h2>Works</h2>
            <div class="workmenubar">
                <button className="workmenubarbut" onClick={() => {setWorkData(Workar);}}>All</button>
                <button className="workmenubarbut" onClick={() => {filteritems("Web");}}>Web</button>
                <button className="workmenubarbut" onClick={() => {filteritems("App");}}>App</button>
                <button className="workmenubarbut" onClick={() => {filteritems("Soft");}}>Soft</button>
            </div>
            <div className="workmenu" data-aos="zoom-in">
            {workData.map((curElem)=>{
                return(
                    <div className="workpnt" key={curElem.id}>
                        <img src={curElem.image} height="200rem" width="280rem"></img>
                        <h3>{curElem.name}</h3>
                        <p>{curElem.desc}</p>
                        <a href={curElem.link} target="_blank"><button className="workpntbut">Demo <FaArrowRight className="warrow"></FaArrowRight></button></a>
                    </div>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default Works