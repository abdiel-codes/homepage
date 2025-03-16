import "../stylesheets/Nav.css";
import NavButton from "./NavButton";

function Nav(props) {
    const navigateTo = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({behavior:"smooth"});
    };

    return (
        <div className="navigation-container">
            <div className="first-section">
                <p>Logo</p>
                <p>Name</p>
            </div>
            <div className="second-section">
                <NavButton
                    class = "home-button button"
                    name = "#Home"
                    link = {() => navigateTo("home")}
                />

                <NavButton
                    class = "about-me-button button"
                    name = "#About-me"
                    link = {() => navigateTo("about-me")}
                />

                <NavButton
                    class = "projects-button button"
                    name = "#Projects"
                    link = {() => navigateTo("projects")}
                />

                <NavButton
                    class = "skills-button button"
                    name = "#Skills"
                    link = {() => navigateTo("skills")}
                />

                <NavButton
                    class = "contact-button button"
                    name = "#Contact"
                    link = {() => navigateTo("contact")}
                />
            </div>
        </div>
    );
};

export default Nav;