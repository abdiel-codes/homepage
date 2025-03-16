import "../stylesheets/Card.css";

function Card(props) {
    return (
        <div className="card-container">
            <div className="image-container">
               <img src={props.photo} alt={props.alt} /> 

            </div>

            <div className="tech-container">
                {props.tech}
            </div>

            <div className="description-container">
                <h2>{props.projectN}</h2>
                <p>{props.projectD}</p>
                <button>Visit</button>
            </div>
        </div>
    );
}

export default Card;