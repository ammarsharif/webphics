import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import styles from "./Test.module.css";
import question from "../../image/question-removebg.png";

const Quiz = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className={styles["quiz-right"]}>
          <h2 className={styles["quiz-title"]}>
            Coding Test&nbsp;
            <AiFillQuestionCircle />
          </h2>
          <div className={styles["quiz-icon"]}></div>
          <h5 className={styles["quiz-subtitle"]}>Questions 1 of 10:</h5>
          <div className={styles["quiz-questions"]}>
            <Card className={styles["quiz-question"]}>
              <Card.Body>
                <Card.Title>What is React?</Card.Title>
                <Card.Text>
                  <input type="radio" id="q1a" name="q1" value="a" />
                  <label htmlFor="q1a">
                    A library for building user interfaces.
                  </label>
                </Card.Text>
                <Card.Text>
                  <input type="radio" id="q1b" name="q1" value="b" />
                  <label htmlFor="q1b">
                    A framework for building server-side applications.
                  </label>
                </Card.Text>
                <Card.Text>
                  <input type="radio" id="q1c" name="q1" value="c" />
                  <label htmlFor="q1c">
                    A programming language for building web applications.
                  </label>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className={styles["quiz-btn-next"]}>
            <button
              className={`${styles["quiz-btn-primary"]} ${styles["quiz-btn-submit"]}`}
              style={{ float: "right" }}
            >
              Next
            </button>
          </div>
        </Col>
        <Col md={5} className={styles["quiz-left"]}>
          <div className={styles["quiz-image"]}>
            <div className={styles["quiz-image-wrapper"]}>
              <img
                src={question}
                alt="Question"
                className={styles["quiz-image-img"]}
              />
              <div className={styles["quiz-image-icon"]}>
                <AiFillQuestionCircle />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quiz;
