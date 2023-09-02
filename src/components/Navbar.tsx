import { useState } from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import { Burger } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-scroll";

const Navbar = () => {
  const { width } = useViewportSize();
  const [opened, setopened] = useState<boolean>(false);

  const [colorChange, setColorchange] = useState(false);
  const [activeStatus, setactiveStatus] = useState({
    home: false,
    about: false,
    experience: false,
    projects: false,
    blogs: false,
    skills: false,
    contact: false,
  });
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("scroll", () => {
    setactiveStatus({
      home: false,
      about: false,
      experience: false,
      projects: false,
      blogs: false,
      skills: false,
      contact: false,
    });
  });
  return (
    <header>
      {opened == false ? (
        <nav>
          <div className="left" style={{ position: "relative", right: "-2vw", cursor: "pointer" }}>
           <a href="/" style={{color: "white", textDecoration: "none"}}> Deep's Portfolio</a>
          </div>

          <div className="right">
            {width < 610 ? (
              <Burger
                opened={opened}
                onClick={() => setopened(!opened)}
                color="white"
                size={"md"}
                style={{ marginLeft: "40vw" }}
              />
            ) : (
              <></>
            )}

            {width > 610 ? (
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="home"
                    onClick={() => {
                      window.scrollTo({
                        top: -20,
                        behavior: "smooth",
                        /* you can also use 'auto' behaviour
                           in place of 'smooth' */
                      });
                      setactiveStatus({
                        home: true,
                        about: false,
                        experience: false,
                        projects: false,
                        blogs: false,
                        skills: false,
                        contact: false,
                      });
                    }}
                    className={!colorChange ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="about"
                    className={activeStatus.about ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: true,
                        experience: false,
                        projects: false,
                        blogs: false,
                        skills: false,
                        contact: false,
                      })
                    }
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="experience"
                    className={activeStatus.experience ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: false,
                        experience: true,
                        projects: false,
                        blogs: false,
                        skills: false,
                        contact: false,
                      })
                    }
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="projects"
                    className={activeStatus.projects ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: false,
                        experience: false,
                        projects: true,
                        blogs: false,
                        skills: false,
                        contact: false,
                      })
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="blogs"
                    className={activeStatus.blogs ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: false,
                        experience: false,
                        projects: false,
                        blogs: true,
                        skills: false,
                        contact: false,
                      })
                    }
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="skills"
                    className={activeStatus.skills ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: false,
                        experience: false,
                        projects: false,
                        blogs: false,
                        skills: true,
                        contact: false,
                      })
                    }
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contact"
                    className={activeStatus.contact ? "active" : ""}
                    onClick={() =>
                      setactiveStatus({
                        home: false,
                        about: false,
                        experience: false,
                        projects: false,
                        blogs: false,
                        skills: false,
                        contact: true,
                      })
                    }
                  >
                    Contact Me
                  </Link>
                </li>
                <li>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                      position: "relative",
                      left: "60px",
                      top: 4,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/deep-coomer-2a310b205/"
                      target="_blank"
                    >
                      <BrandLinkedin
                        size={30}
                        color="white"
                        className="nav-icon"
                      />
                    </a>
                    <a href="https://github.com/DeepCoomer/" target="_blank">
                      <BrandGithub size={30} color="white" />
                    </a>
                  </div>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div
            className="left"
            style={{ position: "relative", right: "-2vw", top: "2.6vh" }}
          >
            Deep's Portfolio
          </div>

          <div className="right">
            <Burger
              opened={opened}
              onClick={() => setopened(!opened)}
              color="white"
              size={"md"}
              style={{ marginLeft: "40vw", position: "relative", top: "2.6vh" }}
            />

            <ul>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="home"
                  className={!colorChange ? "active" : ""}
                  onClick={() => setopened(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="about"
                  onClick={() => setopened(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="experience"
                  onClick={() => setopened(false)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="projects"
                  onClick={() => setopened(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="blogs"
                  onClick={() => setopened(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="skills"
                  onClick={() => setopened(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="contact"
                  onClick={() => setopened(false)}
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    position: "relative",
                    // left: "60px",
                    top: 4,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/deep-coomer-2a310b205/"
                    target="_blank"
                  >
                    <BrandLinkedin
                      size={30}
                      color="white"
                      className="nav-icon"
                    />
                  </a>
                  <a href="https://github.com/DeepCoomer/" target="_blank">
                    <BrandGithub size={30} color="white" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
