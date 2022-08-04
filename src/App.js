import React from 'react'
import "./style.css"
import Heromain from './Heromain';
import About from './About';
import Service from './Service';
import Works from './Works'
import Team from './Team';
import Contacts from './Contacts';
import Footer from './Footer';


const App = () => {

  const stickyhead = () =>{
    var header=document.querySelector(".headbar");
    header.classList.toggle("sticky",window.scrollY > 0);
  };

  return (
    <div onWheel={() => stickyhead()} onScroll={() => stickyhead()}>
      <div className="canvas">

        <Heromain></Heromain>
        <About></About>
        <Service></Service>
        <Works></Works>
        <Team></Team>
        <Contacts></Contacts>
        <Footer></Footer>
        
      </div>
    </div>
  )
}

export default App
