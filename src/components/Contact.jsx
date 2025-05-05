import { useState } from "react";
import "../stylesheets/Contact.css";


function Contact() {
    const email = "abdiel.dev@racoon.studio";
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="contact-container">
            <div className="contact-info-container">
                <div className="contact-text">
                    I'm open to both full-time and freelance opportunities.  
                    If you have a project, a job offer, or just a question, feel free to reach out.
                </div>
                <div className="contact-card">
                    <p>Get in touch</p>
                    <div className="contact-icon-container">
                        <div className="icon-text">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 122.88 78.607" 
                                fill="currentColor" 
                                className="icon-envelope"
                                width="24" 
                                height="24"
                            >
                                <path d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992Z M1.401,0l59.656,59.654L120.714,0H1.401Z M0,69.673l31.625-31.628L0,6.42V69.673Z M122.88,72.698L88.227,38.045L122.88,3.393V72.698Z"/>
                            </svg>
                            <p>{email}</p>
                            <button className="copy-button" onClick={copyToClipboard}>
                                {copied ? "Copied!" : 
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512" 
                                        width="1rem"
                                        fill="#ECF39E"
                                    >
                                        <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h140.1L400 115.9V320c0 8.8-7.2 16-16 16zm-192 48h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64zm-128-256c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h32v-48H64z"/>
                                    </svg>
                                }
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
