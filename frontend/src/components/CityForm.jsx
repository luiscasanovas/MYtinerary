import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../store/actions/cityActions';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CityForm = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !country || !image) {
      setError('All fields are required.');
      return;
    }

    const newCity = {
      name,
      country,
      image
    };

    dispatch(addCity(newCity));
    navigate('/cities');
  };

  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 style={{ color: 'white' }}>Add New City</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} style={{ color: 'white' }}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
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
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button type="submit" className="small-submit-button">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CityForm;
