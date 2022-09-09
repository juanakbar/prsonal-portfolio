import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from "./components/header/Header";
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import Skill from './components/Skills/Skill';

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skill />
                <Service />
            </main>
            <Footer />
        </>
    );
}

export default App;
