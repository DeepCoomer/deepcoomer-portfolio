// import React from 'react'

import Footer from "./Footer";
import Blogs from "./Blogs"
import Contact from "./Contact"
import HeroSection from "./HeroSection"
import Projects from "./Projects"
import Skills from "./Skills"
import WorkExperienceSection from "./WorkExperienceSection"
import Navbar from "./Navbar";

const Site = () => {
  return (
    <>
    <div id="home">
          <Navbar />
        </div>
     <div>
        <HeroSection />
      </div>
      <div id="experience">
        <WorkExperienceSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Site