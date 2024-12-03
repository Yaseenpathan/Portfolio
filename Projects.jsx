import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Fake app detection",
      description:
        " identifying malicious or fraudulent mobile applications to protect users and their devices. Below are the key steps to implement a fake app detection system using machine learning.",
    },
    {
      title: "PNEUMINIA DETECTION USING DEEP LEARNING",
      description:
        "Our project is about detection of pneumonia by chest X-ray using Convolutional Neural Network. We have used CNN and Batch Normalization from Keras to develop this model and calculated accuracy using confusion matrix.",
    },
    {
      title: "GENETIC ALGORITHEM USING Python",
      description:
        "It may be one of the most popular and widely known biologically inspired algorithms, along with artificial neural networks. Through this algorithm, we have to find the generex mutations for how many years.",
    },
  ];

  return (
    <Container className="fadeIn">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
