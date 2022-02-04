import './App.css';
import React from 'react';
import { LandingPage } from './components/landing-page/landing-page.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Services from './components/services/services.component';
import img1 from "./images/projects/project-1.jpg"
import img1_1 from "./images/projects/project-1-big.jpg"
import img2 from "./images/projects/project-2.jpg"
import img2_1 from "./images/projects/project-2-big.jpg"
import img3 from "./images/projects/project-3.jpg"
import img3_1 from "./images/projects/project-3-big.jpg"


/**
 * Super-Component handling 
 * the mouse-circle and mouse dot animations as well as the circle-animations
 */
class App extends React.Component{
  circles;
  mainCircle;
  mouseCircle;
  mouseCircleBool;
  mouseDot;
  mX;
  mY;
  z;
  
  projectSectionRef;
  constructor(){
    super()

    this.mX = 0;
    this.mY = 0;
    this.z = 100;

    this.projectSectionRef = React.createRef();
    this.scrollToProjectSection = this.scrollToProjectSection.bind(this);

    this.state={
      images:[
        {id: 1, img: img1, img_big: img1_1},
        {id: 2, img: img2, img_big: img2_1},
        {id: 3, img: img3, img_big: img3_1},
      ]

    }
  }
  /**
   * Assigns the necessary elements from the document for the event handlers
   */
  componentDidMount(){
    this.circles = document.querySelectorAll(".circle")
    this.mainCircle = document.querySelector(".main-circle")
    this.mouseCircle = document.querySelector(".mouse-circle");
    this.mouseDot = document.querySelector(".mouse-dot");
    this.mouseCircleBool = true;
  }

  scrollToProjectSection = () => this.projectSectionRef.current.scrollIntoView();
  /**
   * Attaches the mouse-movement listener to the outermost element and wraps the landing-page
   * which contains all other sections
   * TODO: maybe restructure
   * @returns 
   */
  render(){
    return(
    <div className="App" onMouseMove={this.mouseMoved}>
        {/* <!-- Mouse Circle and Dot --> */}
        <div className="mouse-circle"></div>
        <div className="mouse-dot"></div>

        {/* <!-- Page Container -->*/}
        <div className="container">

          {/* <!-- Page BG  --> */}
          <div className="page-bg"></div>
          {/* <!--End ofPage BG --> */}

          {/* <!--  Section 1 --> */}
          <LandingPage scrollToProjects={this.scrollToProjectSection}></LandingPage> 
          {/* <!-- End of Section 1--> */}
          <hr></hr>
          {/* <!-- Section 3--> */}
          <section ref={this.projectSectionRef} className='section-3'>
            <Projects images={this.state.images}></Projects> 
          </section>
          {/* <!-- End of Section 3--> */}
          <hr></hr>
          {/* <!-- Section 4 --> */}
          <section className='section-4'>
            <Services></Services>
          </section>
          {/* <!-- End of Section 4--> */} 
          <hr></hr>
          {/* <!-- Section 5 --> */}
          <section className='section-5 center'>
            <Contact></Contact>
          </section>
          {/* <!-- End of Section 5--> */} 

        {/* <!--  End of Page Container --> */}
        </div>
    </div>
    )
  }
  /**
   * Moves the circles contrary to the mouse-movement
   * Sets the mouse-circle and dot elements to the position of the mouse
   * @param {} e 
   */
  mouseMoved = (e) => {
  // Circle movement
  if (e.clientX < this.mX) {
    this.circles.forEach((circle) => {
      circle.style.left = `${this.z}px`;
    });
  } else if (e.clientX > this.mX) {
    this.circles.forEach((circle) => {
      circle.style.left = `-${this.z}px`;
    });
  }

  if (e.clientY < this.mY) {
    this.circles.forEach((circle) => {
      circle.style.top = `${this.z}px`;
    });
  } else if (e.clientY > this.mY) {
    this.circles.forEach((circle) => {
      circle.style.top = `-${this.z}px`;
    });
  }

  this.mX = e.clientX;
  this.mY = e.clientY;

  // MouseCircle and Dot repositioning
  this.mouseCircleBool &&
    (this.mouseCircle.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px; opacity: 1`);

  this.mouseDot.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px; opacity: 1`;
}
}

export default App;
