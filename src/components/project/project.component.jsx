import React from "react";
import './project.styles.css'

const Project = props => (
      <div className="project" onMouseEnter={projectEntered} onMouseLeave={projectLeft} onClick={() => props.onClick(props.id)}>
        <img src={props.img} alt="" />
      </div>
)


const projectEntered = e => {
    if(e.target && e.target.firstElementChild){
        e.target.firstElementChild.style.top = `-${e.target.firstElementChild.offsetHeight - e.target.offsetHeight +20}px`
    }
}

const projectLeft = e => {
    if(e.target.firstElementChild){
        e.target.firstElementChild.style.top = "2rem";
    }
}

export default Project;