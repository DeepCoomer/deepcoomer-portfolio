// import React from 'react'

import { useViewportSize } from "@mantine/hooks";
import { BrandGithub, BrandInstagram, BrandLinkedin } from "tabler-icons-react";

const Footer = () => {
  const { width } = useViewportSize();
  return (
    <>
      {width > 768 ? (
        <footer className="sixthSection">
          <div className="footer-heading">
            Deep's Portfolio
            <div>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#blogs">Blogs</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="copyright">
            Copyright &#169; 2023 Deep Coomer All rights reserved
          </div>
          <div className="contact-details">
            <strong>Email &nbsp; </strong>{" "}
            <span style={{ color: "blueviolet" }}>deepcoomer45@gmail.com</span>
            <strong>Phone no &nbsp; </strong>{" "}
            <span style={{ color: "blueviolet" }}>+91 9769690435</span>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="/https://www.linkedin.com/in/deep-coomer-2a310b205/"
                target="_blank"
              >
                <BrandLinkedin color="gray" size={45} />
              </a>
              <a href="https://github.com/DeepCoomer/">
                <BrandGithub color="gray" size={45} />
              </a>
              <a href="https://www.instagram.com/deepcoomer07/">
                <BrandInstagram color="gray" size={45} />
              </a>
            </div>
          </div>
        </footer>
      ) : (
        <>
          <footer className="sixthSection" >
            <div className="footer-heading">
              Deep's Portfolio
              <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#blogs">Blogs</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact Me</a>
              </div>
            </div>
            
            <div className="contact-details">
              <strong>Email &nbsp; </strong>{" "}
              <span style={{ color: "blueviolet" }}>
                deepcoomer45@gmail.com
              </span>
              <strong>Phone no &nbsp; </strong>{" "}
              <span style={{ color: "blueviolet" }}>+91 9769690435</span>
         
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "40vw"
                  //  alignItems: "center",
                  //  marginTop: "10px",
                }}
              >
                <a
                  href="/https://www.linkedin.com/in/deep-coomer-2a310b205/"
                  target="_blank"
                >
                  <BrandLinkedin color="gray" size={45} />
                </a>
                <a href="https://github.com/DeepCoomer/">
                  <BrandGithub color="gray" size={45} />
                </a>
                <a href="https://www.instagram.com/deepcoomer07/">
                  <BrandInstagram color="gray" size={45} />
                </a>
              </div>
              <div className="copyright">
              Copyright &#169; 2023 Deep Coomer All rights reserved
            </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
