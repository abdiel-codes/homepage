import "../stylesheets/Skill.css";
import SkillCard from "./SkillCard";
import Cube from "./Cube";

function Skill() {
    return (
        <div className="skill-container">
            <div className="interactive-container">
                <Cube />
            </div>
            <div className="skill-card-container">
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
                <SkillCard 
                title = "Languajes"
                text = "JavaScript Css Python C#" />
            </div>
        </div>
    );
}

export default Skill;