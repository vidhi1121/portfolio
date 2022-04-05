import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import aws from "../../Assets/certificate/aws.png";
import mysql from "../../Assets/certificate/mysql.jpg";
import py from "../../Assets/certificate/py.jpg";
import java from "../../Assets/certificate/java.png";
import ml from "../../Assets/certificate/ml.png";
import ggl from "../../Assets/certificate/ggl.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">My Achivements </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={mysql}
              isBlog={false}
              title="SQL programming"
              // description="This project contains online shopping of vegetables which is build using Reactjs, Nodejs, Expressjs and MongoDB database."
              link="https://www.udemy.com/certificate/UC-fa9ed12c-e1e8-4e59-8e1d-606ae97afab1/"
            />
          </Col>

           
          <Col md={4} className="project-card">
            <CertificateCard

              imgPath={java}
              isBlog={false}
              title="Java Course"
              // description="You can change background color by clicking buttons."
              link="https://drive.google.com/file/d/1r9WYtmzNtBJD6QC7jM8u88IvONg6pTkB/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard

              imgPath={py}
              isBlog={false}
              title="
              python programming"
              // description="You can change background color by clicking buttons."
              link="https://www.udemy.com/certificate/UC-f3f9add6-7a32-4ed0-92a6-0f4ee3a2c646/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard

              imgPath={ggl}
              isBlog={false}
              title="Digital Marketing"
              // description="You can change background color by clicking buttons."
              link="https://drive.google.com/file/d/1-i9Op6KRb4oIJFqbxg_58OqzrgyGN1mO/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard

              imgPath={ml}
              isBlog={false}
              title="Machine Learning"
              // description="You can change background color by clicking buttons."
              link="https://drive.google.com/file/d/1yCTYfLUhhksxnkqSEi1kaYWcwG3KCFNm/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard

              imgPath={aws}
              isBlog={false}
              title="AWS"
              // description="You can change background color by clicking buttons."
              link="https://drive.google.com/file/d/1nzd-L-QP_gYPzlf4jisuRUCPsi8bvgvb/view?usp=sharing"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;