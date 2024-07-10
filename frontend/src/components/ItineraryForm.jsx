import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItinerary } from '../store/actions/itineraryActions';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItineraryForm = () => {
  const { cityId } = useParams();
  const [cityName, setCityName] = useState('');
  const [title, setTitle] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/cities/${cityId}`)
      .then(response => {
        setCityName(response.data.name);
      })
      .catch(err => {
        console.error('Error fetching city details:', err);
      });
  }, [cityId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating < 0 || rating > 10 || duration <= 0 || price <= 0) {
      setError('Rating must be between 0 and 10. Duration and price must be positive numbers.');
      return;
    }

    const newItinerary = {
      title,
      profilePicture,
      rating: Number(rating),
      duration: Number(duration), 
      price: Number(price),
      hashtags: hashtags.split(',').map(tag => tag.trim()),
      city: cityName
    };

    dispatch(addItinerary(newItinerary));
    navigate(`/cities/${cityId}`); 
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Add New Itinerary</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profile Picture URL</Form.Label>
              <Form.Control 
                type="text" 
                value={profilePicture} 
                onChange={(e) => setProfilePicture(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control 
                type="number" 
                value={rating} 
                onChange={(e) => setRating(e.target.value)} 
                required 
                min="0" 
                max="10" 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration (days)</Form.Label>
              <Form.Control 
                type="number" 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                required 
                min="1" 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
                min="1" 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hashtags</Form.Label>
              <Form.Control 
                type="text" 
                value={hashtags} 
                onChange={(e) => setHashtags(e.target.value)} 
                required 
              />
            </Form.Group>
            <Row className="mt-4">
              <Col className="text-start">
                <Button variant="secondary" onClick={() => navigate(`/cities/${cityId}`)}>Back</Button>
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

export default ItineraryForm;