import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; 

const Landing = () => {
  return (
    <Container fluid className="text-center p-0">
      <Row className="justify-content-center m-0">
        <Col xs={12} className="p-0">
          <img src="/logo.png" className="img-fluid logo-80" alt="MYtinerary logo" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <h1>MYtinerary</h1>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs={10}>
          <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs="auto" className="text-center">
          <p>Start browsing</p>
          <img src="/circled_arrow.png" className="img-fluid browse-button" alt="Start browsing" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={6} className="text-left">
          <Link to="/login" className="btn btn-primary">Log in</Link>
        </Col>
        <Col xs={6} className="text-right">
          <Link to="/create-account" className="btn btn-secondary">Create Account</Link>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs="auto" className="text-center">
          <Link to="/">
            <img src="/homeIcon.png" className="img-fluid home-icon" alt="Home" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
