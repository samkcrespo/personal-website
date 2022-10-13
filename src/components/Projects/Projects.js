// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import VN from "../../Assets/volunteer_network.png";
// import flatironCert from "../../Assets/flatironcertificate.jpg";


// const projects = [{

 
//   title: "PetMatcher",
//   description: "",
//   ghLink: "https://github.com/samkcrespo/Phase-3-Project-Front-end-.git",
//   image: {VN}},
// {

//   title: "Volunteer Network",
//   description: "",
//   ghLink: "https://github.com/samkcrespo/Phase-4-react-rails-api-project-backend",
//   image: {VN}
// },{

//   title: "Wise Budget Manager",
//   description: "",
//   ghLink: "",
//   image: {VN}
// },
// ]
// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My <strong className="teal">Projects & Certifications</strong>
//         </h1>
//         {/* <p className="teal">
//           Here are a few examples of my work. Some are mock-ups, some are
//           functioning apps, SPAs, etc.
//         </p> */}
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//         <Col>
//         <p className="teal">
//         Project cards under construction :) Please view my github account to see what I.  
//         </p></Col>
//           </Row>
    
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {/* <Col md={4} className="project-card">

//             {projects.map((project => (
//               <ProjectCard title={project.title}
//               description={project.description}
//               ghLink={project.ghLink}
//               image={project.image} />
//             )))} */}
//             {/* <ProjectCard
//               imgPath="../../Assets/flatironcertificate.jpg"
//               title="PetMatcher"
//               description=""
//               ghLink="https://github.com/samkcrespo/Phase-3-Project-Front-end-.git"
//             /> */}
//           {/* </Col> */}
//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath=""
//               title="Volunteer Network"
//               description=""
//               ghLink="https://github.com/samkcrespo/Phase-4-react-rails-api-project-backend"
//             />
//           </Col> */}
//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath=""
//               title="Wise Budget Manager"
//               description=""
//               ghLink=""
//             />
//           </Col> */}
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath="../../Assets/flatironcertificate.jpg"
//               title="Flatiron School"
//               description="Certificate of completion for Flatiron's Software Engineering program"
//               ghLink=""
//               certificate="certificate"
//             />
//           </Col>
//           {/* <Col md={4} className="project-card">
//             <ProjectCard imgPath="" title="" description="" ghLink="" />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flatironCert from "../../Assets/flatironcertificate.jpg";
import vn from "../../Assets/volunteer_network.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="teal">Projects & Certifications</strong>
        </h1>
        <p className="teal">
          Here are a few examples of my work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="PetMatcher"
              description="This application was made to display skills building a fullstack application. This application is meant to be a SAAS for pet adoption facilities, to show available animals and process applicaitons for these animals. This project follows RESTful Architecture, and features use of all CRUD actions. Technologies used in this project are React, React Routing, Ruby Sinatra"
              ghLink="https://github.com/Akateno/Phase-3-Project-Front-end-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="../../Assets/volunteer_network.png"
              title="Volunteer Network"
              description="Volunteer Network was created with the plan to continue extending features to cover volunteer opportunities throughout the US. 
              At this time, the volunteer opportunities are based off of a proximity to Denver, Colorado. 
              This app was created using React, React Router, Ruby on Rails, PostgreSQL and MUI for styling. Features include user authentication, sessions, and create read update delete actions"
              ghLink="https://github.com/samkcrespo/volunteer-network-react-rails"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Wise Budget Manager"
              description="Wise Budget Manager is an application built using React, Ruby on Rails, & PostgreSQL. Other features include React Router & Bootstrap. This application allows you to create an account, create budgets and input expenses which calculate your remaining balance of your budget"
              ghLink="https://github.com/samkcrespo/wise-budget-mgmt"
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