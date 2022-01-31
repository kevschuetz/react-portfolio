import React from "react"
import img1 from "./projects/project-1.jpg"
import img1_1 from "./projects/project-1-big.jpg"
import img2 from "./projects/project-2.jpg"
import img2_1 from "./projects/project-2-big.jpg"
import img3 from "./projects/project-3.jpg"
import img3_1 from "./projects/project-3-big.jpg"
import img4 from "./projects/project-4.jpg"
import img4_1 from "./projects/project-4-big.jpg"
import img5 from "./projects/project-5.jpg"
import img5_1 from "./projects/project-5-big.jpg"
import './projects.styles.css'
import Project from "./../project/project.component"


class Projects extends React.Component{
  container;
  projectHideBtn;

  constructor(){
    super()

    this.state = {
      images: [
        {id: 1, img: img1, img_big: img1_1},
        {id: 2, img: img2, img_big: img2_1},
        {id: 3, img: img3, img_big: img3_1},
        {id: 4, img: img4, img_big: img4_1},
        {id: 5, img: img5, img_big: img5_1}
      ],

  }
  this.handleProjectClick = this.handleProjectClick.bind(this);
  this.clickedClose = this.clickedClose.bind(this);
}

componentDidMount(){
  this.container = document.querySelector(".container");
  this.projectHideBtn = document.querySelector(".project-hide-btn")

}
/*
Handles a click on the project:
creates an image wrapper div elemente and appends it to the document,
then creates the image on the fly and appends it to the wrapper
*/
handleProjectClick(id){
  this.bigImgWrapper = document.createElement("div");
  this.bigImgWrapper.className = "project-img-wrapper";
  this.container.appendChild(this.bigImgWrapper);

  let bigImg = document.createElement("img");
  bigImg.className = "project-img";
  let bigImgPath = this.state.images.filter(item => item.id === id)[0].img_big;

  bigImg.setAttribute("src", bigImgPath)
  this.bigImgWrapper.appendChild(bigImg);

  document.body.style.overflowY = "hidden"

  this.projectHideBtn.classList.add("change");
}

clickedClose(e){
    e.target.classList.remove("change");
    console.log(e.target.parentElement)
    this.bigImgWrapper.remove();
    document.body.style.overflowY = "scroll";
}

  render(){
    return(
<div>
    <h1 className='section-3-heading'>My work</h1>
    <div className="projects center">
      {
        this.state.images.map((image) => (
          <Project key="{image.id}" id={image.id} img={image.img} onClick={this.handleProjectClick}></Project>
        )
        )
      }
    </div>
    <button className="project-hide-btn" onClick={this.clickedClose}>&laquo;Close</button>
</div>

    )
  }

}

export default Projects;