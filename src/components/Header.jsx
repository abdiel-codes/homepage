import "../stylesheets/Header.css";

function Header(props) {
    return (
        <div className="header-container" id = "home">
            <div className="text-container">
                <h1 className="title">
                    Hi, I'm <span>Abdiel Flores</span>, a <span>Full-Stack</span> Developer passionate about building <span>interactive</span> and <span>scalable applications.</span>  
                </h1>
                <p className="text">
                    Passionate about <span>coding</span> and <span>problem-solving</span>, I build <span>scalable</span> and <span>engaging</span> web experiences using modern technologies like <span>React</span> and <span>JavaScript</span>.
                </p>
            </div>
            <div className="photo-container">
                <p>A big photo</p>
            </div>
        </div>
    );
}

export default Header;