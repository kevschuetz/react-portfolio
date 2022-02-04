import React from "react";
import './contact.styles.css'


class Contact extends React.Component{
    formHeading;

    constructor(){
        super();

        this.focusedInput = this.focusedInput.bind(this);
        this.unfocusedInput = this.unfocusedInput.bind(this);
    }

    componentDidMount(){
        this.formHeading = document.querySelector(".form-heading");
    }

    focusedInput(e){
        this.formHeading.style.opacity="0";
        setTimeout(() =>{
            this.formHeading.textContent = `Your ${e.target.placeholder}`;
            this.formHeading.style.opacity = "1";
        }, 350);
    }

    unfocusedInput(e){
        this.formHeading.style.opacity="0";
        setTimeout(() =>{
            this.formHeading.textContent = "Let's Talk";
            this.formHeading.style.opacity = "1";
        }, 350);
    }

    render(){
        return (
            <div className="contact-me-container">
                <h1 className="section-heading">Contact Me</h1>
                <div className="form-wrapper">
                    <h2 className="form-heading">Let's Talk</h2>
                    <form method="POST" action="https://formspree.io/f/mknyjqwr" className="contact-form center">
                        {/* <!-- Formspree configuration --> */}
                        {/* <!-- End of Formspree configuration --> */}
                        <input name="Name" type="text" className="contact-form-input" placeholder="Name" onMouseLeave={this.unfocusedInput} onMouseEnter={this.focusedInput}/>
                        <input name="E-Mail" type="email" className="contact-form-input" placeholder="E-Mail" onMouseLeave={this.unfocusedInput} onMouseEnter={this.focusedInput}/>
                        <input name="Subject" type="text" className="contact-form-input" placeholder="Subject" onMouseLeave={this.unfocusedInput} onMouseEnter={this.focusedInput}/>
                        <textarea name="Message" class="contact-form-input contact-form-textarea" placeholder="Message" onMouseLeave={this.unfocusedInput} onMouseEnter={this.focusedInput}></textarea>
                        <input type="submit" className="form-submit-btn" value="Send Request" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;