import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              hasLink={true}
              title="Remote Intensive Care application"
              description="A web application build using Flask, HTML, CSS and JavaScript. Helps in online appointment booking, delivering medicine and comes with a Heart Rate Sensor.
              Mainly Worked in the Backend Logic for this project"
              ghLink="https://github.com/TeamRocketBalleBalle/RICA-Remastered"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              hasLink={true}
              title="Riktionary"
              description="A Java-based multiplayer game where players guess displayed images. 
              The first player to guess correctly earns a point, and the first to reach 5 points wins the game."
              ghLink="https://github.com/TeamRocketBalleBalle/Ricktionary"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              hasLink={true}
              title="Twitch Watcher Discord bot"
              description="A Python-based Discord bot that listens for a specific command and starts a Docker container to monitor the RLCS stream and automatically claim available loot."
              ghLink="https://github.com/Ya-s-h/twitch-watcher-discord-bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              hasLink={false}
              title="Inventory Management System"
              description="A MERN stack based inventory management system with multi-user authentication, hierarchical roles, CRUD activity logging, 
              and automated low-stock email alerts using Nodemailer.
              Delivered end-to-end as a client-focused freelancing project by a team of four."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
