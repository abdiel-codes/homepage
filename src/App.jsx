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
  return(
    <>
       <Nav />
       <Header />
       <Title
        symbol = "#" 
        text = "About-me" 
        id = "about-me" />
       <About />
       <Title
        symbol = "#"
        text = "Projects"
        id = "projects"
       />
       <Projects />
       <Title
        symbol = "#"
        text = "Skills"
        id = "skills"
       />
        <Skill />

       <Title
        symbol = "#"
        text = "Contacts"
        id = "contact"
       />
       <Contact />
       <Footer />
    </>
  );
}

export default App
