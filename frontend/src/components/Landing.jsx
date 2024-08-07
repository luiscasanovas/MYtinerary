import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; 

const Landing = () => {
  return (
    <Container fluid className="text-center d-flex flex-column justify-content-center align-items-center min-vh-100 p-0 landing-container">
      <Row className="justify-content-center m-0">
        <Col xs={12} className="p-0">
          <img src="/logo2.png" className="img-fluid full-page-logo" alt="MYtinerary logo" />
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs={10} md={8} lg={6}>
          <h2 className="landing-subtitle">By travelers for travelers</h2>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs="auto" className="text-center">
          <Link to="/cities">
            <img src="/circled_arrow.png" className="img-fluid browse-button" alt="Start browsing" style={{ maxWidth: '100px' }} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
