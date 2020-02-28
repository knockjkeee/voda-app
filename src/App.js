import React from 'react';
import './App.css';
import MainLayout from "./noc/MainLayout";
import NavBar from "./components/NavBar/NavBar";
import Section from "./noc/Section";
import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TimeLine from "./components/TimeLine/TimeLine";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div>
            <MainLayout>
                <NavBar/>
            </MainLayout>
            <Section>
                <Header/>
            </Section>
            <Section>
                <Showcase/>
            </Section>


            <Section>
                <TimeLine/>
            </Section>

            <Section>
                <About/>
            </Section>

            <Section>
                <Contact/>
            </Section>

            <Section>
                <Footer/>
            </Section>

        </div>
    );
}

export default App;
