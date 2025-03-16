import "../stylesheets/Contact.css";

function Contact() {
    return(
        <div className="contact-container">
            <div className="contact-text">
                I'm interested in freelance opportunities.
                However, if you have other request or question, don't hestitate to contact me
            </div>
            <div className="contact-card">
                <p>Contact me here</p>
                <div className="contact-icon-container">
                    <div className="icon-text">
                        <p>icon</p>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;