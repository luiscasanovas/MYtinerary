import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Spinner, Alert } from 'react-bootstrap';

const Cities = ({ citiesData, fetchCities }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCities = citiesData.cities.filter(city => 
    city.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <Container className="city-container">
      <Row className="my-3">
        <Col>
          <h1 className="text-center fadeIn text-white">Cities</h1>
          <Form>
            <Form.Group controlId="formCityFilter">
              <Form.Control 
                type="text" 
                placeholder="Find your place"
                value={filter}
                onChange={handleFilterChange}
                className="mb-4"
              />
            </Form.Group>
          </Form>
          {citiesData.loading && <Spinner animation="border" />}
          {citiesData.error && <Alert variant="danger">{citiesData.error}</Alert>}
          <Row>
            {filteredCities.map(city => (
              <Col key={city._id} xs={12} md={6} lg={4} className="mb-4">
                <Link to={`/cities/${city._id}`} className="link-item">
                  <Card className="city-card">
                    <Card.Img variant="top" src={city.image} className="city-card-img" />
                    <Card.ImgOverlay className="city-card-overlay">
                      <Card.Title className="city-card-title">{city.name}, {city.country}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    citiesData: state.cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
