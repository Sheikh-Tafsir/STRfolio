import React, { useState, useEffect } from 'react';
import {FaSun} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";

const Headbar = () => {

    let Theme=localStorage.getItem('Theme');
    const [theme, setTheme] = useState(Theme);
    const setpretheme = () => {
        if(Theme!='dark'){
            document.querySelector(".fa-moon").style.visibility="hidden";
            document.querySelector(".fa-sun").style.visibility="visible";
            document.querySelector("body").classList.add("body-lit");
            document.querySelector(".headbar").classList.add("headbar-lit");
            document.querySelector(".headdesc").classList.add("headdesc-lit");
            document.querySelector(".sidename").classList.add("sidename-lit");
    
            for(let i=0;i<4;i++){
                document.querySelectorAll(".headiconsa")[i].classList.add("headicons-a-lit");
            }
            for(let i=0;i<5;i++){
                document.querySelectorAll(".menuicons")[i].classList.add("menuicons-lit");
            }
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abtimgbg")[i].classList.add("abtimgbg-lit");
            }
            document.querySelector(".abtimgbgdesc").classList.add("abtimgbgdesc-lit");
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abtpnt")[i].classList.add("abtpnt-lit");
            }
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abticons")[i].classList.add("abticons-lit");
            }
            document.querySelector("#abtdescp").style.color="#151b26";
            
            //service
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpnt")[i].classList.add("srvcpnt-lit");
            }
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpntbut")[i].classList.add("srvcpntbut-lit");
            }

            Array.from(document.querySelector(".srvcpntdesc")).forEach(function(element) {
                element.classList.add("srvcpntdesc-lit");
            });

            //eduwork
            for (let i = 0; i < document.querySelectorAll(".edurkmenubut").length; i++) {
                document.querySelectorAll(".edurkmenubut")[i].classList.add("edurkmenubut-lit");
            }
            for (let i = 0; i < document.querySelectorAll(".eduorkbarpntdec").length; i++) {
                if (document.querySelectorAll(".eduorkbarpntdec")[i].classList) {
                    document.querySelectorAll(".eduorkbarpntdec")[i].classList.add("eduorkbarpntdec-lit");
                }
            }
            
            //team
            for(let i=0;i<9;i++){
                document.querySelectorAll(".teammem")[i].classList.add("teammem-lit");
            }
            for(let i=0;i<9;i++){
                document.querySelectorAll(".teammem > p")[i].style.color="whitesmoke"
            }
            for(let i=0;i<3;i++){
                document.querySelectorAll(".cntkpnt")[i].classList.add("cntkpnt-lit");
            }
            document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");
    
            for(let i=0;i<3;i++){
                document.querySelectorAll(".cntkpntbut")[i].classList.add("cntkpntbut-lit");
            }
            document.querySelector("#name").style.backgroundColor="whitesmoke";
            document.querySelector("#name").style.color="black";
            document.querySelector("#email").style.backgroundColor="whitesmoke";
            document.querySelector("#email").style.color="black";
            document.querySelector("#message").style.backgroundColor="whitesmoke";
            document.querySelector("#message").style.color="black";
            
            for(let i=0;i<3;i++){
                document.querySelectorAll("form > p")[i].style.backgroundColor="whitesmoke";
            }
            document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");
    
            for(let i=0;i<4;i++){
                document.querySelectorAll(".workmenubarbut")[i].classList.add("workmenubarbut-lit");
            }
            var workcount=document.querySelectorAll('.workpnt').length;
            for(let i=0;i<workcount;i++){
                document.querySelectorAll(".workpnt")[i].classList.add("workpnt-lit");
            }
            for(let i=0;i<workcount;i++){
                document.querySelectorAll(".workpntbut")[i].classList.add("workpntbut-lit");
            }
        }
    }

    const settheme = () => {
        let Theme=localStorage.getItem('Theme');
        //alert(Theme);
        if(Theme==='dark'){
            localStorage.setItem('Theme', 'light');
            setTheme('light');
            document.querySelector(".fa-moon").style.visibility="hidden";
            document.querySelector(".fa-sun").style.visibility="visible";
            document.querySelector("body").classList.add("body-lit");
            document.querySelector(".headbar").classList.add("headbar-lit");
            document.querySelector(".headdesc").classList.add("headdesc-lit");
            document.querySelector(".sidename").classList.add("sidename-lit");
    
            for(let i=0;i<4;i++){
                document.querySelectorAll(".headiconsa")[i].classList.add("headicons-a-lit");
            }
            for(let i=0;i<5;i++){
                document.querySelectorAll(".menuicons")[i].classList.add("menuicons-lit");
            }
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abtimgbg")[i].classList.add("abtimgbg-lit");
            }
            document.querySelector(".abtimgbgdesc").classList.add("abtimgbgdesc-lit");
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abtpnt")[i].classList.add("abtpnt-lit");
            }
            for(let i=0;i<3;i++){
                document.querySelectorAll(".abticons")[i].classList.add("abticons-lit");
            }
            document.querySelector("#abtdescp").style.color="#151b26";

            //service
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpnt")[i].classList.add("srvcpnt-lit");
            }
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpntbut")[i].classList.add("srvcpntbut-lit");
            }
            Array.from(document.querySelector(".srvcpntdesc")).forEach(function(element) {
                element.classList.add("srvcpntdesc-lit");
            });

            //eduwork
            for (let i = 0; i < document.querySelectorAll(".edurkmenubut").length; i++) {
                document.querySelectorAll(".edurkmenubut")[i].classList.add("edurkmenubut-lit");
            }
            for (let i = 0; i < document.querySelectorAll(".eduorkbarpntdec").length; i++) {
                if (document.querySelectorAll(".eduorkbarpntdec")[i].classList) {
                    document.querySelectorAll(".eduorkbarpntdec")[i].classList.add("eduorkbarpntdec-lit");
                }
            }
            
            //team
            for(let i=0;i<9;i++){
            document.querySelectorAll(".teammem")[i].classList.add("teammem-lit");
            }
            for(let i=0;i<9;i++){
            document.querySelectorAll(".teammem > p")[i].style.color="whitesmoke"
            }
            for(let i=0;i<3;i++){
            document.querySelectorAll(".cntkpnt")[i].classList.add("cntkpnt-lit");
            }
            document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");
    
            for(let i=0;i<3;i++){
            document.querySelectorAll(".cntkpntbut")[i].classList.add("cntkpntbut-lit");
            }
            document.querySelector("#name").style.backgroundColor="whitesmoke";
            document.querySelector("#name").style.color="black";
            document.querySelector("#email").style.backgroundColor="whitesmoke";
            document.querySelector("#email").style.color="black";
            document.querySelector("#message").style.backgroundColor="whitesmoke";
            document.querySelector("#message").style.color="black";
            
            for(let i=0;i<3;i++){
            document.querySelectorAll("form > p")[i].style.backgroundColor="whitesmoke";
            }
            document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");
            
            //work
            for(let i=0;i<4;i++){
            document.querySelectorAll(".workmenubarbut")[i].classList.add("workmenubarbut-lit");
            }
            var workcount=document.querySelectorAll('.workpnt').length;
            for(let i=0;i<workcount;i++){
            document.querySelectorAll(".workpnt")[i].classList.add("workpnt-lit");
            }
            for(let i=0;i<workcount;i++){
            document.querySelectorAll(".workpntbut")[i].classList.add("workpntbut-lit");
            }
    
        }
        else{
            localStorage.setItem('Theme', 'dark');
            setTheme('dark');
            document.querySelector(".fa-moon").style.visibility="visible";
            document.querySelector(".fa-sun").style.visibility="hidden";
            document.querySelector("body").classList.remove("body-lit");
            document.querySelector(".headbar").classList.remove("headbar-lit");
            document.querySelector(".headdesc").classList.remove("headdesc-lit");
            document.querySelector(".sidename").classList.remove("sidename-lit");
            for(let i=0;i<4;i++){
            document.querySelectorAll(".headiconsa")[i].classList.remove("headicons-a-lit");
            }
            for(let i=0;i<5;i++){
            document.querySelectorAll(".menuicons")[i].classList.remove("menuicons-lit");
            }
            for(let i=0;i<3;i++){
            document.querySelectorAll(".abtimgbg")[i].classList.remove("abtimgbg-lit");
            }
            document.querySelector(".abtimgbgdesc").classList.remove("abtimgbgdesc-lit");
            for(let i=0;i<3;i++){
            document.querySelectorAll(".abtpnt")[i].classList.remove("abtpnt-lit");
            }
            for(let i=0;i<3;i++){
            document.querySelectorAll(".abticons")[i].classList.remove("abticons-lit");
            }
            document.querySelector("#abtdescp").style.color="white";

            //service
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpnt")[i].classList.remove("srvcpnt-lit");
            }
            for(let i=0;i<6;i++){
                document.querySelectorAll(".srvcpntbut")[i].classList.remove("srvcpntbut-lit");
            }

            Array.from(document.querySelector(".srvcpntdesc")).forEach(function(element) {
                element.classList.remove("srvcpntdesc-lit");
            });

            //eduwork
            for (let i = 0; i < document.querySelectorAll(".edurkmenubut").length; i++) {
                document.querySelectorAll(".edurkmenubut")[i].classList.remove("edurkmenubut-lit");
            }
            for (let i = 0; i < document.querySelectorAll(".eduorkbarpntdec").length; i++) {
                if (document.querySelectorAll(".eduorkbarpntdec")[i].classList) {
                    document.querySelectorAll(".eduorkbarpntdec")[i].classList.remove("eduorkbarpntdec-lit");
                }
            }

            //team
            for(let i=0;i<9;i++){
                document.querySelectorAll(".teammem")[i].classList.remove("teammem-lit");
            }
            for(let i=0;i<9;i++){
                document.querySelectorAll(".teammem > p")[i].style.color="rgb(201, 201, 201)"
            }
            for(let i=0;i<3;i++){
            document.querySelectorAll(".cntkpnt")[i].classList.remove("cntkpnt-lit");
            }
            document.querySelector(".cntkmnu").classList.remove("cntkmnu-lit");
            for(let i=0;i<3;i++){
            document.querySelectorAll(".cntkpntbut")[i].classList.remove("cntkpntbut-lit");
            }
            document.querySelector("#name").style.backgroundColor="#0b0f1f";
            document.querySelector("#name").style.color="white";
            document.querySelector("#email").style.backgroundColor="#0b0f1f";
            document.querySelector("#email").style.color="white";
            document.querySelector("#message").style.backgroundColor="#0b0f1f";
            document.querySelector("#message").style.color="white";
            for(let i=0;i<3;i++){
            document.querySelectorAll("form > p")[i].style.backgroundColor="#0b0f1f";
            }
    
            //work
            for(let i=0;i<4;i++){
                document.querySelectorAll(".workmenubarbut")[i].classList.remove("workmenubarbut-lit");
            }
            var workcount=document.querySelectorAll('.workpnt').length;
            for(let i=0;i<workcount;i++){
                document.querySelectorAll(".workpnt")[i].classList.remove("workpnt-lit");
            }
            for(let i=0;i<workcount;i++){
                document.querySelectorAll(".workpntbut")[i].classList.remove("workpntbut-lit");
            }
        }
   }

    window.addEventListener("scroll",function(){
        var header=document.querySelector(".headbar");
        header.classList.toggle("sticky",window.scrollY > 0);
    });

    useEffect(() => {
        //setpretheme();
    }, []);

    return (
        <>
            <div className="headbar" onLoad={() => setpretheme()}>
                <div className="headlogo">
                    <a href="https://ibb.co/4Mrp97L"><img src="https://i.ibb.co/Sv0xbpg/logo5.png" alt="pp" border="0" height="50rem" width="200rem"/></a>
                </div>
                <div className="thm">
                    <FaSun className="fa-sun" onClick={() => settheme()}></FaSun>
                    <FaMoon className="fa-moon" onClick={() => settheme()}></FaMoon>
                </div>
            </div>
        </>
    )
}

export default Headbar