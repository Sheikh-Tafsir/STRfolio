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
    };

  return (
    <>
        <div className="Works" id="works" data-aos="zoom-in">
            <h2>Works</h2>
            <div class="workmenubar">
                <button className="workmenubarbut" onClick={() => setWorkData(Workar)}>All</button>
                <button className="workmenubarbut" onClick={() => filteritems("Web")}>Web</button>
                <button className="workmenubarbut" onClick={() => filteritems("App")}>App</button>
                <button className="workmenubarbut" onClick={() => filteritems("Ux")}>Soft</button>
            </div>
            <div className="workmenu" >
            {workData.map((curElem)=>{
                return(
                    <div className="workpnt" key={curElem.id}>
                        <img src={curElem.image} height="200rem" width="280rem"></img>
                        <h4>{curElem.name}</h4>
                        <button className="workpntbut">Demo <FaArrowRight className="warrow"></FaArrowRight></button>
                    </div>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default Works