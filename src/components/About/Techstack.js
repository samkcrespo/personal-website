import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiCss3 } from "react-icons/di";
// import { Tooltip, Button } from "@mui/material";

import {
  SiCsharp,
  SiHtml5,
  SiNpm,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiSqlite,
  SiRedux,
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiVisualstudio,
} from "react-icons/si";
// import { GrHostMaintenance } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p className="tech-text">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-text">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-text">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-text">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="tech-text">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-text">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-text">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p className="tech-text">SQLite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRuby />
        <p className="tech-text">Ruby</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
        <p className="tech-text">Ruby on Rails</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="tech-text">C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <p className="tech-text">NPM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="tech-text">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p className="tech-text">Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-text">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="tech-text">Github/Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
