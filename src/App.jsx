import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Skill from "./components/Skill";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [effects, setEffects] = useState([]);

  const handlePageClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newEffect = { x, y, id: Date.now() };

    setEffects((prev) => [...prev, newEffect]);

    setTimeout(() => {
      setEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
    }, 800); 
  };

  return (
    <div className="app-container" onClick={handlePageClick}>
      {effects.map((effect) => (
      <div
        key={effect.id}
        className="click-effect"
        style={{ top: effect.y, left: effect.x }}
      >
        <div className="click-effect-line"></div>
        <div className="click-effect-line"></div>
        <div className="click-effect-line"></div>
        <div className="click-effect-line"></div>
        <div className="click-effect-line"></div>
        <div className="click-effect-line"></div>

      </div>
      ))}

      
      <Nav />
      <Header />
      <Title symbol="#" text="About-me" id="about-me" />
      <About />
      <Title symbol="#" text="Projects" id="projects" />
      <Projects />
      <Title symbol="#" text="Skills" id="skills" />
      <Skill />
      <Title symbol="#" text="Contacts" id="contact" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
