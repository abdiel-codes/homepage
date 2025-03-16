import "../stylesheets/Title.css";

function Title(props) {
    return (
        <div className="title-container">
            <div className="section-name">
                <h1 className="tile-me">{props.text}</h1>
                <hr />
            </div>
        </div>
    );
}

export default Title;