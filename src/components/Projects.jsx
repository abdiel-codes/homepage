import "../stylesheets/Projects.css";
import Card from "./Card";
import photo1 from "../assets/shawn.png";

function Projects() {
    return (
        <div className="project-container">
            <Card 
                photo={photo1}
                alt = "shawn photo"
                tech = "HTML CSS REACT NODEJS"
                projectN = "To-do List"
                projectD = "This is a generic very very generic description for the project"
            />
            
            <Card 
                photo={photo1}
                alt = "shawn photo"
                tech = "HTML CSS REACT NODEJS"
                projectN = "To-do List"
                projectD = "This is a generic very very generic description for the project"
            />

            <Card 
                photo={photo1}
                alt = "shawn photo"
                tech = "HTML CSS REACT NODEJS"
                projectN = "To-do List"
                projectD = "This is a generic very very generic description for the project"
            />
            
        </div>
    );
}

export default Projects;