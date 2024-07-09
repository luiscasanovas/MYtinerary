import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#f8f9fa', padding: '10px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/">
              <img src="/homeIcon.png" className="img-fluid home-icon" alt="Home" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
