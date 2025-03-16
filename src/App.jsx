import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Title from './components/Title';

function App() {
  return(
    <>
       <Nav></Nav>
       <Header></Header>
       <Title text = "#About me"></Title>
    </>
  );
}

export default App
