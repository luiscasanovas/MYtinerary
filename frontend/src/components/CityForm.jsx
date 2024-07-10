import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../store/actions/cityActions';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CityForm = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [img, setImg] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !country) {
      setError('Name and country are required fields.');
      return;
    }

    const newCity = {
      name,
      country,
      img
    };

    dispatch(addCity(newCity));
    navigate('/cities');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Add New City</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>City Name</Form.Label>
              <Form.Control 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control 
                type="text" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control 
                type="text" 
                value={img} 
                onChange={(e) => setImg(e.target.value)} 
              />
            </Form.Group>
            <Row className="mt-4">
              <Col className="text-start">
                <Button variant="secondary" onClick={() => navigate('/cities')}>Back</Button>
              </Col>
              <Col className="text-end">
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CityForm;
