(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(8),o=c.n(s),r=(c(13),c(3)),a=c(4),l=c(6),d=c(5),m=(c(14),c(2)),j=c.p+"static/media/designer.ed4c86a5.jpg",u=c.p+"static/media/project-1.ab35d7df.jpg",p=c.p+"static/media/project-1-big.25ab46ea.jpg",b=c.p+"static/media/project-2.09e43d02.jpg",h=c.p+"static/media/project-2-big.b31ff267.jpg",f=c.p+"static/media/project-3.0d7f268b.jpg",g=c.p+"static/media/project-3-big.a1c6841f.jpg",v=(c(15),c(16),c(0)),x=function(e){e.target&&e.target.firstElementChild&&(e.target.firstElementChild.style.top="-".concat(e.target.firstElementChild.offsetHeight-e.target.offsetHeight+20,"px"))},O=function(e){e.target.firstElementChild&&(e.target.firstElementChild.style.top="2rem")},C=function(e){return Object(v.jsx)("div",{className:"project",onMouseEnter:x,onMouseLeave:O,onClick:function(){return e.onClick(e.id)},children:Object(v.jsx)("img",{src:e.img,alt:""})})},y=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={images:[{id:1,img:u,img_big:p},{id:2,img:b,img_big:h},{id:3,img:f,img_big:g}]},e.handleProjectClick=e.handleProjectClick.bind(Object(m.a)(e)),e.clickedClose=e.clickedClose.bind(Object(m.a)(e)),e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){this.container=document.querySelector(".container"),this.projectHideBtn=document.querySelector(".project-hide-btn")}},{key:"handleProjectClick",value:function(e){this.bigImgWrapper=document.createElement("div"),this.bigImgWrapper.className="project-img-wrapper",this.container.appendChild(this.bigImgWrapper);var t=document.createElement("img");t.className="project-img";var c=this.state.images.filter((function(t){return t.id===e}))[0].img_big;t.setAttribute("src",c),this.bigImgWrapper.appendChild(t),document.body.style.overflowY="hidden",this.projectHideBtn.classList.add("change")}},{key:"clickedClose",value:function(e){e.target.classList.remove("change"),this.bigImgWrapper.remove(),document.body.style.overflowY="scroll"}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"section-heading",children:"My work"}),Object(v.jsx)("div",{className:"projects center",children:this.state.images.map((function(t){return Object(v.jsx)(C,{id:t.id,img:t.img,onClick:e.handleProjectClick},"{image.id}")}))}),Object(v.jsx)("button",{className:"project-hide-btn",onClick:this.clickedClose,children:"\xabClose"})]})}}]),c}(n.a.Component),N=(c(18),function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).scrollToProjectSection=function(){return e.projectSectionRef.current.scrollIntoView()},e.hoveredMainBtn=function(t){var c=t.clientX-t.target.getBoundingClientRect().left,i=t.clientY-t.target.getBoundingClientRect().top;e.ripple=document.createElement("div"),e.ripple.classList.add("ripple"),e.ripple.style.left="".concat(c,"px"),e.ripple.style.top="".concat(i,"px"),e.mainButton.prepend(e.ripple)},e.leftmainBtn=function(t){e.mainButton.removeChild(e.ripple)},e.state={title:"Kevin"},e.projectSectionRef=n.a.createRef(),e.scrollToProjectSection=e.scrollToProjectSection.bind(Object(m.a)(e)),e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){this.mainButton=document.querySelector(".main-btn")}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"mouse-circle"}),Object(v.jsx)("div",{className:"mouse-dot"}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"page-bg"}),Object(v.jsxs)("div",{className:"section-1 center",children:[Object(v.jsx)("span",{className:"logo",children:"Kevin Sch\xfctz"}),Object(v.jsxs)("div",{className:"circles",children:[Object(v.jsx)("div",{className:"circle circle-1"}),Object(v.jsx)("div",{className:"circle circle-2"}),Object(v.jsx)("div",{className:"circle circle-3"}),Object(v.jsx)("div",{className:"circle circle-4"})]}),Object(v.jsx)("div",{className:"main-circle center",children:Object(v.jsx)("img",{src:j,className:"resize",alt:"designer"})}),Object(v.jsx)("h4",{className:"featured-text featured-text-1",children:"Software"}),Object(v.jsx)("h4",{className:"featured-text featured-text-2",children:"Developer"}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{className:"main-btn",onClick:this.scrollToProjectSection,onMouseEnter:this.hoveredMainBtn,onMouseLeave:this.leftmainBtn,children:Object(v.jsxs)("div",{className:"main-btn-content center",children:[Object(v.jsx)("div",{className:"main-btn-line"}),Object(v.jsx)("div",{className:"main-btn-line"}),Object(v.jsx)("div",{className:"main-btn-line"}),Object(v.jsx)("span",{children:"Projects"})]})})]}),Object(v.jsx)("section",{ref:this.projectSectionRef,className:"section-3",children:Object(v.jsx)(y,{})})]})]})}}]),c}(i.Component)),k=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).mouseMoved=function(t){t.clientX<e.mX?e.circles.forEach((function(t){t.style.left="".concat(e.z,"px")})):t.clientX>e.mX&&e.circles.forEach((function(t){t.style.left="-".concat(e.z,"px")})),t.clientY<e.mY?e.circles.forEach((function(t){t.style.top="".concat(e.z,"px")})):t.clientY>e.mY&&e.circles.forEach((function(t){t.style.top="-".concat(e.z,"px")})),e.mX=t.clientX,e.mY=t.clientY,e.mouseCircleBool&&(e.mouseCircle.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")),e.mouseDot.style.cssText="top: ".concat(t.clientY,"px; left: ").concat(t.clientX,"px; opacity: 1")},e.mX=0,e.mY=0,e.z=100,e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){this.circles=document.querySelectorAll(".circle"),this.mainCircle=document.querySelector(".main-circle"),this.mouseCircle=document.querySelector(".mouse-circle"),this.mouseDot=document.querySelector(".mouse-dot"),this.mouseCircleBool=!0}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",onMouseMove:this.mouseMoved,children:Object(v.jsx)(N,{})})}}]),c}(i.Component),S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),i(e),n(e),s(e),o(e)}))};o.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.e8d74448.chunk.js.map