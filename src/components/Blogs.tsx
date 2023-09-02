import { useViewportSize } from "@mantine/hooks";
import jsimg from "./jsimg.png";
// import { Link } from "react-router-dom";

const Blogs = () => {
  const { width } = useViewportSize();
  return (
    <section className="blogSection">
      <span className="text-gray">What's on my mind</span>
      <h1>Blogs</h1>
      <div className="container">
        <a
          href={"/blogs/evolution-of-javascript"}
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="blog-box">
            <img src={jsimg} alt="blog-img" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1vw",
                marginRight: "1vw"
              }}
            >
              <h3 style={{ fontSize: "1.2rem" }}>
                The Evolution of JavaScript: From Scripting Language to Modern
                Powerhouse
              </h3>
            </div>
            {width > 610 ? (
              <div className="blog-desc">
                JavaScript, the ubiquitous programming language that powers the
                web, has come a long way since its inception in the mid-1990s.
                From its humble beginnings ....
              </div>
            ) : (
              <>
                <div className="blog-desc">
                  JavaScript, the ubiquitous programming language that powers
                  the web, has come a long way since ....
                </div>
              </>
            )}
             <div className="blog-details">
              <p>
                Deep Coomer
              </p>
              <p>26-Aug-2023 &nbsp; <span>7 min read</span> </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Blogs;
