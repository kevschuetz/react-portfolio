import React from "react"
import img1 from "./projects/project-1.jpg"
import img2 from "./projects/project-2.jpg"
import img3 from "./projects/project-3.jpg"
import img4 from "./projects/project-4.jpg"
import img5 from "./projects/project-5.jpg"
import img6 from "./projects/project-6.jpg"
import img7 from "./projects/project-7.jpg"
import './projects.styles.css'
import Project from "./../project/project.component"
import { Component } from "react/cjs/react.development"

export class Projects extends Component{

  constructor(){
    super()

    this.state = {
      images: [
        {id: 1, img: img1},
        {id: 2, img: img2},
        {id: 3, img: img3},
        {id: 4, img: img4},
        {id: 5, img: img5}
      ]
  }
}

  render(){
    return(
<div>
    <h1 className='section-3-heading'>My work</h1>
    <div className="projects center">
      {
        this.state.images.map((image) => (
          <Project key="{image.id}" img={image.img}></Project>
        )
        )
      }
    </div>
</div>

    )
  }

}

export default Projects;