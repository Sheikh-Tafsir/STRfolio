(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(5),c=a.n(r),o=(a(18),a(20),a(3)),s=a(2),m=function(){var e=localStorage.getItem("Theme"),t=Object(l.useState)(e),a=Object(o.a)(t,2),r=(a[0],a[1]),c=function(){if("dark"===localStorage.getItem("Theme")){localStorage.setItem("Theme","light"),r("light"),document.querySelector(".fa-moon").style.visibility="hidden",document.querySelector(".fa-sun").style.visibility="visible",document.querySelector("body").classList.add("body-lit"),document.querySelector(".headbar").classList.add("headbar-lit"),document.querySelector(".headdesc").classList.add("headdesc-lit"),document.querySelector(".sidename").classList.add("sidename-lit");for(var e=0;e<4;e++)document.querySelectorAll(".headiconsa")[e].classList.add("headicons-a-lit");for(var t=0;t<5;t++)document.querySelectorAll(".menuicons")[t].classList.add("menuicons-lit");for(var a=0;a<3;a++)document.querySelectorAll(".abtimgbg")[a].classList.add("abtimgbg-lit");document.querySelector(".abtimgbgdesc").classList.add("abtimgbgdesc-lit");for(var l=0;l<3;l++)document.querySelectorAll(".abtpnt")[l].classList.add("abtpnt-lit");for(var n=0;n<3;n++)document.querySelectorAll(".abticons")[n].classList.add("abticons-lit");document.querySelector("#abtdescp").style.color="#151b26";for(var c=0;c<6;c++)document.querySelectorAll(".srvcpnt")[c].classList.add("srvcpnt-lit");for(var o=0;o<6;o++)document.querySelectorAll(".srvcpntbut")[o].classList.add("srvcpntbut-lit");Array.from(document.querySelector(".srvcpntdesc")).forEach(function(e){e.classList.add("srvcpntdesc-lit")});for(var s=0;s<document.querySelectorAll(".edurkmenubut").length;s++)document.querySelectorAll(".edurkmenubut")[s].classList.add("edurkmenubut-lit");for(var m=0;m<document.querySelectorAll(".eduorkbarpntdec").length;m++)document.querySelectorAll(".eduorkbarpntdec")[m].classList&&document.querySelectorAll(".eduorkbarpntdec")[m].classList.add("eduorkbarpntdec-lit");for(var i=0;i<9;i++)document.querySelectorAll(".teammem")[i].classList.add("teammem-lit");for(var d=0;d<9;d++)document.querySelectorAll(".teammem > p")[d].style.color="whitesmoke";for(var u=0;u<3;u++)document.querySelectorAll(".cntkpnt")[u].classList.add("cntkpnt-lit");document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");for(var h=0;h<3;h++)document.querySelectorAll(".cntkpntbut")[h].classList.add("cntkpntbut-lit");document.querySelector("#name").style.backgroundColor="whitesmoke",document.querySelector("#name").style.color="black",document.querySelector("#email").style.backgroundColor="whitesmoke",document.querySelector("#email").style.color="black",document.querySelector("#message").style.backgroundColor="whitesmoke",document.querySelector("#message").style.color="black";for(var b=0;b<3;b++)document.querySelectorAll("form > p")[b].style.backgroundColor="whitesmoke";document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");for(var p=0;p<4;p++)document.querySelectorAll(".workmenubarbut")[p].classList.add("workmenubarbut-lit");for(var g=document.querySelectorAll(".workpnt").length,E=0;E<g;E++)document.querySelectorAll(".workpnt")[E].classList.add("workpnt-lit");for(var v=0;v<g;v++)document.querySelectorAll(".workpntbut")[v].classList.add("workpntbut-lit")}else{localStorage.setItem("Theme","dark"),r("dark"),document.querySelector(".fa-moon").style.visibility="visible",document.querySelector(".fa-sun").style.visibility="hidden",document.querySelector("body").classList.remove("body-lit"),document.querySelector(".headbar").classList.remove("headbar-lit"),document.querySelector(".headdesc").classList.remove("headdesc-lit"),document.querySelector(".sidename").classList.remove("sidename-lit");for(var f=0;f<4;f++)document.querySelectorAll(".headiconsa")[f].classList.remove("headicons-a-lit");for(var k=0;k<5;k++)document.querySelectorAll(".menuicons")[k].classList.remove("menuicons-lit");for(var y=0;y<3;y++)document.querySelectorAll(".abtimgbg")[y].classList.remove("abtimgbg-lit");document.querySelector(".abtimgbgdesc").classList.remove("abtimgbgdesc-lit");for(var S=0;S<3;S++)document.querySelectorAll(".abtpnt")[S].classList.remove("abtpnt-lit");for(var w=0;w<3;w++)document.querySelectorAll(".abticons")[w].classList.remove("abticons-lit");document.querySelector("#abtdescp").style.color="white";for(var N=0;N<6;N++)document.querySelectorAll(".srvcpnt")[N].classList.remove("srvcpnt-lit");for(var q=0;q<6;q++)document.querySelectorAll(".srvcpntbut")[q].classList.remove("srvcpntbut-lit");Array.from(document.querySelector(".srvcpntdesc")).forEach(function(e){e.classList.remove("srvcpntdesc-lit")});for(var L=0;L<document.querySelectorAll(".edurkmenubut").length;L++)document.querySelectorAll(".edurkmenubut")[L].classList.remove("edurkmenubut-lit");for(var A=0;A<document.querySelectorAll(".eduorkbarpntdec").length;A++)document.querySelectorAll(".eduorkbarpntdec")[A].classList&&document.querySelectorAll(".eduorkbarpntdec")[A].classList.remove("eduorkbarpntdec-lit");for(var C=0;C<9;C++)document.querySelectorAll(".teammem")[C].classList.remove("teammem-lit");for(var D=0;D<9;D++)document.querySelectorAll(".teammem > p")[D].style.color="rgb(201, 201, 201)";for(var _=0;_<3;_++)document.querySelectorAll(".cntkpnt")[_].classList.remove("cntkpnt-lit");document.querySelector(".cntkmnu").classList.remove("cntkmnu-lit");for(var M=0;M<3;M++)document.querySelectorAll(".cntkpntbut")[M].classList.remove("cntkpntbut-lit");document.querySelector("#name").style.backgroundColor="#0b0f1f",document.querySelector("#name").style.color="white",document.querySelector("#email").style.backgroundColor="#0b0f1f",document.querySelector("#email").style.color="white",document.querySelector("#message").style.backgroundColor="#0b0f1f",document.querySelector("#message").style.color="white";for(var T=0;T<3;T++)document.querySelectorAll("form > p")[T].style.backgroundColor="#0b0f1f";for(var J=0;J<4;J++)document.querySelectorAll(".workmenubarbut")[J].classList.remove("workmenubarbut-lit");g=document.querySelectorAll(".workpnt").length;for(var j=0;j<g;j++)document.querySelectorAll(".workpnt")[j].classList.remove("workpnt-lit");for(var F=0;F<g;F++)document.querySelectorAll(".workpntbut")[F].classList.remove("workpntbut-lit")}};return window.addEventListener("scroll",function(){document.querySelector(".headbar").classList.toggle("sticky",window.scrollY>0)}),Object(l.useEffect)(function(){},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"headbar",onLoad:function(){return function(){if("dark"!==e){document.querySelector(".fa-moon").style.visibility="hidden",document.querySelector(".fa-sun").style.visibility="visible",document.querySelector("body").classList.add("body-lit"),document.querySelector(".headbar").classList.add("headbar-lit"),document.querySelector(".headdesc").classList.add("headdesc-lit"),document.querySelector(".sidename").classList.add("sidename-lit");for(var t=0;t<4;t++)document.querySelectorAll(".headiconsa")[t].classList.add("headicons-a-lit");for(var a=0;a<5;a++)document.querySelectorAll(".menuicons")[a].classList.add("menuicons-lit");for(var l=0;l<3;l++)document.querySelectorAll(".abtimgbg")[l].classList.add("abtimgbg-lit");document.querySelector(".abtimgbgdesc").classList.add("abtimgbgdesc-lit");for(var n=0;n<3;n++)document.querySelectorAll(".abtpnt")[n].classList.add("abtpnt-lit");for(var r=0;r<3;r++)document.querySelectorAll(".abticons")[r].classList.add("abticons-lit");document.querySelector("#abtdescp").style.color="#151b26";for(var c=0;c<6;c++)document.querySelectorAll(".srvcpnt")[c].classList.add("srvcpnt-lit");for(var o=0;o<6;o++)document.querySelectorAll(".srvcpntbut")[o].classList.add("srvcpntbut-lit");Array.from(document.querySelector(".srvcpntdesc")).forEach(function(e){e.classList.add("srvcpntdesc-lit")});for(var s=0;s<document.querySelectorAll(".edurkmenubut").length;s++)document.querySelectorAll(".edurkmenubut")[s].classList.add("edurkmenubut-lit");for(var m=0;m<document.querySelectorAll(".eduorkbarpntdec").length;m++)document.querySelectorAll(".eduorkbarpntdec")[m].classList&&document.querySelectorAll(".eduorkbarpntdec")[m].classList.add("eduorkbarpntdec-lit");for(var i=0;i<9;i++)document.querySelectorAll(".teammem")[i].classList.add("teammem-lit");for(var d=0;d<9;d++)document.querySelectorAll(".teammem > p")[d].style.color="whitesmoke";for(var u=0;u<3;u++)document.querySelectorAll(".cntkpnt")[u].classList.add("cntkpnt-lit");document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");for(var h=0;h<3;h++)document.querySelectorAll(".cntkpntbut")[h].classList.add("cntkpntbut-lit");document.querySelector("#name").style.backgroundColor="whitesmoke",document.querySelector("#name").style.color="black",document.querySelector("#email").style.backgroundColor="whitesmoke",document.querySelector("#email").style.color="black",document.querySelector("#message").style.backgroundColor="whitesmoke",document.querySelector("#message").style.color="black";for(var b=0;b<3;b++)document.querySelectorAll("form > p")[b].style.backgroundColor="whitesmoke";document.querySelector(".cntkmnu").classList.add("cntkmnu-lit");for(var p=0;p<4;p++)document.querySelectorAll(".workmenubarbut")[p].classList.add("workmenubarbut-lit");for(var g=document.querySelectorAll(".workpnt").length,E=0;E<g;E++)document.querySelectorAll(".workpnt")[E].classList.add("workpnt-lit");for(var v=0;v<g;v++)document.querySelectorAll(".workpntbut")[v].classList.add("workpntbut-lit")}}()}},n.a.createElement("div",{className:"headlogo"},n.a.createElement("a",{href:"https://ibb.co/4Mrp97L"},n.a.createElement("img",{src:"https://i.ibb.co/Sv0xbpg/logo5.png",alt:"pp",border:"0",height:"50rem",width:"200rem"}))),n.a.createElement("div",{className:"thm"},n.a.createElement(s.m,{className:"fa-sun",onClick:function(){return c()}}),n.a.createElement(s.l,{className:"fa-moon",onClick:function(){return c()}}))))},i=function(){return n.a.createElement("div",null,n.a.createElement("div",{class:"back"},n.a.createElement("div",{className:"headicons","data-aos":"fade-down"},n.a.createElement("a",{href:"https://www.facebook.com/tmr.rahman",target:"_blank",className:"headiconsa"},n.a.createElement(s.d,{className:"headiconstyle"})),n.a.createElement("a",{href:"https://www.instagram.com/sheikh_tafsir_rahman/",target:"_blank",className:"headiconsa"},n.a.createElement(s.j,{className:"headiconstyle"})),n.a.createElement("a",{href:"https://github.com/Sheikh-Tafsir",target:"_blank",className:"headiconsa"},n.a.createElement(s.f,{className:"headiconstyle"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/tafsir-rahman-391767210/",target:"_blank",className:"headiconsa"},n.a.createElement(s.k,{className:"headiconstyle"}))),n.a.createElement("div",{className:"headmain"},n.a.createElement("div",{className:"headdesc","data-aos":"slide-right"},n.a.createElement("p",null,"Hi! I am"),n.a.createElement("h1",null,"Tafsir "),n.a.createElement("h1",{id:"name2"},"Rahman"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("h3",{className:"job1"},"Software ")," ",n.a.createElement("h3",null,"Engineer")),n.a.createElement("li",null,n.a.createElement("h3",{className:"job1"},"Fullstack ")," ",n.a.createElement("h3",null,"Developer")),n.a.createElement("li",null,n.a.createElement("h3",{className:"job1"},"Problem ")," ",n.a.createElement("h3",null,"Solver")),n.a.createElement("li",null,n.a.createElement("h3",{className:"job1"},"Mobile App ")," ",n.a.createElement("h3",null,"Developer"))),n.a.createElement("button",{id:"dnld"},n.a.createElement("a",{href:"https://drive.google.com/file/d/1ylqpBvMOxTQdfewIbRT9645NJSpAzOca/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Download CV")),n.a.createElement("button",{id:"abtm"},n.a.createElement("a",{href:"#about"},"About Me"))),n.a.createElement("div",{className:"headimg","data-aos":"slide-left"},n.a.createElement("div",{className:"circ"},n.a.createElement("img",{src:"https://i.ibb.co/Kzzg22r/pp.png",height:"500rem",width:"500rem"})))),n.a.createElement("div",{className:"sidename","data-aos":"fade-down"},n.a.createElement("h3",{id:"sname1"},"Tafsir"),n.a.createElement("h3",null,"Rahman"))),n.a.createElement("div",{class:"menu"},n.a.createElement("a",{href:"#",className:"menuicons"},n.a.createElement(s.i,null)),n.a.createElement("a",{href:"#about",className:"menuicons"},n.a.createElement(s.o,null)),n.a.createElement("a",{href:"#service",className:"menuicons"},n.a.createElement(s.b,null)),n.a.createElement("a",{href:"#teams",className:"menuicons"},n.a.createElement(s.g,null)),n.a.createElement("a",{href:"#contacts",className:"menuicons"},n.a.createElement(s.e,null))))},d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"abt",id:"about"},n.a.createElement("h2",null,"About Me"),n.a.createElement("div",{className:"abtmnu"},n.a.createElement("div",{className:"abtimg"},n.a.createElement("div",{className:"abtimgbg"}),n.a.createElement("div",{className:"abtimgbg"}),n.a.createElement("div",{className:"abtimgbg"},n.a.createElement("img",{src:"https://i.ibb.co/ZY3wqCh/119266110-1229743677378093-5041812434358770382-n.jpg",height:"320rem",width:"320rem",id:"abtimag"}),n.a.createElement("div",{className:"abtimgbgdesc"},n.a.createElement("h3",null,"Tafsir Rahman"),n.a.createElement("p",null,"Software Engineer")))),n.a.createElement("div",{className:"abtdesc","data-aos":"flip-up"},n.a.createElement("div",{className:"abticon"},n.a.createElement("div",{class:"abtpnt"},n.a.createElement(s.b,{class:"abticons"}),n.a.createElement("h3",null,"Experience"),n.a.createElement("p",null,"1 Year Working")),n.a.createElement("div",{class:"abtpnt"},n.a.createElement(s.b,{class:"abticons"}),n.a.createElement("h3",null,"Completed"),n.a.createElement("p",null,"10+ Projects")),n.a.createElement("div",{class:"abtpnt"},n.a.createElement(s.b,{class:"abticons"}),n.a.createElement("h3",null,"Support"),n.a.createElement("p",null,"Active 24/7"))),n.a.createElement("p",{id:"abtdescp"},"Full Stack developer, I create RESTful and scalable website with good UI/UX interface, I have years of experience and many clients are happy with the projects carried out. connect with me."),n.a.createElement("button",null,"Contact Me")))))},u=[{id:"0",h4:"Web Developer",p:"Restful, scalable, and responsive web app development solutions designed to elevate your online presence and drive business growth.",li1:"Frontend: ReactJS, NextJS, AngularJS ",l2:"Backend: NodeJS, SpringBoot, Laravel ",l3:"Database: MySQL, PosgressSQL, MongoDB, Firebase",l4:"Hosting: Netlify, Vercel, Github ",l5:"Light and Dark theme mode pages"},{id:"1",h4:"Problem Solver",p:"The art of coding brilliance, where minds collide, algorithms conquer, and solutions emerge, transforming complex problems into elegant lines of code.",li1:"Languages: C++, Java, JavaScript, Python",l3:"Platforms: Codeforces, Leetcode, Codechef, HackerRank",l2:"Competitions: Intra University"},{id:"2",h4:"Software Developer",p:"Delivering innovative and high-performance software development solutions tailored to your specific needs, empowering your business to thrive in the digital landscape.",li1:"- GameDev: C++, SFML",l2:"- GUI: Java, JavaFX"},{id:"3",h4:"Mobile App Developers",p:"Crafting cutting-edge mobile applications that captivate users, drive engagement, and accelerate your business growth in the mobile-first world.",li1:"Frontend: React-Native, Java Android",l2:"Backend: Nodejs, SpringBoot",l3:"Database: Firebase, MySQL, PosgressSQL",l4:"platforms: Expo, CLI"},{id:"4",h4:"Data Analyst",p:"Unlocking the power of data through advanced analytics and machine learning to drive data-informed insights, strategic decision-making, and business transformation.",li1:"Algorithms: Regression, Gradient, Decision Trees, SVM",l2:"Learning: Supervised, Unsupervised, Reinforcement",l3:"Environments: Python, Jupyters Notebook, Google Collab"},{id:"5",h4:"UX UI Designer",p:"",li1:"",l2:"",l3:"",l4:"",l5:""},{id:"6",h4:"",p:"",li1:"",l2:"",l3:"",l4:"",l5:""}],h=a(6),b=function(){var e=Object(l.useState)(u),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(e){document.querySelector(".srvcpntdesmenu").style.visibility="visible";var t=u.filter(function(t){return t.id==e});r(t)};return Object(l.useEffect)(function(){},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"srvc",id:"service"},n.a.createElement("h2",null,"What I Do"),n.a.createElement("div",{className:"srvcmnu"},n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"600","data-aos-duration":"500","data-aos-anchor-placement":"top-bottom"},n.a.createElement("h3",null,"Full Stack Developer"),n.a.createElement("button",{class:"srvcpntbut",onClick:function(){return c(0)}},"See more ",n.a.createElement(s.a,{className:"rarrow"}))),n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"300","data-aos-duration":"500","data-aos-anchor-placement":"top-bottom"},n.a.createElement("h3",null,"Problem Solver"),n.a.createElement("button",{class:"srvcpntbut",onClick:function(){return c(1)}},"See more ",n.a.createElement(s.a,{className:"rarrow"}))),n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"0","data-aos-duration":"500","data-aos-anchor-placement":"top-bottom"},n.a.createElement("h3",null,"Software Developer "),n.a.createElement("button",{class:"srvcpntbut",onClick:function(){return c(2)}},"See more ",n.a.createElement(s.a,{className:"rarrow"}))),n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"600","data-aos-duration":"500","data-aos-anchor-placement":"bottom-bottom"},n.a.createElement("h3",null,"Mobile App Developer"),n.a.createElement("button",{class:"srvcpntbut",onClick:function(){return c(3)}},"See more ",n.a.createElement(s.a,{className:"rarrow"}))),n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"300","data-aos-duration":"500","data-aos-anchor-placement":"bottom-bottom"},n.a.createElement("h3",null,"Data Analyst"),n.a.createElement("button",{class:"srvcpntbut",onClick:function(){return c(4)}},"See more ",n.a.createElement(s.a,{className:"rarrow"}))),n.a.createElement("div",{className:"srvcpnt","data-aos":"slide-right","data-aos-delay":"0","data-aos-duration":"500","data-aos-anchor-placement":"bottom-bottom"},n.a.createElement("h3",null,"UX UI Designer"),n.a.createElement("button",{class:"srvcpntbut"},"See more ",n.a.createElement(s.a,{className:"rarrow"})))),n.a.createElement("div",{className:"srvcpntdesmenu"},a.map(function(e){return n.a.createElement("div",{className:"srvcpntdesc",key:e.id},n.a.createElement(h.a,{className:"srvccros",onClick:function(){document.querySelector(".srvcpntdesmenu").style.visibility="hidden"}}),n.a.createElement("h4",null,e.h4),n.a.createElement("p",null,e.p),n.a.createElement("ul",null,n.a.createElement("li",null,e.li1),n.a.createElement("li",null,e.l2),n.a.createElement("li",null,e.l3),n.a.createElement("li",null,e.l4)))}))))},p=[{id:1,image:"https://user-images.githubusercontent.com/83116065/141307693-10a407c6-31ab-417d-9183-2721792f182b.gif",name:"Outbreak",desc:"Virus simulation and human interraction visualizer",techs:"C++ and SFML",category:"Soft",link:"",gitlink:"https://github.com/Sheikh-Tafsir/Outbreak"},{id:2,image:"https://user-images.githubusercontent.com/83116065/128293336-ef3e4bdc-7f79-4e4c-8e4e-b0a5b4084265.gif",name:"AlgoEasy",desc:"Software to undertand the workings of the sorting algorithms",techs:"C++ and SFML",category:"Soft",link:"",gitlink:"https://github.com/Sheikh-Tafsir/Outbreak"},{id:3,image:"https://user-images.githubusercontent.com/83116065/128663442-e1b0ec5f-17bb-4b18-87b0-472d0c64025f.gif",name:"NarioGame",desc:"Mimic of mario game where player has to clear levels and earn points",techs:"C++ and SFML",category:"Soft",link:"https://drive.google.com/drive/folders/1LBp-N7-8F-W5GhNBHk81imcHLr7Lp5wm",gitlink:""},{id:4,image:"https://user-images.githubusercontent.com/83116065/163856679-f10c6451-d5b2-43a8-882a-793dd6433506.JPG",name:"TypeDash",desc:"Offline typing speed test and improving software",techs:"Java, JavaFX and MySQL",category:"Soft",link:"",gitlink:"https://github.com/Sheikh-Tafsir/TypeDash"},{id:5,image:"https://i.ibb.co/GCgp38P/11.jpg",name:"ResumWay",desc:"Personal customizable resume maker web app with form filling",techs:"HTML, CSS and JS",category:"Web",link:"https://sheikh-tafsir.github.io/cvtest.github-io/",gitlink:"https://github.com/Sheikh-Tafsir/ResumWay"},{id:6,image:"https://i.ibb.co/gMMJGpY/1.jpg",name:"SheduLit",desc:"An institutional webapp to book academic classrooms and quiz rooms",techs:"ReactJS, NodeJS, ExpressJS and MySql",category:"Web",link:"https://schedulitsheikh.netlify.app/",gitlink:"https://github.com/Sheikh-Tafsir/scheduLIT"},{id:7,image:"https://i.ibb.co/GJRLq0H/1.jpg",name:"CodeDoc",desc:"Doctor appointments booking Webapp",techs:"HTML CSS JS PHP and MySQL",category:"Web",link:"https://codedocprime.000webhostapp.com/",gitlink:"https://github.com/Sheikh-Tafsir/codeDOC"},{id:8,image:"https://user-images.githubusercontent.com/83116065/168484537-4f3aeb21-16b9-4e3d-a01d-0f4f57dc029b.JPG",name:"OctoJourney",desc:"Blog writing website to post and view tour blogs",techs:"HTML, CSS, JS and Firebase",category:"Web",link:"https://sheikh-tafsir.github.io/octo-journey.github.io/",gitlink:"https://github.com/Sheikh-Tafsir/octo-journey.github.io"},{id:9,image:"https://repository-images.githubusercontent.com/384619439/8e9cf0ca-bf6b-4838-a2b0-fa67d3465008",name:"AndroidCalculator",desc:"A simple calculator for android device",techs:"Java and Android studio",category:"App",link:"",gitlink:"https://github.com/Sheikh-Tafsir/AndroidCalculator"},{id:10,image:"https://i.ibb.co/F3Nrn2Z/fis.jpg",name:"ClubConnect",desc:"Club activities and event management Cross Platform mobile app",techs:"React-Native and Firebase",category:"App",link:"",gitlink:"https://sheikh-tafsir.github.io/cvtest.github-io/"},{id:11,image:"https://i.ibb.co/X4cY1S2/348359231-178440875168725-261654311788818772-n.png",name:"Krunch",desc:"Restaurant website that provides information on their menu and service",techs:"React, Spring Boot and MySQL",category:"Web",link:"https://quiet-torrone-15657b.netlify.app",gitlink:"https://github.com/Sheikh-Tafsir/KrunchBack"},{id:12,image:"https://miro.medium.com/v2/resize:fit:1200/1*LCMUnmhzV1VBCkyStimFDQ.png",name:"CarPredict",desc:"A machine learning project that predicts the price of used cars",techs:"Python and Jupyter-Notebook",category:"ml",link:"",gitlink:"https://github.com/anish0m/AutoPredictor"},{id:13,image:"https://i.ibb.co/X4cY1S2/348359231-178440875168725-261654311788818772-n.png",name:"Devfolio",desc:"Create your own portfolio and check others' too",techs:"React, Spring Boot, TailWind CSS, postgreSQL",category:"Web",link:"",gitlink:"https://github.com/Sheikh-Tafsir/Devfolio"}],g=function(){var e=Object(l.useState)(p),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(e){var t=p.filter(function(t){return t.category===e});r(t)};return Object(l.useEffect)(function(){c("Web")},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Works",id:"works","data-aos":"fade-up"},n.a.createElement("h2",null,"Works"),n.a.createElement("div",{class:"workmenubar"},n.a.createElement("button",{className:"workmenubarbut",onClick:function(){c("Web")}},"Web"),n.a.createElement("button",{className:"workmenubarbut",onClick:function(){c("App")}},"App"),n.a.createElement("button",{className:"workmenubarbut",onClick:function(){c("Soft")}},"Soft"),n.a.createElement("button",{className:"workmenubarbut",onClick:function(){c("ml")}},"ML")),n.a.createElement("div",{className:"workmenu"},a.slice().reverse().map(function(e){return n.a.createElement("div",{className:"workpnt",key:e.id},n.a.createElement("img",{src:e.image,height:"200rem",width:"280rem"}),n.a.createElement("h3",null,e.name),n.a.createElement("p",null,e.desc),n.a.createElement("p",null,e.techs),n.a.createElement("a",{href:e.link,target:"_blank"},n.a.createElement("button",{className:"workpntbut"},"Demo ",n.a.createElement(s.a,{className:"warrow"}))),n.a.createElement("a",{href:e.gitlink,target:"_blank"},n.a.createElement("button",{className:"workpntbut"},"Github ",n.a.createElement(s.a,{className:"warrow"}))))}))))},E=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"edurk",id:"eduork"},n.a.createElement("h2",null,"Qualifications"),n.a.createElement("div",{className:"edurkmenubar"},n.a.createElement("button",{className:"edurkmenubut",onClick:function(){return document.querySelectorAll(".eduorkbarpnt")[1].style.visibility="hidden",void(document.querySelectorAll(".eduorkbarpnt")[0].style.visibility="visible")}},n.a.createElement(s.h,{className:"edurkmenubuticons"}),"Education"),n.a.createElement("button",{className:"edurkmenubut",onClick:function(){return document.querySelectorAll(".eduorkbarpnt")[0].style.visibility="hidden",void(document.querySelectorAll(".eduorkbarpnt")[1].style.visibility="visible")}},n.a.createElement(s.b,{className:"edurkmenubuticons"}),"Experience")),n.a.createElement("div",{className:"eduorkbar"},n.a.createElement("div",{className:"eduorkbarpnt"},n.a.createElement("div",{className:"eduorkbarpntdec","data-aos":"slide-right","data-aos-duration":"1000"},n.a.createElement("h3",null,"Computer Science Engineering"),n.a.createElement("h4",null,"Islamic University of Technology"),n.a.createElement("p",null,"2020-2024")),n.a.createElement("div",{className:"eduorkbarpntdec","data-aos":"slide-left","data-aos-duration":"1000"},n.a.createElement("h3",null,"HIgher School Certificate"),n.a.createElement("h4",null,"Rajuk Uttara Model College"),n.a.createElement("p",null,"2017-2019")),n.a.createElement("div",{className:"eduorkbarpntdec","data-aos":"slide-right","data-aos-duration":"1000"},n.a.createElement("h3",null,"Secondary School Certificate"),n.a.createElement("h4",null,"Safiuddin Sarker Academy and College"),n.a.createElement("p",null,"2011-2017")),n.a.createElement("div",{className:"linee"},n.a.createElement("div",{className:"cicpnts"}),n.a.createElement("div",{className:"cicpnts"}),n.a.createElement("div",{className:"cicpnts"}))),n.a.createElement("div",{className:"eduorkbarpnt"},n.a.createElement("div",{className:"eduorkbarpntdec","data-aos":"slide-right","data-aos-duration":"1000"},n.a.createElement("h3",null,"Software Engineering Intern "),n.a.createElement("h4",null,"Brain Sattion 23"),n.a.createElement("p",null,"2023-2023")),n.a.createElement("div",{className:"eduorkbarpntdec","data-aos":"slide-left","data-aos-duration":"1000"},n.a.createElement("h3",null,"Full Stack Developer"),n.a.createElement("h4",null,"Freelancer"),n.a.createElement("p",null,"2022-")),n.a.createElement("div",{className:"linee"},n.a.createElement("div",{className:"cicpnts"}),n.a.createElement("div",{className:"cicpnts"}),n.a.createElement("div",{className:"cicpnts"}))))))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"team",id:"teams","data-aos":"fade-down"},n.a.createElement("h2",null,"My Team"),n.a.createElement("div",{className:"teammnu"},n.a.createElement("div",{className:"teammnupages"},n.a.createElement("a",{href:"https://www.facebook.com/fateen.navid.26",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/84742960?v=4",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Fateen Navid"),n.a.createElement("p",null,n.a.createElement("b",null,"Frontened Developer"),n.a.createElement("br",null)," Specialised in Quality Assuarance and develops frontend with reactJS."))),n.a.createElement("a",{href:"https://www.facebook.com/mohsina452",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/75539110?v=4",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Mohsina Tabassum Rifa"),n.a.createElement("p",null,n.a.createElement("b",null,"Competitive Programmer"),n.a.createElement("br",null),"Participated in online and offline competitions and Ranked 11th in NGPC 2022"))),n.a.createElement("a",{href:"https://www.facebook.com/nsarko",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/63149139?v=4",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Nazmus Sakib Arko"),n.a.createElement("p",null,n.a.createElement("b",null,"Backend Developer"),n.a.createElement("br",null)," Specialised in backend development using SpringBoot and Django")))),n.a.createElement("div",{className:"teammnupages"},n.a.createElement("a",{href:"https://www.facebook.com/arafat.binamin",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://media.licdn.com/dms/image/D5603AQEdeP0csnz2rg/profile-displayphoto-shrink_400_400/0/1684780376607?e=1690416000&v=beta&t=EMnX1G4u961v92RrihYxSLiC7ufdMK1-_28IdLCy0NE",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Arafat Bin Amin"),n.a.createElement("p",null,n.a.createElement("b",null,"Backend Developer"),n.a.createElement("br",null)," Backend Development with SpringBoot and Designing UI"))),n.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100042229070987",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/38831382?v=4",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Abid Hasan"),n.a.createElement("p",null,n.a.createElement("b",null,"Competitive Programmer"),n.a.createElement("br",null)," Participated in online and offline competitions and Ranked 1st in NCPC Jr regional "))),n.a.createElement("a",{href:"https://www.facebook.com/sidratul.tanzila",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://media.licdn.com/dms/image/C4E03AQFObNia0z3LsA/profile-displayphoto-shrink_100_100/0/1656945470813?e=1690416000&v=beta&t=Z4biD0Nidt12vvssZjl1JUVEWdmAgmDIcCEB3o6kLeY",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Sidratul Tanzila Tasmi"),n.a.createElement("p",null,n.a.createElement("b",null,"Data Scientist"),n.a.createElement("br",null),"Researcher, publish data science related paper and QA engineer")))),n.a.createElement("div",{className:"teammnupages"},n.a.createElement("a",{href:"https://www.facebook.com/jeby756",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://media.licdn.com/dms/image/D5603AQEnjHFKIb73GQ/profile-displayphoto-shrink_100_100/0/1684690190070?e=1690416000&v=beta&t=_cxAP9WIJyVxBBwRhRxldw0RR5dcZ_FOVMs0z9Hmrb0",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Jubayer Islam"),n.a.createElement("p",null,n.a.createElement("b",null,"Frontend Developer"),n.a.createElement("br",null)," Develops frontend with ReactJS and FLutter "))),n.a.createElement("a",{href:"https://www.facebook.com/tasnimulhasnat.ork",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://pbs.twimg.com/media/EI7OVdtX0AAyxIE.jpg",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Tasnimul Hasnat"),n.a.createElement("p",null,n.a.createElement("b",null,"Cyber Security Engineer"),n.a.createElement("br",null),"Ranked 1st in CTF 2023 asia regional and top ranked in other competitions"))),n.a.createElement("a",{href:"https://www.facebook.com/rafidnahiyan.farabi",target:"_blank",className:"teammemLink"},n.a.createElement("div",{className:"teammem"},n.a.createElement("img",{src:"https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-1/315310599_3424145707869717_9028748331201696252_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFW_ES6YRsPdz92G9UjBzx8ppvkkq7zGHimm-SSrvMYeMigA6EJCJgvKdLfHdMQcdXuyvnGwNg-LhYIrkgFMJWJ&_nc_ohc=Jbtt8bSnN2IAX_0rrRU&_nc_ht=scontent.fdac140-1.fna&oh=00_AfB2O8snqoGmHzuQKThda4VAfnHexwRERcFxcgYYPaPkOA&oe=6385925E",height:"80rem",width:"80rem"}),n.a.createElement("h3",null,"Rafid Nahiyan"),n.a.createElement("p",null,n.a.createElement("b",null,"Backend Developer"),n.a.createElement("br",null),"Specialised in backend development using SpringBoot and NodeJS"))))),n.a.createElement("div",{className:"teambar"},n.a.createElement("button",null),n.a.createElement("button",null),n.a.createElement("button",null))))},f=a(7),k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cntk",id:"contacts"},n.a.createElement("h2",null,"Contact Me"),n.a.createElement("div",{className:"cntkmnu"},n.a.createElement("div",{className:"cntkbar","data-aos":"slide-right"},n.a.createElement("h3",null,"Talk to me"),n.a.createElement("div",{className:"cntkpnt"},n.a.createElement(f.a,{className:"cntkpnticons"}),n.a.createElement("h4",null,"Email"),n.a.createElement("p",null,"190041130tafsir@gmail.com"),n.a.createElement("button",null,n.a.createElement("a",{href:"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTflxmKpkQKmTDWwrCjJwCJlgDlPDzVtvxXRtkzzsLDwhfVsLhxncRQmPctlQvvMJNnhL",target:"_blank",className:"cntkpntbut"},"Write Me ",n.a.createElement(s.a,{className:"warrow"})))),n.a.createElement("div",{className:"cntkpnt"},n.a.createElement(s.p,{className:"cntkpnticons"}),n.a.createElement("h4",null,"WhatsApp"),n.a.createElement("p",null,"01817530115"),n.a.createElement("button",null,n.a.createElement("a",{href:"https://web.whatsapp.com/",target:"_blank",className:"cntkpntbut"},"Write Me ",n.a.createElement(s.a,{className:"warrow"})))),n.a.createElement("div",{className:"cntkpnt"},n.a.createElement(s.e,{className:"cntkpnticons"}),n.a.createElement("h4",null,"Messenger"),n.a.createElement("p",null,"sheikh tafsir rahman"),n.a.createElement("button",null,n.a.createElement("a",{href:"#",target:"_blank",className:"cntkpntbut"},"Write Me ",n.a.createElement(s.a,{className:"warrow"}))))),n.a.createElement("div",{className:"mailbar","data-aos":"slide-left"},n.a.createElement("h3",null,"Write me your project"),n.a.createElement("form",{className:"con-form",action:"https://formspree.io/f/xeqnvlln",method:"POST"},n.a.createElement("p",null,"Name"),n.a.createElement("input",{type:"text",id:"name",placeholder:"Insert Your Name",name:"Name",required:!0}),n.a.createElement("p",null,"Email"),n.a.createElement("input",{type:"email",id:"email",placeholder:"Insert Your Emaiil",name:"Email",required:!0}),n.a.createElement("p",null,"Project"),n.a.createElement("textarea",{id:"message",placeholder:"Your Needs",name:"needs",required:!0}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit"},"Send Message"))))))},y=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"footer"},n.a.createElement("img",{src:"https://i.ibb.co/s6jGM7G/Vintage-Retro-Style-Surf-Shop-Logo-removebg-preview.png",height:"100rem",width:"150rem",alt:"jhb"}),n.a.createElement("div",{className:"footmenu"},n.a.createElement("a",{href:"#about"},"About"),n.a.createElement("a",{href:"#works"},"Projects"),n.a.createElement("a",{href:"#teams"},"Team")),n.a.createElement("div",{className:"footicons"},n.a.createElement("a",{href:"https://www.facebook.com/tmr.rahman"},n.a.createElement(s.c,{className:"footicon"})),n.a.createElement("a",{href:"https://www.instagram.com/sheikh_tafsir_rahman"},n.a.createElement(s.j,{className:"footicon"})),n.a.createElement("a",{href:"#"},n.a.createElement(s.n,{className:"footicon"}))),n.a.createElement("p",null,"\xa9 Sheikh, All rights reserved")))},S=a(8),w=a.n(S),N=(a(22),function(){return Object(l.useEffect)(function(){w.a.init({duration:1500})},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement(i,null),n.a.createElement(d,null),n.a.createElement(b,null),n.a.createElement(g,null),n.a.createElement(E,null),n.a.createElement(v,null),n.a.createElement(k,null),n.a.createElement(y,null))}),q=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,25)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null))),q()},9:function(e,t,a){e.exports=a(24)}},[[9,3,2]]]);
//# sourceMappingURL=main.2181331c.chunk.js.map