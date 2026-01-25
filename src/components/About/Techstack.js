import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/python.svg";
import bash from "../../Assets/TechIcons/bash.svg";
import celery from "../../Assets/TechIcons/celery.svg";
import es from "../../Assets/TechIcons/elasticsearch.svg";
import git from "../../Assets/TechIcons/git.svg";
import langchain from "../../Assets/TechIcons/langchain.svg";
import mongo from "../../Assets/TechIcons/mongodb.svg";
import sql from "../../Assets/TechIcons/mysql.svg";
import redis from "../../Assets/TechIcons/redis.svg";


function makeCol() {
  const images_with_names = {
    // Languages
    Python: Python,
    Bash: bash,
    // DB
    "Elastic Search": es,
    "Mongo DB": mongo,
    Redis: redis,
    MySQL: sql,
    // Tools
    Git: git,
    Celery: celery,
    Langchain: langchain,
    // Postman: postman,
  };

  return Object.entries(images_with_names).map(([img_name, image]) => (
    <Col key={img_name} xs={4} md={2} className="tech-icons">
      <img src={image} alt={img_name} height={30} />
      <div className="tech-icons-text">{img_name}</div>
    </Col>
  ));
}


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {makeCol()}
    </Row>
  );
}

export default Techstack;
