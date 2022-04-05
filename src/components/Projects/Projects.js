import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bcs from "../../Assets/Projects/bcs.png";
import veg from "../../Assets/Projects/veg.png";

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
              imgPath={bcs}
              title="Online Vegetabls Shopping"
              description="This project contains online shopping of vegetables which is build using Reactjs, Nodejs, Expressjs and MongoDB database."
              link="https://github.com/vidhi1121/SDP-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veg}
              title="
              background-color-switcher"
              description="You can change background color by clicking buttons."
              link="https://github.com/vidhi1121/background-color-switcher"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
