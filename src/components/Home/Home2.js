import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/samphoto.png";
import headshot from "../../Assets/samheadshot.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>
            </h1>
            <p className="home-about-body">
              <br />I am a Software Engineer with a passion for desiging and
              building applications. Programming is an art, and I enjoy bringing
              my ideas to life!
              <p>
                {" "}
                While my path here has been non-linear, I have always been a
                creative individual - now with the ability to implement my
                creativity, sales and customer service experience into a career
                that doesn't feel much like a job at all.
              </p>
              <p>
                {" "}
                I enjoy contributing to open-source projects and freelancing
                while searching for my next opportunity.
              </p>
              <p>
                When I'm not coding I enjoy hiking, playing video games, while
                spending time with my husband and our two amazing dogs - a blue
                heeler and belgian malinois named Mo & Zeik.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={headshot} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/samkcrespo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/samantha-crespo-tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:samkcrespo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
