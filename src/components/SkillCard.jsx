import "../stylesheets/SkillCard.css";

function SkillCard(props) {
    return(
        <div className="card-skill-container">
            <div className="skill-card-title-container">
                <h2 className="skill-card-title">
                    {props.title}
                </h2>
            </div>
            <div className="skill-card-text-container">
                <p className="skill-card-text">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default SkillCard;