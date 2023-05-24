import React, { useEffect, useState } from 'react'
import "./style.css"
import Headbar from './Headbar';
import Heromain from './Heromain';
import About from './About';
import Service from './Service';
import Works from './Works'
import Eduork from './Eduork';
import Team from './Team';
import Contacts from './Contacts';
import Footer from './Footer';
import Aos from "aos"
import  "aos/dist/aos.css"



const App = () => {
  
  useEffect(()=>{
    Aos.init({duration: 1500,once: true});
  }, []);

  return (
    <>
        <Headbar/>
        <Heromain></Heromain>
        <About></About>
        <Service></Service>
        <Works></Works>
        <Eduork></Eduork>
        <Team></Team>
        <Contacts></Contacts>
        <Footer></Footer>
    </>
  )
}

export default App
