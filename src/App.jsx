import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Title from './components/Title';
import About from './components/About';

function App() {
  return(
    <>
       <Nav />
       <Header />
       <Title
        symbol = "#" 
        text = "About me" />
       <About />
       <Title
        symbol = "#"
        text = "Projects"
       />
       <Title
        symbol = "#"
        text = "Skills"
       />
       <Title
        symbol = "#"
        text = "Contacts"
       />
    </>
  );
}

export default App
