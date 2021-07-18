import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import IntroSection from '../Components/IntroSection'
import Partner from '../Components/Partner'
import Project from '../Components/Project'
import Services from '../Components/Services'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import './home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <IntroSection />
            <Project />
            <Services />
            <Partner />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
