import "../stylesheets/Header.css";

function Header() {
    return (
        <div className="header-container">
            <div className="text-container">
                <h1 className="title">
                    My name is Abdiel and i'm a full-stack developer
                </h1>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellendus id voluptatem nisi iusto molestiae quas ab accusantium. Omnis magni accusamus aliquam tempore? Cumque quis perspiciatis quaerat eaque illo amet.
                </p>
            </div>
            <div className="photo-container">
                <p>A big photo</p>
            </div>
        </div>
    );
}

export default Header;