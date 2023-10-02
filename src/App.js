import './App.css';
import React from 'react';
import { LandingPage } from './components/landing-page/landing-page.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Services from './components/services/services.component';
import Publications from './components/publications/publications.component';
import img1 from "./images/projects/project-1.jpg"
import img1_1 from "./images/projects/project-1-big.jpg"
import img2 from "./images/projects/project-2.jpg"
import img2_1 from "./images/projects/project-2-big.jpg"
import img3 from "./images/projects/project-3.jpg"
import img3_1 from "./images/projects/project-3-big.jpg"
import img4 from "./images/projects/project-4.jpg"
import img4_1 from "./images/projects/project-4-big.jpg"
import img5 from "./images/projects/project-5.jpg"
import img5_1 from "./images/projects/project-5-big.jpg"
import img6 from "./images/projects/project-6.jpg"
import img6_1 from "./images/projects/project-6-big.jpg"
import cv from './public/CV.pdf';



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
  menuIcon;
  navBar;

  mX;
  mY;
  z;
  
  projectSectionRef;
  publicationSectionRef;
  servicesRef;
  contactRef;
  homeRef;
  constructor(){
    super()

    this.mX = 0;
    this.mY = 0;
    this.z = 100;

    this.projectSectionRef = React.createRef();
    this.publicationSectionRef = React.createRef();
    this.servicesRef = React.createRef();
    this.contactRef = React.createRef();
    this.homeRef = React.createRef();

    this.scrollToProjectSection = this.scrollToProjectSection.bind(this);
    //this.scrollToPublicationSection = this.scrollToPublicationSection.bind(this);

    this.state={
      images:[
        {id: 1, img: img1, img_big: img1_1},
        {id: 2, img: img2, img_big: img2_1},
        {id: 3, img: img3, img_big: img3_1},
        {id: 4, img: img4, img_big: img4_1},
        {id: 6, img: img6, img_big: img6_1}
      ],
      papersData: [
      {
        title: 'Privacy-Preserving Implementation of Local Search Algorithms for Collaboratively Solving Assignment Problems in Time-Critical Contexts',
        authors: ['Kevin Schuetz', 'Christoph G. Schuetz', 'Samuel Jaburek'],
        series: '2023 IEEE Congress on Evolutionary Computation (CEC)',
        year: '2023',
        abstract: 'Solving real-world optimization problems often requires collaboration among multiple stakeholders. In air traffic flow management, for example, airlines must work together to prioritize individual flights in cases of reduced capacity in the air traffic network. However, when diverse parties are required to share sensitive information to collaboratively conduct optimization, trust becomes an issue. To alleviate those issues, privacy-preserving computation can be utilized to protect the confidential information of participants, which comes with a trade-off in terms of runtime performance. In time-critical contexts, privacy-preserving implementations of deterministic optimization algorithms may not be able to produce a result before the deadline. In this paper, we investigate the effectiveness of using variants of local search algorithms for the search of solutions to an optimization problem in conjunction with multi-party computation for the evaluation of those solutions. We argue that the proposed method using local search algorithms achieves good results in terms of the quality of the found solution while considerably reducing the run time with respect to a privacy-preserving deterministic solution.',
        doi: '10.1109/CEC53210.2023.10253978',
        link: 'https://ieeexplore.ieee.org/document/10253978'
      },
      {
        title: 'Privacy-Preserving Implementation of an Auction Mechanism for ATFM Slot Swapping',
        authors: ['Paul Feichtenschlager', 'Kevin Schuetz', 'Christoph G. Schuetz', 'Eduard Gringinger'],
        series: '2023 Integrated Communication, Navigation and Surveillance Conference (ICNS)',
        year: '2023',
        abstract: 'Air traffic flow management (ATFM) regulations issued by the EUROCONTROL Network Manager (NM) during periods of reduced capacity in the European air traffic network typically result in flight delays and additional costs for airspace users (AUs). However, not all flights are equally impacted by these regulations, and AUs would like to prioritize flights based on their preferences while protecting the confidentiality of such information. Thus, in the SlotMachine project, we proposed a privacy-preserving marketplace for collaborative optimization of flight lists during ATFM regulations An auction mechanism incentivizes AUs to participate in the SlotMachine’s optimization runs. The proposed implementation of the auction mechanism in a privacy-preserving manner employs a genetic algorithm in combination with multi-party computation (MPC), since a privacy-preserving implementation of a deterministic algorithm would not finish within the time constraints. Experiments using realistic synthetic datasets based on real-world samples demonstrate feasibility of the proposed implementation.',
        doi: '10.1109/ICNS58246.2023.10124262',
        link: 'https://ieeexplore.ieee.org/document/10124262'
      },
      {
        title: 'A Distributed Architecture for Privacy-Preserving Optimization Using Genetic Algorithms and Multi-party Computation',
        authors: ['Christoph G. Schuetz', 'Thomas Lorünser', 'Samuel Jaburek', 'Kevin Schuetz', 'Florian Wohner', 'Roman Karl', 'Eduard Gringinger '],
        series: 'LNCS, volume 13591',
        year: '2022',
        abstract: 'In many industries, competitors are required to cooperate in order to conduct optimizations, e.g., to solve an assignment problem. For example, in air traffic flow management (ATFM), flight prioritization in case of temporarily reduced capacity of the air traffic network is an instance of the assignment problem. Participants, however, are typically reluctant to share sensitive information regarding their preferences for the optimization, which renders conventional approaches to optimization inadequate. This paper proposes a method for combining genetic algorithms with multi-party computation (MPC) as the basis for building a platform for optimizing the assignment of resources to different agents under the assumption of an honest-but-curious platform provider; the method is illustrated on the ATFM use case. In the proposed method a genetic algorithm iteratively generates a population of candidate solutions to the assignment problem while a Privacy Engine component evaluates the population in each iteration step. The participants’ private inputs are kept from competitors and not even the platform provider knows those inputs, receiving only encrypted input which is processed by MPC nodes in a way that preserves the secrecy of the inputs.',
        doi: '10.1007/978-3-031-17834-4_10',
        link: 'https://doi.org/10.1007/978-3-031-17834-4_10'
      }
        
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
    this.menuIcon = document.querySelector(".menu-icon");
    this.navBar = document.querySelector(".navbar");

    document.addEventListener("scroll", () => {
      console.log(this.navBar);
      console.log(this.menuIcon);

      this.menuIcon.classList.add("show-menu-icon");
      this.navBar.classList.add("hide-navbar");

      if(window.scrollY === 0){
        this.menuIcon.classList.remove("show-menu-icon");
        this.navBar.classList.remove("hide-navbar");
      }
    })
  }

  scrollToProjectSection = () => this.projectSectionRef.current.scrollIntoView();
  scrollToContactSection = () => this.contactRef.current.scrollIntoView();
  scrollToServicesSection = () => this.servicesRef.current.scrollIntoView();
  scrollToLandingSection = () => this.homeRef.current.scrollIntoView();
  scrollToPublicationSection = () => this.publicationSectionRef.current.scrollIntoView();
  downloadCV = () => {
    console.log("Downloading..")
    const link = document.createElement('a');
    link.href = {cv};
    link.download = 'Your_File_Name.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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

          <div className="menu-icon center" onClick={this.onMenuItemClick}> 
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
          <nav className="navbar">
            <a href="#" className='navbar-link'>Home</a>     
            <span className='navbar-link' onClick={this.scrollToProjectSection}>Projects</span>     
            <span className='navbar-link' onClick={this.scrollToPublicationSection}>Publications</span>     
            <span className='navbar-link' onClick={this.scrollToServicesSection}>Skills</span>     
            <span className='navbar-link' onClick={this.scrollToContactSection}>Contact</span>  
            <span className='navbar-link' onClick={this.downloadCV}>CV</span>     
          </nav>


          {/* <!--  Section 1 --> */}
          <LandingPage ref={this.homeRef} scrollToProjects={this.scrollToProjectSection}></LandingPage> 
          {/* <!-- End of Section 1--> */}

          <hr></hr>

          {/* <!-- Section 3--> */}
          <section ref={this.projectSectionRef} className='section-3'>
            <Projects images={this.state.images}></Projects> 
          </section>
          {/* <!-- End of Section 3--> */}

          <hr></hr>
          {/* <!-- Section 6--> */}
          <section ref={this.publicationSectionRef} className='section-6'>
           <Publications papersData={this.state.papersData} />
          </section>
          {/* <!-- End of Section 6--> */}

          <hr></hr>

          {/* <!-- Section 4 --> */}
          <section ref={this.servicesRef} className='section-4'>
            <Services></Services>
          </section>
          {/* <!-- End of Section 4--> */} 

          <hr></hr>

          {/* <!-- Section 5 --> */}
          <section ref={this.contactRef} className='section-5 center'>
            <Contact></Contact>
          </section>
          {/* <!-- End of Section 5--> */} 

        {/* <!--  End of Page Container --> */}
        </div>
    </div>
    )
  }

  onMenuItemClick = e => {
      this.menuIcon.classList.remove("show-menu-icon");
      this.navBar.classList.remove("hide-navbar");
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
