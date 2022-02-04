import React from "react";
import './project.styles.css'
/**
 * Functional Component for a project
 * @param {} props the props from the parent component holding the image
 * @returns 
 */
const Project = props => (
      <div className="project" onMouseEnter={projectEntered} onMouseLeave={projectLeft} onClick={() => props.onClick(props.id)}>
        <img src={props.img} alt="" />
      </div>
)

/**
 * Scrolls down the image when entering the project element
 * @param {*} e 
 */
const projectEntered = e => {
    if(e.target && e.target.firstElementChild){
        e.target.firstElementChild.style.top = `-${e.target.firstElementChild.offsetHeight - e.target.offsetHeight +20}px`
    }
}

/**
 * Scrolls the image back when leaving the project element
 * @param {} e 
 */
const projectLeft = e => {
    if(e.target.firstElementChild){
        e.target.firstElementChild.style.top = "2rem";
    }
}

export default Project;