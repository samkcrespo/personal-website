import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects & Certifications</strong>
        </h1>
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
            <ProjectCard imgPath="" title="" description="" ghLink="" />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath="" title="" description="" ghLink="" />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath="" title="" description="" ghLink="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
