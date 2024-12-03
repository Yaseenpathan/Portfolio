import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Container
      className="fadeIn py-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2 className="mb-4" style={{ color: "#343a40" }}>
        Contact Information
      </h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <FaPhoneAlt size={30} color="#007bff" className="me-3" />
            <span style={{ fontSize: "1.2rem", color: "#495057" }}>
              +91 9177459574
            </span>
          </div>
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <FaEnvelope size={30} color="#28a745" className="me-3" />
            <span style={{ fontSize: "1.2rem", color: "#495057" }}>
              pathan.yaseen21@gmail.com
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
