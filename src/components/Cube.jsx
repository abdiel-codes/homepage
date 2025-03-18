import "../stylesheets/Cube.css";
import React, { useState } from "react";

function Cube() {

    const [rotation, setRotation] = useState( {x: 0, y: 0});
    const [isAnimated, setIsAnimated] = useState(true);

    const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 360;
        const y = (e.clientY / window.innerHeight - 0.5 ) * 360;
        setRotation({x , y});
    };

    const stopRotation = () => {
        setIsAnimated(!isAnimated);
    }

    return (
        <div className="cube-container"
        onMouseMove={handleMove} >
            <div className={`cube ${isAnimated ? "animated" : ""}`}
                style={{transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,}} >
                <div className="face front">JavaScript</div>
                <div className="face back">React</div>
                <div className="face right">SQL</div>
                <div className="face left">CSS</div>
                <div className="face top">HTML</div>
                <div className="face bottom">Git</div>
            </div>
            <div className="cube-button-container"
            onClick={stopRotation} >
                <button className="cube-button">{`${isAnimated ? "Stop Rotation" : "Rotate"}`}</button>
            </div>
        </div>
    )
}

export default Cube;