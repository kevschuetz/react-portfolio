import {Component} from 'react';
import designerImg from './images/designer.jpg'
import Projects from '../projects/projects.component';
import './landing-page.styles.css';


export class LandingPage extends Component {
  mainButton;
  ripple;
  
  constructor(){
    super()
    this.state={
      title: "Kevin"
    }
  }

  componentDidMount(){
    this.mainButton=document.querySelector(".main-btn");
  }

  render(){
  return (
        <div>
        {/* <!-- Mouse Circle and Dot --> */}
        <div className="mouse-circle"></div>
        <div className="mouse-dot"></div>

        {/* <!-- Page COntainer -->*/}
        <div className="container">
          {/* <!-- Page BG  --> */}
          <div className="page-bg"></div>
          {/* <!--End ofPage BG --> */}

          {/* <!--  Section 1 --> */}
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
              <img src={designerImg} className="resize" alt="designer"></img>
            </div>
            {/* <!-- End of Animated Circles --> /*}
        {/* <!-- Featured Text  --> */}
            <h4 className="featured-text featured-text-1">Software</h4>
            <h4 className="featured-text featured-text-2">Developer</h4>

            {/* <!-- End of Featured Text --> */}

            {/* <!-- Main-Button --> */}
            <div>

            </div>
            <div className="main-btn" onMouseEnter={this.hoveredMainBtn} onMouseLeave={this.leftmainBtn} >
              <div className="main-btn-content center" >
                <div className="main-btn-line"></div>
                <div className="main-btn-line"></div>
                <div className="main-btn-line"></div>
                <span>Projects</span>
              </div>
            </div>
            {/* <!-- End of Main-Button --> */}
          </div>
          {/* <!-- End of Section 1--> */}
          {/* <!-- Section 3--> */}
          <section className='section-3'>
              <Projects ></Projects> 
          </section>
          {/* <!-- End of Section 3--> */}
        </div>
        {/* <!--  End of Page Container --> */}
        </div>
    );

  }

  hoveredMainBtn = e =>{
    const left = e.clientX - e.target.getBoundingClientRect().left;  
    const top = e.clientY - e.target.getBoundingClientRect().top;  
  
    this.ripple = document.createElement('div');
    this.ripple.classList.add("ripple");
    this.ripple.style.left = `${left}px`;
    this.ripple.style.top = `${top}px`;
    this.mainButton.prepend(this.ripple);
  }


  leftmainBtn = e => {
    this.mainButton.removeChild(this.ripple)
  }

}
