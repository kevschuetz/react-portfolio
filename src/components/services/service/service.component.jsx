import React from "react";
import './service.styles.css'

/**
 * Displays one service/ competence
 * @param {} props 
 * @returns 
 */
const Service = props => (
    <div className="service">
        <a href="#" className="service-btn" onClick={serviceBtnClicked}>
            <span>{props.service.heading}</span>
        </a>
        <p className="service-text">{props.service.text}</p>
    </div>
)

export default Service;

/**
 * Makes the service text visible and moves the heading to the left and vice versa
 * @param {*} e 
 */
const serviceBtnClicked = (e) => {
    // prevents default behaviour of the button click on the a element
    e.preventDefault();

    // Toggles the change class on the p-element with the service-text
    const serviceText = e.target.parentElement.nextElementSibling;
    serviceText.classList.toggle("change");

    // Calculates the right position of the heading by checking if the change class is currently assigned   
    const rightPosition = serviceText.classList.contains('change') ? `calc(100% - ${getComputedStyle(e.target).width})` : 0;

    // Sets the new right position on the heading
    e.target.style.right = rightPosition;
}