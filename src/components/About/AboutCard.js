import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I am <span className="teal">Samantha Crespo </span>
            <br />I am a Software Engineer.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}></p>
          <footer className="blockquote-footer">Marie Curie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
