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
          <Link to="/cities">
            <img src="/circled_arrow.png" className="img-fluid browse-button" alt="Start browsing" />
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-between my-4">
        <Col xs="auto">
          <Link to="/login" className="btn btn-primary mx-2">Log in</Link>
        </Col>
        <Col xs="auto">
          <Link to="/create-account" className="btn btn-secondary mx-2">Create Account</Link>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <Link to="/">
            <img src="/homeIcon.png" className="img-fluid home-icon" alt="Home" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
