import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  AiOutlineHome,
  AiFillInfoCircle,
  AiOutlineMail,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { SiTestcafe } from "react-icons/si";
import "./Navbar.css";

const LeftNav = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} md={3} lg={2} className="sidebar">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <AiOutlineHome />
              &nbsp;Home
            </Nav.Link>
            <Nav.Link href="/Test">
              <SiTestcafe />
              &nbsp;Test
            </Nav.Link>
            <Nav.Link href="/signin">
              <AiOutlineUserAdd />
              &nbsp;Sign In
            </Nav.Link>
            <Nav.Link href="/contact">
              <AiOutlineMail />
              &nbsp;Contact
            </Nav.Link>
            <Nav.Link href="/about">
              <AiFillInfoCircle />
              &nbsp;About
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftNav;
