import React from "react"
import './projects.styles.css'
import Project from "./project/project.component"

/**
 * The section displaying the projects
 */
class Projects extends React.Component{
  container;
  projectHideBtn;

  /**
   * Initializes the state with the project images and binds the methods
   */
  constructor(){
    super()

 
    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.clickedClose = this.clickedClose.bind(this);
}

/**
 * Assigns the container of the whole page and the button to close an enlarged image for the event listeners
 */
componentDidMount(){
  this.container = document.querySelector(".container");
  this.projectHideBtn = document.querySelector(".project-hide-btn")

}
/*
Handles a click on the project:
creates an image wrapper div elemente and appends it to the container,
then creates the image on the fly and appends it to the wrapper
*/
handleProjectClick(id){
  this.bigImgWrapper = document.createElement("div");
  this.bigImgWrapper.className = "project-img-wrapper";
  this.container.appendChild(this.bigImgWrapper);

  let bigImg = document.createElement("img");
  bigImg.className = "project-img";
  let bigImgPath = this.props.images.filter(item => item.id === id)[0].img_big;

  bigImg.setAttribute("src", bigImgPath)
  this.bigImgWrapper.appendChild(bigImg);

  document.body.style.overflowY = "hidden"

  this.projectHideBtn.classList.add("change");
}

/**
 * Handles a click on the project-hide-button by removing the wrapper for the big image from the document
 * and setting the overflowY style from the document back to sroll
 * @param {} e 
 */
clickedClose(e){
    e.target.classList.remove("change");
    this.bigImgWrapper.remove();
    document.body.style.overflowY = "scroll";
}
/**
 * Returns the Project section
 * @returns 
 */
  render(){
    return(
<div className="projects-container center">
    <h1 className='section-heading'>My work</h1>
    <div className="projects center">
      {
        this.props.images.map((image) => (
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