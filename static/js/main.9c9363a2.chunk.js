(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(8),r=c.n(s),a=(c(13),c(2)),o=c(3),l=c(6),d=c(5),j=c(4),m=(c(14),c.p+"static/media/designer.ed4c86a5.jpg"),u=(c(15),c(0)),p=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(a.a)(this,c);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).hoveredMainBtn=function(t){var c=t.clientX-t.target.getBoundingClientRect().left,i=t.clientY-t.target.getBoundingClientRect().top;e.ripple=document.createElement("div"),e.ripple.classList.add("ripple"),e.ripple.style.left="".concat(c,"px"),e.ripple.style.top="".concat(i,"px"),e.mainButton.prepend(e.ripple)},e.leftmainBtn=function(t){e.mainButton.removeChild(e.ripple)},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.mainButton=document.querySelector(".main-btn")}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"section-1 center",children:[Object(u.jsx)("span",{className:"logo",children:"Kevin Sch\xfctz"}),Object(u.jsxs)("div",{className:"circles",children:[Object(u.jsx)("div",{className:"circle circle-1"}),Object(u.jsx)("div",{className:"circle circle-2"}),Object(u.jsx)("div",{className:"circle circle-3"}),Object(u.jsx)("div",{className:"circle circle-4"})]}),Object(u.jsx)("div",{className:"main-circle center",children:Object(u.jsx)("img",{src:m,className:"resize",alt:"designer"})}),Object(u.jsx)("h4",{className:"featured-text featured-text-1",children:"Software"}),Object(u.jsx)("h4",{className:"featured-text featured-text-2",children:"Developer"}),Object(u.jsx)("div",{className:"main-btn",onClick:this.props.scrollToProjects,onMouseEnter:this.hoveredMainBtn,onMouseLeave:this.leftmainBtn,children:Object(u.jsxs)("div",{className:"main-btn-content center",children:[Object(u.jsx)("div",{className:"main-btn-line"}),Object(u.jsx)("div",{className:"main-btn-line"}),Object(u.jsx)("div",{className:"main-btn-line"}),Object(u.jsx)("span",{children:"Projects"})]})})]})})}}]),c}(n.a.Component),h=c.p+"static/media/project-1.ab35d7df.jpg",b=c.p+"static/media/project-1-big.25ab46ea.jpg",g=c.p+"static/media/project-2.09e43d02.jpg",f=c.p+"static/media/project-2-big.b31ff267.jpg",v=c.p+"static/media/project-3.0d7f268b.jpg",x=c.p+"static/media/project-3-big.a1c6841f.jpg",O=(c(17),c(18),function(e){e.target&&e.target.firstElementChild&&(e.target.firstElementChild.style.top="-".concat(e.target.firstElementChild.offsetHeight-e.target.offsetHeight+20,"px"))}),y=function(e){e.target.firstElementChild&&(e.target.firstElementChild.style.top="2rem")},C=function(e){return Object(u.jsx)("div",{className:"project",onMouseEnter:O,onMouseLeave:y,onClick:function(){return e.onClick(e.id)},children:Object(u.jsx)("img",{src:e.img,alt:""})})},N=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(a.a)(this,c),(e=t.call(this)).state={images:[{id:1,img:h,img_big:b},{id:2,img:g,img_big:f},{id:3,img:v,img_big:x}]},e.handleProjectClick=e.handleProjectClick.bind(Object(l.a)(e)),e.clickedClose=e.clickedClose.bind(Object(l.a)(e)),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.container=document.querySelector(".container"),this.projectHideBtn=document.querySelector(".project-hide-btn")}},{key:"handleProjectClick",value:function(e){this.bigImgWrapper=document.createElement("div"),this.bigImgWrapper.className="project-img-wrapper",this.container.appendChild(this.bigImgWrapper);var t=document.createElement("img");t.className="project-img";var c=this.state.images.filter((function(t){return t.id===e}))[0].img_big;t.setAttribute("src",c),this.bigImgWrapper.appendChild(t),document.body.style.overflowY="hidden",this.projectHideBtn.classList.add("change")}},{key:"clickedClose",value:function(e){e.target.classList.remove("change"),this.bigImgWrapper.remove(),document.body.style.overflowY="scroll"}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"projects-container",children:[Object(u.jsx)("h1",{className:"section-heading",children:"My work"}),Object(u.jsx)("div",{className:"projects center",children:this.state.images.map((function(t){return Object(u.jsx)(C,{id:t.id,img:t.img,onClick:e.handleProjectClick},"{image.id}")}))}),Object(u.jsx)("button",{className:"project-hide-btn",onClick:this.clickedClose,children:"\xabClose"})]})}}]),c}(n.a.Component),k=(c(19),[{id:1,heading:"Development",text:"Java - Backend, REST-Services (Spring Boot), Swing / Docker "},{id:2,heading:"Databases",text:"SQL - JDBC, JPA / RDF - SPARQL / XQuery / Datalog"},{id:3,heading:"UI",text:"Angular / React / Flask"}]),S=(c(20),function(e){return Object(u.jsxs)("div",{className:"service",children:[Object(u.jsx)("a",{href:"#",className:"service-btn",onClick:B,children:Object(u.jsx)("span",{children:e.service.heading})}),Object(u.jsx)("p",{className:"service-text",children:e.service.text})]})}),B=function(e){e.preventDefault();var t=e.target.parentElement.nextElementSibling;t.classList.toggle("change");var c=t.classList.contains("change")?"calc(100% - ".concat(getComputedStyle(e.target).width,")"):0;e.target.style.right=c},E=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(a.a)(this,c),(e=t.call(this)).services=k,e}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"services-container",children:[Object(u.jsx)("h1",{className:"section-heading",children:"What I can"}),Object(u.jsx)("div",{className:"services-wrapper center",children:k.map((function(e){return Object(u.jsx)(S,{service:e},"{service.id}")}))})]})}}]),c}(n.a.Component),M=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(a.a)(this,c),(e=t.call(this)).scrollToProjectSection=function(){return e.projectSectionRef.current.scrollIntoView()},e.mouseMoved=function(t){t.clientX<e.mX?e.circles.forEach((function(t){t.style.left="".concat(e.z,"px")})):t.clientX>e.mX&&e.circles.forEach((function(t){t.style.left="-".concat(e.z,"px")})),t.clientY<e.mY?e.circles.forEach((function(t){t.style.top="".concat(e.z,"px")})):t.clientY>e.mY&&e.circles.forEach((function(t){t.style.top="-".concat(e.z,"px")})),e.mX=t.clientX,e.mY=t.clientY,e.mouseCircleBool&&(e.mouseCircle.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")),e.mouseDot.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")},e.mX=0,e.mY=0,e.z=100,e.projectSectionRef=n.a.createRef(),e.scrollToProjectSection=e.scrollToProjectSection.bind(Object(l.a)(e)),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.circles=document.querySelectorAll(".circle"),this.mainCircle=document.querySelector(".main-circle"),this.mouseCircle=document.querySelector(".mouse-circle"),this.mouseDot=document.querySelector(".mouse-dot"),this.mouseCircleBool=!0}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",onMouseMove:this.mouseMoved,children:[Object(u.jsx)("div",{className:"mouse-circle"}),Object(u.jsx)("div",{className:"mouse-dot"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"page-bg"}),Object(u.jsx)(p,{scrollToProjects:this.scrollToProjectSection}),Object(u.jsx)("section",{ref:this.projectSectionRef,className:"section-3",children:Object(u.jsx)(N,{})}),Object(u.jsx)("section",{className:"section-4",children:Object(u.jsx)(E,{})})]})]})}}]),c}(i.Component),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),P()}],[[21,1,2]]]);
//# sourceMappingURL=main.9c9363a2.chunk.js.map