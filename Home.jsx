import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex  justify-content-center ">
          <h1
            className="fw-bolder "
            style={{ width: "100%", fontSize: "3rem", lineHeight: "1.5" }} // Increase font size here
          >
            Hello, I'm Pathan Yaseen Khan, M.Tech Graduate & Masters Student
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
