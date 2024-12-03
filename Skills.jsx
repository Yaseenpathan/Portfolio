import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Skills = () => {
  // Defining each skill with a name and description
  const skills = [
    {
      name: "HTML",
      description: "Expert in HTML for structuring web pages and applications.",
    },
    {
      name: "CSS",
      description:
        "Proficient in CSS for styling web pages with responsive layouts.",
    },
    {
      name: "JavaScript",
      description:
        "Experienced in JavaScript for building dynamic and interactive web applications.",
    },
    {
      name: "ReactJs",
      description:
        "Skilled in React for building modern, efficient user interfaces.",
    },
    {
      name: "Java",
      description:
        "Proficient in Java for building scalable and robust backend applications.",
    },
    {
      name: "SQL",
      description:
        "Experienced in SQL for managing and querying relational databases.",
    },
    {
      name: "Python",
      description:
        "Skilled in Python for data analysis, backend development, and automation.",
    },
    {
      name: "MongoDB",
      description: "Experienced with MongoDB for managing NoSQL databases.",
    },
  ];

  return (
    <Container className="fadeIn">
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col xs={12} md={4} key={index} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>{" "}
                {/* Display description */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
