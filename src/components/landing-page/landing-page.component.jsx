import React from 'react'
import designerImg from './images/designer.jpg'
import designerImg2 from './images/designer2-large.jpg'

import './landing-page.styles.css';

/**
 * The Landing Page
 */
export class LandingPage extends React.Component {
  mainButton;
  ripple;

  
  componentDidMount(){
    this.mainButton=document.querySelector(".main-btn");
  }

  /**
   * 
   * @returns The landing page
   */
  render(){
  return (
        <div>
          <div className="section-1 center">
            {/* <!-- Logo --> */}
            <span className="logo">
              Kevin Schütz
            </span>
            {/* <!-- End of Logo --> */}
            {/* <!-- Animated CIrcles  --> */}
            <div className="circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
            </div>
            <div className="main-circle center">
              <img src={designerImg2} className="resize" alt="designer"></img>
            </div>
            {/* <!-- End of Animated Circles --> /*}

            {/* <!-- Featured Text  --> */}
            <h4 className="featured-text featured-text-1">Software</h4>
            <h4 className="featured-text featured-text-2">Developer</h4>
            {/* <!-- End of Featured Text --> */}

            {/* <!-- Main-Button --> */}
            <div className="main-btn" onClick={this.props.scrollToProjects} onMouseEnter={this.hoveredMainBtn} onMouseLeave={this.leftmainBtn} >
              <div className="main-btn-content center" >
                <div className="main-btn-line"></div>
                <div className="main-btn-line"></div>
                <div className="main-btn-line"></div>
                <span>Projects</span>
              </div>
            </div>
            {/* <!-- End of Main-Button --> */}
          </div>
        </div>
    );

  }

  /**
   * Adds a ripple when hovering the main button effect by creating a new element
   * 
   * @param  e the event 
   */
  hoveredMainBtn = e =>{
    const left = e.clientX - e.target.getBoundingClientRect().left;  
    const top = e.clientY - e.target.getBoundingClientRect().top;  
  
    this.ripple = document.createElement('div');
    this.ripple.classList.add("ripple");
    this.ripple.style.left = `${left}px`;
    this.ripple.style.top = `${top}px`;
    this.mainButton.prepend(this.ripple);
  }

  /**
   * Removes the ripple effect div
   * @param {} e 
   */
  leftmainBtn = e => {
    this.mainButton.removeChild(this.ripple)
  }

}
