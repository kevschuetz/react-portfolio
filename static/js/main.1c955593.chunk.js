(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(8),o=i.n(a),s=(i(15),i(2)),r=i(3),l=i(6),u=i(5),m=i(4),p=(i(16),i.p,i.p+"static/media/designer2-large.b433f746.jpg"),d=(i(17),i(0)),h=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).hoveredMainBtn=function(t){var i=t.clientX-t.target.getBoundingClientRect().left,n=t.clientY-t.target.getBoundingClientRect().top;e.ripple=document.createElement("div"),e.ripple.classList.add("ripple"),e.ripple.style.left="".concat(i,"px"),e.ripple.style.top="".concat(n,"px"),e.mainButton.prepend(e.ripple)},e.leftmainBtn=function(t){e.mainButton.removeChild(e.ripple)},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.mainButton=document.querySelector(".main-btn")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"section-1 center",children:[Object(d.jsx)("span",{className:"logo",children:"Kevin Sch\xfctz"}),Object(d.jsxs)("div",{className:"circles",children:[Object(d.jsx)("div",{className:"circle circle-1"}),Object(d.jsx)("div",{className:"circle circle-2"}),Object(d.jsx)("div",{className:"circle circle-3"}),Object(d.jsx)("div",{className:"circle circle-4"})]}),Object(d.jsx)("div",{className:"main-circle center",children:Object(d.jsx)("img",{src:p,className:"resize",alt:"designer"})}),Object(d.jsx)("h4",{className:"featured-text featured-text-1",children:"Software"}),Object(d.jsx)("h4",{className:"featured-text featured-text-2",children:"Developer"}),Object(d.jsx)("div",{className:"main-btn",onClick:this.props.scrollToProjects,onMouseEnter:this.hoveredMainBtn,onMouseLeave:this.leftmainBtn,children:Object(d.jsxs)("div",{className:"main-btn-content center",children:[Object(d.jsx)("div",{className:"main-btn-line"}),Object(d.jsx)("div",{className:"main-btn-line"}),Object(d.jsx)("div",{className:"main-btn-line"}),Object(d.jsx)("span",{children:"Projects"})]})})]})})}}]),i}(c.a.Component),f=(i(19),i(20),function(e){e.target&&e.target.firstElementChild&&(e.target.firstElementChild.style.top="-".concat(e.target.firstElementChild.offsetHeight-e.target.offsetHeight+20,"px"))}),j=function(e){e.target.firstElementChild&&(e.target.firstElementChild.style.top="2rem")},b=function(e){return Object(d.jsx)("div",{className:"project",onMouseEnter:f,onMouseLeave:j,onClick:function(){return e.onClick(e.id)},children:Object(d.jsx)("img",{src:e.img,alt:""})})},g=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).handleProjectClick=e.handleProjectClick.bind(Object(l.a)(e)),e.clickedClose=e.clickedClose.bind(Object(l.a)(e)),e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.container=document.querySelector(".container"),this.projectHideBtn=document.querySelector(".project-hide-btn")}},{key:"handleProjectClick",value:function(e){this.bigImgWrapper=document.createElement("div"),this.bigImgWrapper.className="project-img-wrapper",this.container.appendChild(this.bigImgWrapper);var t=document.createElement("img");t.className="project-img";var i=this.props.images.filter((function(t){return t.id===e}))[0].img_big;t.setAttribute("src",i),this.bigImgWrapper.appendChild(t),document.body.style.overflowY="hidden",this.projectHideBtn.classList.add("change")}},{key:"clickedClose",value:function(e){e.target.classList.remove("change"),this.bigImgWrapper.remove(),document.body.style.overflowY="scroll"}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"projects-container center",children:[Object(d.jsx)("h1",{className:"section-heading",children:"My work"}),Object(d.jsx)("div",{className:"projects center",children:this.props.images.map((function(t){return Object(d.jsx)(b,{id:t.id,img:t.img,onClick:e.handleProjectClick},"{image.id}")}))}),Object(d.jsx)("button",{className:"project-hide-btn",onClick:this.clickedClose,children:"\xabClose"})]})}}]),i}(c.a.Component),v=(i(21),function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).focusedInput=e.focusedInput.bind(Object(l.a)(e)),e.unfocusedInput=e.unfocusedInput.bind(Object(l.a)(e)),e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.formHeading=document.querySelector(".form-heading")}},{key:"focusedInput",value:function(e){var t=this;this.formHeading.style.opacity="0",setTimeout((function(){t.formHeading.textContent="Your ".concat(e.target.placeholder),t.formHeading.style.opacity="1"}),350)}},{key:"unfocusedInput",value:function(e){var t=this;this.formHeading.style.opacity="0",setTimeout((function(){t.formHeading.textContent="Let's Talk",t.formHeading.style.opacity="1"}),350)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contact-me-container",children:[Object(d.jsx)("h1",{className:"section-heading",children:"Contact Me"}),Object(d.jsxs)("div",{className:"form-wrapper",children:[Object(d.jsx)("h2",{className:"form-heading",children:"Let's Talk"}),Object(d.jsxs)("form",{method:"POST",action:"https://formspree.io/f/mknyjqwr",className:"contact-form center",children:[Object(d.jsx)("input",{name:"Name",type:"text",className:"contact-form-input",placeholder:"Name",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(d.jsx)("input",{name:"E-Mail",type:"email",className:"contact-form-input",placeholder:"E-Mail",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(d.jsx)("input",{name:"Subject",type:"text",className:"contact-form-input",placeholder:"Subject",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(d.jsx)("textarea",{name:"Message",class:"contact-form-input contact-form-textarea",placeholder:"Message",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(d.jsx)("input",{type:"submit",className:"form-submit-btn",value:"Send Request"})]})]})]})}}]),i}(c.a.Component)),x=(i(22),[{id:1,heading:"Development",text:"Java - Backend, REST-Services (Spring Boot), Swing / Docker / Flask"},{id:2,heading:"Databases",text:"SQL - JDBC, JPA / RDF - SPARQL / XQuery / Datalog"},{id:3,heading:"UI",text:"Angular / React"},{id:3,heading:"Breath",text:"For breath is life, so if you breathe well you will live long on earth. \u2013 Sanskrit Proverb"}]),O=(i(23),function(e){return Object(d.jsxs)("div",{className:"service",children:[Object(d.jsx)("a",{href:"#",className:"service-btn",onClick:y,children:Object(d.jsx)("span",{children:e.service.heading})}),Object(d.jsx)("p",{className:"service-text",children:e.service.text})]})}),y=function(e){e.preventDefault();var t=e.target.parentElement.nextElementSibling;t.classList.toggle("change");var i=t.classList.contains("change")?"calc(100% - ".concat(getComputedStyle(e.target).width,")"):0;e.target.style.right=i},C=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).services=x,e}return Object(r.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"services-container",children:[Object(d.jsx)("h1",{className:"section-heading",children:"What I can"}),Object(d.jsx)("div",{className:"services-wrapper center",children:x.map((function(e){return Object(d.jsx)(O,{service:e},"{service.id}")}))})]})}}]),i}(c.a.Component),k=i(10),N=i(9),S=(i(24),function(e){var t=e.title,i=e.authors,c=e.series,a=e.year,o=(e.abstract,e.doi),s=e.link,r=Object(n.useState)(!1),l=Object(N.a)(r,2);l[0],l[1];return Object(d.jsxs)("div",{className:"paper",children:[Object(d.jsx)("a",{href:"#",className:"paper-btn",onClick:w,children:Object(d.jsx)("span",{children:t})}),Object(d.jsxs)("p",{className:"paper-text",children:[i.join(", "),". ",a,", ",c,". ",Object(d.jsx)("a",{href:s,target:"_blank",children:o})]})]})}),w=function(e){e.preventDefault();var t=e.target.parentElement.nextElementSibling;t.classList.toggle("change");var i=t.classList.contains("change")?0:"calc(100% - ".concat(getComputedStyle(e.target).width,")");e.target.style.right=i},I=(i(25),function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).papers=n.props.papersData,console.log(n.papers),n}return Object(r.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"publications-container",children:[Object(d.jsx)("h1",{className:"section-heading",children:"Papers"}),Object(d.jsx)("div",{className:"papers-wrapper center",children:this.papers.map((function(e,t){return Object(d.jsx)(S,Object(k.a)({},e),t)}))})]})}}]),i}(c.a.Component)),M=i.p+"static/media/project-1.ab35d7df.jpg",E=i.p+"static/media/project-1-big.25ab46ea.jpg",T=i.p+"static/media/project-2.09e43d02.jpg",P=i.p+"static/media/project-2-big.b31ff267.jpg",L=i.p+"static/media/project-3.0d7f268b.jpg",R=i.p+"static/media/project-3-big.a1c6841f.jpg",z=i.p+"static/media/project-4.62ada2a5.jpg",A=i.p+"static/media/project-4-big.62ada2a5.jpg",B=(i.p,i.p,i.p+"static/media/project-6.8ad578ca.jpg"),D=i.p+"static/media/project-6-big.8ad578ca.jpg",q=(i.p,function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).scrollToProjectSection=function(){return e.projectSectionRef.current.scrollIntoView()},e.scrollToContactSection=function(){return e.contactRef.current.scrollIntoView()},e.scrollToServicesSection=function(){return e.servicesRef.current.scrollIntoView()},e.scrollToLandingSection=function(){return e.homeRef.current.scrollIntoView()},e.scrollToPublicationSection=function(){return e.publicationSectionRef.current.scrollIntoView()},e.downloadCV=function(){console.log("Downloading..");var e=document.createElement("a");e.href="https://drive.google.com/file/d/1E1wcjrOD25YAImtU6qrgjYJLY_NwdD7H/view?usp=sharing",e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e)},e.onMenuItemClick=function(t){e.menuIcon.classList.remove("show-menu-icon"),e.navBar.classList.remove("hide-navbar")},e.mouseMoved=function(t){t.clientX<e.mX?e.circles.forEach((function(t){t.style.left="".concat(e.z,"px")})):t.clientX>e.mX&&e.circles.forEach((function(t){t.style.left="-".concat(e.z,"px")})),t.clientY<e.mY?e.circles.forEach((function(t){t.style.top="".concat(e.z,"px")})):t.clientY>e.mY&&e.circles.forEach((function(t){t.style.top="-".concat(e.z,"px")})),e.mX=t.clientX,e.mY=t.clientY,e.mouseCircleBool&&(e.mouseCircle.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")),e.mouseDot.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")},e.mX=0,e.mY=0,e.z=100,e.projectSectionRef=c.a.createRef(),e.publicationSectionRef=c.a.createRef(),e.servicesRef=c.a.createRef(),e.contactRef=c.a.createRef(),e.homeRef=c.a.createRef(),e.scrollToProjectSection=e.scrollToProjectSection.bind(Object(l.a)(e)),e.state={images:[{id:1,img:M,img_big:E},{id:2,img:T,img_big:P},{id:3,img:L,img_big:R},{id:4,img:z,img_big:A},{id:6,img:B,img_big:D}],papersData:[{title:"Privacy-Preserving Implementation of Local Search Algorithms for Collaboratively Solving Assignment Problems in Time-Critical Contexts",authors:["Kevin Schuetz","Christoph G. Schuetz","Samuel Jaburek"],series:"2023 IEEE Congress on Evolutionary Computation (CEC)",year:"2023",abstract:"Solving real-world optimization problems often requires collaboration among multiple stakeholders. In air traffic flow management, for example, airlines must work together to prioritize individual flights in cases of reduced capacity in the air traffic network. However, when diverse parties are required to share sensitive information to collaboratively conduct optimization, trust becomes an issue. To alleviate those issues, privacy-preserving computation can be utilized to protect the confidential information of participants, which comes with a trade-off in terms of runtime performance. In time-critical contexts, privacy-preserving implementations of deterministic optimization algorithms may not be able to produce a result before the deadline. In this paper, we investigate the effectiveness of using variants of local search algorithms for the search of solutions to an optimization problem in conjunction with multi-party computation for the evaluation of those solutions. We argue that the proposed method using local search algorithms achieves good results in terms of the quality of the found solution while considerably reducing the run time with respect to a privacy-preserving deterministic solution.",doi:"10.1109/CEC53210.2023.10253978",link:"https://ieeexplore.ieee.org/document/10253978"},{title:"Privacy-Preserving Implementation of an Auction Mechanism for ATFM Slot Swapping",authors:["Paul Feichtenschlager","Kevin Schuetz","Christoph G. Schuetz","Eduard Gringinger"],series:"2023 Integrated Communication, Navigation and Surveillance Conference (ICNS)",year:"2023",abstract:"Air traffic flow management (ATFM) regulations issued by the EUROCONTROL Network Manager (NM) during periods of reduced capacity in the European air traffic network typically result in flight delays and additional costs for airspace users (AUs). However, not all flights are equally impacted by these regulations, and AUs would like to prioritize flights based on their preferences while protecting the confidentiality of such information. Thus, in the SlotMachine project, we proposed a privacy-preserving marketplace for collaborative optimization of flight lists during ATFM regulations An auction mechanism incentivizes AUs to participate in the SlotMachine\u2019s optimization runs. The proposed implementation of the auction mechanism in a privacy-preserving manner employs a genetic algorithm in combination with multi-party computation (MPC), since a privacy-preserving implementation of a deterministic algorithm would not finish within the time constraints. Experiments using realistic synthetic datasets based on real-world samples demonstrate feasibility of the proposed implementation.",doi:"10.1109/ICNS58246.2023.10124262",link:"https://ieeexplore.ieee.org/document/10124262"},{title:"A Distributed Architecture for Privacy-Preserving Optimization Using Genetic Algorithms and Multi-party Computation",authors:["Christoph G. Schuetz","Thomas Lor\xfcnser","Samuel Jaburek","Kevin Schuetz","Florian Wohner","Roman Karl","Eduard Gringinger "],series:"LNCS, volume 13591",year:"2022",abstract:"In many industries, competitors are required to cooperate in order to conduct optimizations, e.g., to solve an assignment problem. For example, in air traffic flow management (ATFM), flight prioritization in case of temporarily reduced capacity of the air traffic network is an instance of the assignment problem. Participants, however, are typically reluctant to share sensitive information regarding their preferences for the optimization, which renders conventional approaches to optimization inadequate. This paper proposes a method for combining genetic algorithms with multi-party computation (MPC) as the basis for building a platform for optimizing the assignment of resources to different agents under the assumption of an honest-but-curious platform provider; the method is illustrated on the ATFM use case. In the proposed method a genetic algorithm iteratively generates a population of candidate solutions to the assignment problem while a Privacy Engine component evaluates the population in each iteration step. The participants\u2019 private inputs are kept from competitors and not even the platform provider knows those inputs, receiving only encrypted input which is processed by MPC nodes in a way that preserves the secrecy of the inputs.",doi:"10.1007/978-3-031-17834-4_10",link:"https://doi.org/10.1007/978-3-031-17834-4_10"}]},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.circles=document.querySelectorAll(".circle"),this.mainCircle=document.querySelector(".main-circle"),this.mouseCircle=document.querySelector(".mouse-circle"),this.mouseDot=document.querySelector(".mouse-dot"),this.mouseCircleBool=!0,this.menuIcon=document.querySelector(".menu-icon"),this.navBar=document.querySelector(".navbar"),document.addEventListener("scroll",(function(){console.log(e.navBar),console.log(e.menuIcon),e.menuIcon.classList.add("show-menu-icon"),e.navBar.classList.add("hide-navbar"),0===window.scrollY&&(e.menuIcon.classList.remove("show-menu-icon"),e.navBar.classList.remove("hide-navbar"))}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",onMouseMove:this.mouseMoved,children:[Object(d.jsx)("div",{className:"mouse-circle"}),Object(d.jsx)("div",{className:"mouse-dot"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"page-bg"}),Object(d.jsxs)("div",{className:"menu-icon center",onClick:this.onMenuItemClick,children:[Object(d.jsx)("div",{className:"menu-icon-line"}),Object(d.jsx)("div",{className:"menu-icon-line"})]}),Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("a",{href:"#",className:"navbar-link",children:"Home"}),Object(d.jsx)("span",{className:"navbar-link",onClick:this.scrollToProjectSection,children:"Projects"}),Object(d.jsx)("span",{className:"navbar-link",onClick:this.scrollToPublicationSection,children:"Publications"}),Object(d.jsx)("span",{className:"navbar-link",onClick:this.scrollToServicesSection,children:"Skills"}),Object(d.jsx)("span",{className:"navbar-link",onClick:this.scrollToContactSection,children:"Contact"}),Object(d.jsx)("span",{className:"navbar-link",onClick:this.downloadCV,children:"CV"})]}),Object(d.jsx)(h,{ref:this.homeRef,scrollToProjects:this.scrollToProjectSection}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{ref:this.projectSectionRef,className:"section-3",children:Object(d.jsx)(g,{images:this.state.images})}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{ref:this.publicationSectionRef,className:"section-6",children:Object(d.jsx)(I,{papersData:this.state.papersData})}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{ref:this.servicesRef,className:"section-4",children:Object(d.jsx)(C,{})}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{ref:this.contactRef,className:"section-5 center",children:Object(d.jsx)(v,{})})]})]})}}]),i}(c.a.Component)),Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,27)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),Y()}],[[26,1,2]]]);
//# sourceMappingURL=main.1c955593.chunk.js.map