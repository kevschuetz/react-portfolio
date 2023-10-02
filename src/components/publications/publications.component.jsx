import React from 'react';
import Paper from './publication/publication.component';
import './publications.component.css';

class Publications extends React.Component {
    constructor(props) {
        super(props);
        // Assuming papersData is passed as a prop or can be imported
        this.papers = this.props.papersData;
        console.log(this.papers)
        //this.papers = []
    }

    render() {
        return (
            <div className="publications-container">
                <h1 className="section-heading">Papers</h1>
                <div className="papers-wrapper center">
                    {this.papers.map((paper, index) => (
                        <Paper key={index} {...paper} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Publications;
