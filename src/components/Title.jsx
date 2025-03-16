import "../stylesheets/Title.css";

function Title(props) {
    return (
        <div className="title-container">
            <div className="title-name">
                <h1 className="title-me"><span>{props.symbol}</span>{props.text}</h1>
                <hr />
            </div>
        </div>
    );
}

export default Title;