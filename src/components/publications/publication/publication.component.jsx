import React, { useState } from 'react';
import './publication.component.css';

const Paper = ({ title, authors, series, year, abstract, doi, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="paper">
            <a href="#" className="paper-btn" onClick={paperBtnClicked}>
                <span>{title}</span>
            </a>
            <p className="paper-text">{authors.join(', ')}. {year}, {series}. <a href={link} target="_blank">{doi}</a></p>
        </div>
    );
};

export default Paper;
const paperBtnClicked = (e) => {
    // prevents default behaviour of the button click on the a element
    e.preventDefault();

    // Toggles the change class on the p-element with the service-text
    const paperText = e.target.parentElement.nextElementSibling;
    paperText.classList.toggle("change");

    // Calculates the right position of the heading by checking if the change class is currently assigned   
    const rightPosition = paperText.classList.contains('change') ? 0 : `calc(100% - ${getComputedStyle(e.target).width})` ;

    // Sets the new right position on the heading
    e.target.style.right = rightPosition;
}
