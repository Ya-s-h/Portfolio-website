import { Col, Row } from "react-bootstrap";

import postman from "../../Assets/TechIcons/postman.svg";
import linux from "../../Assets/TechIcons/linux.svg";
import vscode from "../../Assets/TechIcons/vscode.svg";

function makeCol() {
  const images_with_names = {
    Linux : linux,
    "VS Code": vscode,
    Postman: postman,
  };

  return Object.entries(images_with_names).map(([img_name, image]) => (
    <Col key={img_name} xs={4} md={2} className="tech-icons">
      <img src={image} alt={img_name} height={30} />
      <div className="tech-icons-text">{img_name}</div>
    </Col>
  ));
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {makeCol()}
    </Row>
  );
}

export default Toolstack;
