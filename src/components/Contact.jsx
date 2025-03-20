import "../stylesheets/Contact.css";

function Contact() {
    return(
        <div className="contact-container">
            <div className="contact-text">
                I'm open to both full-time and freelance opportunities.  
                If you have a project, a job offer, or just a question, feel free to reach out.
            </div>
            <div className="contact-card">
                <p>Get in touch</p>
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