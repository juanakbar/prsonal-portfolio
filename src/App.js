import React from 'react';
import Qualification from './components/qualification/Qualification'
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from "./components/header/Header";
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import Skill from './components/Skills/Skill';
import Testimonial from './components/Testimonial/Testimonial'

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skill />
                <Service />
                <Qualification />
                <Testimonial />
            </main>
            <Footer />
        </>
    );
}

export default App;
