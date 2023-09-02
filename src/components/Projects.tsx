import { useState } from "react";
import fullstackimg from "./fullstack.jpg";
import { useViewportSize } from "@mantine/hooks";

const Projects = () => {
  const [style, setStyle] = useState({ display: "none" });
  const [secondstyle, setSecondStyle] = useState({ display: "none" });
  const [thirdstyle, setThirdStyle] = useState({ display: "none" });
  const [fourthstyle, setFourthStyle] = useState({ display: "none" });
  const [fifthstyle, setFifthStyle] = useState({ display: "none" });
  const [sixthstyle, setSixthStyle] = useState({ display: "none" });
  const { width } = useViewportSize();
  //   const [projectHeading, setprojectHeading] = useState({display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"});
  return (
    <section className="thirdSection">
      <span className="text-gray">What I have build so far</span>
      <h1>My Projects</h1>
      <div className="container">
        <div
          style={{}}
          className="project-box"
          onMouseEnter={(_e) => {
            setSixthStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setSixthStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>EKART</h2>
            <p style={{ color: "gray" }}>A Ecommerce website</p>
          </div>
          <div className="project-desc" style={sixthstyle}>
            A e commerce website for buying different products. Developed using
            MERN Stack. For payment gateway Stripe Api is used.
          </div>
          <div className="action_btns">
            <a href="https://ekart-frontend-six.vercel.app/" target="_blank" style={{ textDecoration: "none" }}>
              <button style={sixthstyle} className="hire_me">
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/EKart"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={sixthstyle} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          style={{ backgroundImage: fullstackimg }}
          className="project-box"
          onMouseEnter={(_e) => {
            setSecondStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setSecondStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>BLOGTODAY</h2>
            <p style={{ color: "gray" }}>A simple blogging website.</p>
          </div>
          <div className="project-desc" style={secondstyle}>
            A blog website to post and read blogs/articles by different authors
            on different categories. Developed using MERN Stack. For more
            information read the README.MD file on the Git Repo
          </div>
          <div className="action_btns">
            <a
              href="https://blogtoday.vercel.app/signin"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <button style={secondstyle} className="hire_me">
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/Blog-Website"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={secondstyle} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>


        <div
          style={{}}
          className="project-box"
          onMouseEnter={(_e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>MEME BOOK</h2>
            <p style={{ color: "gray" }}>A social media website</p>
          </div>
          <div className="project-desc" style={style}>
            A social media website to share memes. Developed using MERN Stack.
          </div>
          <div className="action_btns">
            <a href="https://memebook-mu.vercel.app/" target="_blank" style={{ textDecoration: "none" }}>
              <button
                style={style}
                className="hire_me"
              >
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/MemeBook"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={style} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          style={{ backgroundImage: fullstackimg }}
          className="project-box"
          onMouseEnter={(_e) => {
            setFifthStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setFifthStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={
                width > 610 ? { marginLeft: "28px" } : { marginLeft: "3.5vw" }
              }
            >
              CINEMAX
            </h2>
            <p style={{ color: "gray" }}>
              A movie & tv show related info website.
            </p>
          </div>
          <div className="project-desc" style={fifthstyle}>
            Developed using The movie database(TMDB) Api. User can get all the
            required details about their favourite, trending movie and tv show.
            Tech Stack: React Js(Vite). Is also a PWA, hence the users can also
            install this web app and enjoy.
          </div>
          <div className="action_btns">
            <a
              href="https://cinemax-five.vercel.app/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <button style={fifthstyle} className="hire_me">
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/Cinemax"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={fifthstyle} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          style={{}}
          className="project-box"
          onMouseEnter={(_e) => {
            setFourthStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setFourthStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>FILE SHARER</h2>
            <p style={{ color: "gray" }}>
              A website for sharing files among users.
            </p>
          </div>
          {width > 900 ? (
            <div className="project-desc" style={fourthstyle}>
              When the user uploads a file in on the website, a link is
              generated which can be shared to others for downloading the files.
              Tech Stack: HTML5, CSS3, JAVASCRIPT, DJANGO RESTFRAMEWORK. For
              more information read the README.MD file on the Github Repo.
            </div>
          ) : (
            <div className="project-desc" style={fourthstyle}>
              When the user uploads a file in on the web, a link is generated
              which is used for downloading the files. Tech Stack: HTML5, CSS3,
              JAVASCRIPT, DJANGO RESTFRAMEWORK. For more information read the
              README.MD file on the Github Repo.
            </div>
          )}
          <div className="action_btns">
            <a
              href="https://filesharing-six.vercel.app/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <button style={fourthstyle} className="hire_me">
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/filesharing"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={fourthstyle} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          style={{ backgroundImage: fullstackimg }}
          className="project-box"
          onMouseEnter={(_e) => {
            setThirdStyle({ display: "block" });
          }}
          onMouseLeave={(_e) => {
            setThirdStyle({ display: "none" });
          }}
        >
          <div
            className="project-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={
                width > 610 ? { marginLeft: "28px" } : { marginLeft: "3.5vw" }
              }
            >
              BOOKS RECOMMENDATION SYSTEM
            </h2>
            <p style={{ color: "gray" }}>A Recommendation website.</p>
          </div>
          <div className="project-desc" style={thirdstyle}>
            A simple website to recommend books based on the concept content
            filtering. Tech Stack: HTML5, CSS3, Flask, Recommendation model
            using Cosine Similarity.
          </div>
          <div className="action_btns">
            <a href="" style={{ textDecoration: "none" }}>
              <button
                style={thirdstyle}
                className="hire_me"
                onClick={() => alert("Website is not deployed yet!.")}
              >
                <i className="fa fa-link"></i>
                Link
              </button>
            </a>
            <a
              href="https://github.com/DeepCoomer/Book-Recommendation-System"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button style={thirdstyle} className="resume">
                <i className="fa fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Projects;
