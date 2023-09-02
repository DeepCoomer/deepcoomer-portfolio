// import React from 'react'
import Typewriter from "typewriter-effect";
import heroImg from "./img1.png";
import { useViewportSize } from "@mantine/hooks";

const HeroSection = () => {
  const {  width } = useViewportSize();
  return (
    <main>
      {width > 610 ? (
        <section className="firstSection">
          <div className="leftSection">
           <div id="home">
           <div style={{ fontSize: "1.5rem" }}>HELLO,</div>
            I'm <span className="highlight">Deep Coomer</span> a
            <div>
              {" "}
              <span style={{ color: "blueviolet" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Backend Developer",
                      "FullStack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
           </div>
            <div style={{ fontSize: "1.3rem" }} id="about">
              Welcome to my web developer portfolio I'm Deep a skilled and
              creative web developer with a passion for creating beautiful
              responsive and user-friendly websites I've worked a variety of web
              projects ranging from personal blogs to social media platforms.
            </div>
            <div className="action_btns">
              <a href="#contact">
                <button className="hire_me">Hire Me</button>
              </a>
              <a href="https://drive.google.com/file/d/1lfRltJY2wzoaToT6jSj4umRFv5e9-vYq/view?usp=sharing" target="_blank">
                <button className="resume">Resume</button>
              </a>
            </div>
          </div>
          <div className="rightSection">
            <img src={heroImg} alt="Image" srcSet="" />
          </div>
        </section>
      ) : (
        <section className="firstSection" id="about">
          <div className="rightSection">
            <img src={heroImg} alt="Image" srcSet="" />
          </div>
          <div className="leftSection">
            <div style={{ fontSize: "1.2rem" }}>HELLO,</div>
            I'm <span className="highlight">Deep Coomer</span> a
            <div>
              {" "}
              <span style={{ color: "blueviolet" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Backend Developer",
                      "FullStack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div style={width > 610? { fontSize: "1.16rem" }: {fontSize: "1.1rem", maxWidth: "90vw"}}>
              Welcome to my web developer portfolio I'm Deep a skilled and
              creative web developer with a passion for creating beautiful
              responsive and user-friendly websites I've worked a variety of web
              projects ranging from personal blogs to social media platforms.
            </div>
            <div className="action_btns">
              <a href="#contact">
                <button className="hire_me">Hire Me</button>
              </a>
              <a href="https://drive.google.com/file/d/1XOP1ykZ58eSZ_tjruvMFHJw1F_HAlF6C/view?usp=sharing" target="_blank">
                <button className="resume">Resume</button>
              </a>
            </div>
          </div>
        </section>
      )}
      {/* <hr /> */}
    </main>
  );
};

export default HeroSection;
