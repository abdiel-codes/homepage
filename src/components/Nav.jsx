import "../stylesheets/Nav.css";

function Nav(props) {
    return (
        <div className="navigation-container">
            <div className="first-section">
                <p>Logo</p>
                <p>Name</p>
            </div>
            <div className="second-section">
                <p>#Home</p>
                <p>#About-me</p>
                <p>#Projects</p>
                <p>#Skills</p>
                <p>#Contacts</p>
            </div>
        </div>
    );
};

export default Nav;