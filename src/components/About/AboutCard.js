import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0"> */}
        <h2 style={{ textAlign: "center" }}>
          Hello, my name is <span className="teal">Sam. </span>
          <br />
        </h2>
        <p style={{ textAlign: "center" }}>
          I'm a <span className="teal"> Full-stack </span>Software Engineer
          <span className="teal"></span>
          <br />
        </p>
        <p style={{ textAlign: "center" }}>
          I like to
          <span className="teal"> design and develop </span>
          web applications.
          <br />
        </p>
        <p style={{ textAlign: "justify" }}>
          <br />
        </p>

        <p style={{ color: "rgb(155 126 172)" }}></p>
        {/* <footer className="blockquote-footer"></footer> */}
        {/* </blockquote> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
