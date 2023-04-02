import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <h1 className="white-heading animate__animated animate__bounceInDown ">
              About Us <FaReact className="react-icon" />
            </h1>
            <div className="subtitle"></div>
          </Col>
        </Row>
        <Row className="content-row">
          <Col md={6}>
            <h2 className="white-heading animate__animated animate__bounceInLeft">
              Executive Summary <AiOutlineCheckCircle className="check-icon" />
            </h2>
            <ul>
              <li>
                We are building a website where students can upload their
                projects.
              </li>
              <li>
                Students can take coding tests related to their projects to test
                their knowledge in the respective language.
              </li>
              <li>
                The test results and percentages will be shown on their profiles
                for companies seeking employees.
              </li>
            </ul>
            <h2 className="white-heading animate__animated animate__bounceInLeft">
              Problem Statement <AiOutlineCheckCircle className="check-icon" />
            </h2>
            <p className="problem-statement">
              Our project aims to solve the problem of students not having a
              single platform to showcase their educational history, projects,
              achievements, and awards.
            </p>
            <p className="problem-statement">
              Additionally, students need to verify their skills on the projects
              they have worked on in order to secure placements in different
              companies.
            </p>
            <p className="problem-statement">
              We aim to provide a solution by developing a website that allows
              students to showcase all their information in one place and take
              coding tests according to their projects' source code to
              demonstrate their skills in the respective language.
            </p>
            <ul>
              <h5 className="text-white">Tools used:</h5>
              <ul>
                <li>Figma for design</li>
                <li>React-Bootstrap for front-end</li>
                <li>MongoDB for database</li>
                <li>Node.js / Express.js for backend</li>
              </ul>
            </ul>
          </Col>
          <Col md={6}>
            <h2 className="white-heading animate__animated animate__bounceInRight">
              Features <AiOutlineCheckCircle className="check-icon" />
            </h2>
            <ul>
              <li>
                Contains all information of the user like educational history,
                projects, achievements, awards, etc.
              </li>
              <li>
                Allows students to take coding tests according to their
                projects' source code.
              </li>
              <li>Displays test results and percentages on their profiles.</li>
              <li>Organizes projects according to their semesters.</li>
              <li>
                Helps companies find potential employees with the desired
                skills.
              </li>
            </ul>
            <div className="develop warning animate__animated animate__zoomIn">
              <p>
                SWEN19111074 &nbsp;&nbsp;M.AMMAR SHARIF
                <br />
                SWEN19111041 &nbsp;&nbsp;TASMIA IZHAR
              </p>
            </div>
            <div className="warning animate__animated animate__zoomIn">
              <p>
                We are still working on this project and it is not fully
                functional yet.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
