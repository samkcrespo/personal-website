import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flatironCert from "../../Assets/flatironcertificate.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="teal">Projects & Certifications</strong>
        </h1>
        <p className="teal">
          Here are a few examples of my work. Some are mock-ups, some are
          functioning apps, SPAs, etc.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="PetMatcher"
              description=""
              ghLink="https://github.com/samkcrespo/Phase-3-Project-Front-end-.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Volunteer Network"
              description=""
              ghLink="https://github.com/samkcrespo/Phase-4-react-rails-api-project-backend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Wise Budget Manager"
              description=""
              ghLink=""
              certificate="certificate"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={{ flatironCert }}
              title="Flatiron School"
              description="Certificate of completion for Flatiron's Software Engineering program"
              ghLink=""
              certificate="certificate"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard imgPath="" title="" description="" ghLink="" />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
