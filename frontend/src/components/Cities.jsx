import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../store/actions/cityActions';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, ListGroup, Spinner, Alert } from 'react-bootstrap';

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
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className="text-center">Cities</h1>
          <Form>
            <Form.Group controlId="formCityFilter">
              <Form.Control 
                type="text" 
                placeholder="Filter cities" 
                value={filter}
                onChange={handleFilterChange}
                className="mb-4"
              />
            </Form.Group>
          </Form>
          {citiesData.loading && <Spinner animation="border" />}
          {citiesData.error && <Alert variant="danger">{citiesData.error}</Alert>}
          <ListGroup>
            {filteredCities.map(city => (
              <ListGroup.Item key={city._id} className="mb-2">
                <Link to={`/cities/${city._id}`} className="link-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{city.name}</span>
                  </div>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
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
