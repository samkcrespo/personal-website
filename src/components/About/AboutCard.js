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
            <br />
            I'm passionate about science and technology and I am a Washington
            resident who enjoys coding, exploring the beauty that this state has
            to offer, and spending time with family.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in life is to be feared, it is only to be understood. Now
            is the time to understand more, so that we may fear less."{" "}
          </p>
          <footer className="blockquote-footer">Marie Curie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
