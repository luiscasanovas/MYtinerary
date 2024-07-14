import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (location.pathname.includes('/cities/')) {
      navigate('/cities');
    } else if (location.pathname === '/cities') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const renderAddButton = () => {
    if (location.pathname.includes('/cities/')) {
      return (
        <Link to={`/add-itinerary/${location.pathname.split('/').pop()}`}>
          <Button variant="primary" className="footer-button">Add Itinerary</Button>
        </Link>
      );
    } else if (location.pathname === '/cities') {
      return (
        <Link to="/add-city">
          <Button variant="primary" className="footer-button">Add City</Button>
        </Link>
      );
    }
    return null;
  };

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="left-button-container">
          {location.pathname !== '/' && (
            <Button variant="secondary" onClick={handleBackClick} className="footer-button">Back</Button>
          )}
        </div>
        <div className="center-icon-container">
          <Link to="/">
            <img src="/homeIcon.png" className="img-fluid home-icon footer-icon" alt="Home" />
          </Link>
        </div>
        <div className="right-button-container">
          {renderAddButton()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
