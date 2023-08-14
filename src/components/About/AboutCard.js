import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Aggarwal </span>
            from <span className="purple"> Rampur Bushahar, India.</span>
            <br /> I am a final year student pursuing Bachelor of Technology in
            Computer Science at Bennett University Greater Noida.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Comics
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Surfing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My rule of thumb is 1/3 of the schedule for design, 1/6 for coding,
            1/4 for component testing, and 1/4 for system testing!"{" "}
          </p>
          <footer className="blockquote-footer">Fred Brooks</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
