(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(8),a=c.n(s),o=(c(13),c(2)),r=c(3),l=c(6),u=c(5),d=c(4),m=(c(14),c.p+"static/media/designer.ed4c86a5.jpg"),j=(c(15),c(0)),h=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).hoveredMainBtn=function(t){var c=t.clientX-t.target.getBoundingClientRect().left,n=t.clientY-t.target.getBoundingClientRect().top;e.ripple=document.createElement("div"),e.ripple.classList.add("ripple"),e.ripple.style.left="".concat(c,"px"),e.ripple.style.top="".concat(n,"px"),e.mainButton.prepend(e.ripple)},e.leftmainBtn=function(t){e.mainButton.removeChild(e.ripple)},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.mainButton=document.querySelector(".main-btn")}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"section-1 center",children:[Object(j.jsx)("span",{className:"logo",children:"Kevin Sch\xfctz"}),Object(j.jsxs)("div",{className:"circles",children:[Object(j.jsx)("div",{className:"circle circle-1"}),Object(j.jsx)("div",{className:"circle circle-2"}),Object(j.jsx)("div",{className:"circle circle-3"}),Object(j.jsx)("div",{className:"circle circle-4"})]}),Object(j.jsx)("div",{className:"main-circle center",children:Object(j.jsx)("img",{src:m,className:"resize",alt:"designer"})}),Object(j.jsx)("h4",{className:"featured-text featured-text-1",children:"Software"}),Object(j.jsx)("h4",{className:"featured-text featured-text-2",children:"Developer"}),Object(j.jsx)("div",{className:"main-btn",onClick:this.props.scrollToProjects,onMouseEnter:this.hoveredMainBtn,onMouseLeave:this.leftmainBtn,children:Object(j.jsxs)("div",{className:"main-btn-content center",children:[Object(j.jsx)("div",{className:"main-btn-line"}),Object(j.jsx)("div",{className:"main-btn-line"}),Object(j.jsx)("div",{className:"main-btn-line"}),Object(j.jsx)("span",{children:"Projects"})]})})]})})}}]),c}(i.a.Component),p=(c(17),c(18),function(e){e.target&&e.target.firstElementChild&&(e.target.firstElementChild.style.top="-".concat(e.target.firstElementChild.offsetHeight-e.target.offsetHeight+20,"px"))}),f=function(e){e.target.firstElementChild&&(e.target.firstElementChild.style.top="2rem")},b=function(e){return Object(j.jsx)("div",{className:"project",onMouseEnter:p,onMouseLeave:f,onClick:function(){return e.onClick(e.id)},children:Object(j.jsx)("img",{src:e.img,alt:""})})},v=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).handleProjectClick=e.handleProjectClick.bind(Object(l.a)(e)),e.clickedClose=e.clickedClose.bind(Object(l.a)(e)),e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.container=document.querySelector(".container"),this.projectHideBtn=document.querySelector(".project-hide-btn")}},{key:"handleProjectClick",value:function(e){this.bigImgWrapper=document.createElement("div"),this.bigImgWrapper.className="project-img-wrapper",this.container.appendChild(this.bigImgWrapper);var t=document.createElement("img");t.className="project-img";var c=this.props.images.filter((function(t){return t.id===e}))[0].img_big;t.setAttribute("src",c),this.bigImgWrapper.appendChild(t),document.body.style.overflowY="hidden",this.projectHideBtn.classList.add("change")}},{key:"clickedClose",value:function(e){e.target.classList.remove("change"),this.bigImgWrapper.remove(),document.body.style.overflowY="scroll"}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"projects-container",children:[Object(j.jsx)("h1",{className:"section-heading",children:"My work"}),Object(j.jsx)("div",{className:"projects center",children:this.props.images.map((function(t){return Object(j.jsx)(b,{id:t.id,img:t.img,onClick:e.handleProjectClick},"{image.id}")}))}),Object(j.jsx)("button",{className:"project-hide-btn",onClick:this.clickedClose,children:"\xabClose"})]})}}]),c}(i.a.Component),g=(c(19),function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).focusedInput=e.focusedInput.bind(Object(l.a)(e)),e.unfocusedInput=e.unfocusedInput.bind(Object(l.a)(e)),e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.formHeading=document.querySelector(".form-heading")}},{key:"focusedInput",value:function(e){var t=this;this.formHeading.style.opacity="0",setTimeout((function(){t.formHeading.textContent="Your ".concat(e.target.placeholder),t.formHeading.style.opacity="1"}),350)}},{key:"unfocusedInput",value:function(e){var t=this;this.formHeading.style.opacity="0",setTimeout((function(){t.formHeading.textContent="Let's Talk",t.formHeading.style.opacity="1"}),350)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"contact-me-container",children:[Object(j.jsx)("h1",{className:"section-heading",children:"Contact Me"}),Object(j.jsxs)("div",{className:"form-wrapper",children:[Object(j.jsx)("h2",{className:"form-heading",children:"Let's Talk"}),Object(j.jsxs)("form",{method:"POST",action:"https://formspree.io/f/mknyjqwr",className:"contact-form center",children:[Object(j.jsx)("input",{name:"Name",type:"text",className:"contact-form-input",placeholder:"Name",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(j.jsx)("input",{name:"E-Mail",type:"email",className:"contact-form-input",placeholder:"E-Mail",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(j.jsx)("input",{name:"Subject",type:"text",className:"contact-form-input",placeholder:"Subject",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(j.jsx)("textarea",{name:"Message",class:"contact-form-input contact-form-textarea",placeholder:"Message",onMouseLeave:this.unfocusedInput,onMouseEnter:this.focusedInput}),Object(j.jsx)("input",{type:"submit",className:"form-submit-btn",value:"Send Request"})]})]})]})}}]),c}(i.a.Component)),x=(c(20),[{id:1,heading:"Development",text:"Java - Backend, REST-Services (Spring Boot), Swing / Docker / Flask"},{id:2,heading:"Databases",text:"SQL - JDBC, JPA / RDF - SPARQL / XQuery / Datalog"},{id:3,heading:"UI",text:"Angular / React"},{id:3,heading:"Breath",text:"For breath is life, so if you breathe well you will live long on earth. \u2013 Sanskrit Proverb"}]),O=(c(21),function(e){return Object(j.jsxs)("div",{className:"service",children:[Object(j.jsx)("a",{href:"#",className:"service-btn",onClick:y,children:Object(j.jsx)("span",{children:e.service.heading})}),Object(j.jsx)("p",{className:"service-text",children:e.service.text})]})}),y=function(e){e.preventDefault();var t=e.target.parentElement.nextElementSibling;t.classList.toggle("change");var c=t.classList.contains("change")?"calc(100% - ".concat(getComputedStyle(e.target).width,")"):0;e.target.style.right=c},N=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).services=x,e}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"services-container",children:[Object(j.jsx)("h1",{className:"section-heading",children:"What I can"}),Object(j.jsx)("div",{className:"services-wrapper center",children:x.map((function(e){return Object(j.jsx)(O,{service:e},"{service.id}")}))})]})}}]),c}(i.a.Component),C=c.p+"static/media/project-1.ab35d7df.jpg",k=c.p+"static/media/project-1-big.25ab46ea.jpg",S=c.p+"static/media/project-2.09e43d02.jpg",I=c.p+"static/media/project-2-big.b31ff267.jpg",M=c.p+"static/media/project-3.0d7f268b.jpg",E=c.p+"static/media/project-3-big.a1c6841f.jpg",L=c.p+"static/media/project-4.62ada2a5.jpg",w=c.p+"static/media/project-4-big.62ada2a5.jpg",B=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).scrollToProjectSection=function(){return e.projectSectionRef.current.scrollIntoView()},e.scrollToContactSection=function(){return e.contactRef.current.scrollIntoView()},e.scrollToServicesSection=function(){return e.servicesRef.current.scrollIntoView()},e.scrollToLandingSection=function(){return e.homeRef.current.scrollIntoView()},e.onMenuItemClick=function(t){e.menuIcon.classList.remove("show-menu-icon"),e.navBar.classList.remove("hide-navbar")},e.mouseMoved=function(t){t.clientX<e.mX?e.circles.forEach((function(t){t.style.left="".concat(e.z,"px")})):t.clientX>e.mX&&e.circles.forEach((function(t){t.style.left="-".concat(e.z,"px")})),t.clientY<e.mY?e.circles.forEach((function(t){t.style.top="".concat(e.z,"px")})):t.clientY>e.mY&&e.circles.forEach((function(t){t.style.top="-".concat(e.z,"px")})),e.mX=t.clientX,e.mY=t.clientY,e.mouseCircleBool&&(e.mouseCircle.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")),e.mouseDot.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")},e.mX=0,e.mY=0,e.z=100,e.projectSectionRef=i.a.createRef(),e.servicesRef=i.a.createRef(),e.contactRef=i.a.createRef(),e.homeRef=i.a.createRef(),e.scrollToProjectSection=e.scrollToProjectSection.bind(Object(l.a)(e)),e.state={images:[{id:1,img:C,img_big:k},{id:2,img:S,img_big:I},{id:3,img:M,img_big:E},{id:4,img:L,img_big:w}]},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.circles=document.querySelectorAll(".circle"),this.mainCircle=document.querySelector(".main-circle"),this.mouseCircle=document.querySelector(".mouse-circle"),this.mouseDot=document.querySelector(".mouse-dot"),this.mouseCircleBool=!0,this.menuIcon=document.querySelector(".menu-icon"),this.navBar=document.querySelector(".navbar"),document.addEventListener("scroll",(function(){console.log(e.navBar),console.log(e.menuIcon),e.menuIcon.classList.add("show-menu-icon"),e.navBar.classList.add("hide-navbar"),0===window.scrollY&&(e.menuIcon.classList.remove("show-menu-icon"),e.navBar.classList.remove("hide-navbar"))}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",onMouseMove:this.mouseMoved,children:[Object(j.jsx)("div",{className:"mouse-circle"}),Object(j.jsx)("div",{className:"mouse-dot"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"page-bg"}),Object(j.jsxs)("div",{className:"menu-icon center",onClick:this.onMenuItemClick,children:[Object(j.jsx)("div",{className:"menu-icon-line"}),Object(j.jsx)("div",{className:"menu-icon-line"})]}),Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("a",{href:"#",className:"navbar-link",children:"Home"}),Object(j.jsx)("span",{className:"navbar-link",onClick:this.scrollToProjectSection,children:"Projects"}),Object(j.jsx)("span",{className:"navbar-link",onClick:this.scrollToServicesSection,children:"Services"}),Object(j.jsx)("span",{className:"navbar-link",onClick:this.scrollToContactSection,children:"Contact"})]}),Object(j.jsx)(h,{ref:this.homeRef,scrollToProjects:this.scrollToProjectSection}),Object(j.jsx)("hr",{}),Object(j.jsx)("section",{ref:this.projectSectionRef,className:"section-3",children:Object(j.jsx)(v,{images:this.state.images})}),Object(j.jsx)("hr",{}),Object(j.jsx)("section",{ref:this.servicesRef,className:"section-4",children:Object(j.jsx)(N,{})}),Object(j.jsx)("hr",{}),Object(j.jsx)("section",{ref:this.contactRef,className:"section-5 center",children:Object(j.jsx)(g,{})})]})]})}}]),c}(i.a.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),R()}],[[22,1,2]]]);
//# sourceMappingURL=main.aa0d4903.chunk.js.map