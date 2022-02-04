import React from "react";
import './services.styles.css'
import services from "./services-data";
import Service from "./service/service.component";

/**
 * Class Component for the services
 */
class Services extends React.Component{
    services;

    constructor(){
        super();
        this.services=services;
    }
    render(){

        return (
            <div className="services-container">
                <h1 className="section-heading">What I can</h1>
                <div className="services-wrapper center">
                {
                    services.map(service => (
                        <Service key="{service.id}" service={service}></Service>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Services;