import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const renderAddButton = () => {
    if (location.pathname.includes('/cities/')) {
      return (
        <Link to={`/add-itinerary/${location.pathname.split('/').pop()}`}>
          <Button variant="primary">Add Itinerary</Button>
        </Link>
      );
    } else if (location.pathname === '/cities') {
      return (
        <Link to="/add-city">
          <Button variant="primary">Add City</Button>
        </Link>
      );
    }
    return null;
  };

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#f8f9fa', padding: '10px 0' }}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            {location.pathname !== '/' && (
              <Button variant="secondary" onClick={handleBackClick}>Back</Button>
            )}
          </Col>
          <Col xs="auto" className="text-center">
            <Link to="/">
              <img src="/homeIcon.png" className="img-fluid home-icon" alt="Home" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
            </Link>
          </Col>
          <Col xs="auto">
            {renderAddButton()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
