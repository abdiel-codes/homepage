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
                    symbol = "#"
                    name = "Home"
                    link = {() => navigateTo("home")}
                />

                <NavButton
                    class = "about-me-button button"
                    symbol = "#"
                    name = "About-me"
                    link = {() => navigateTo("about-me")}
                />

                <NavButton
                    class = "projects-button button"
                    symbol = "#"
                    name = "Projects"
                    link = {() => navigateTo("projects")}
                />

                <NavButton
                    class = "skills-button button"
                    symbol = "#"
                    name = "Skills"
                    link = {() => navigateTo("skills")}
                />

                <NavButton
                    class = "contact-button button"
                    symbol = "#"
                    name = "Contact"
                    link = {() => navigateTo("contact")}
                />
            </div>

        </div>
    );
};

export default Nav;