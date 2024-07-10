import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { Container, Row, Col, ListGroup, Spinner, Alert, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import StarRating from './StarRating'; 
const CityDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: cityId } = useParams(); 
  const [cityName, setCityName] = useState('');
  const itineraryState = useSelector(state => state.itineraries);
  const { loading, itineraries, error } = itineraryState;

  useEffect(() => {
    axios.get(`http://localhost:5000/cities/${cityId}`)
      .then(response => {
        setCityName(response.data.name); 
        dispatch(fetchItineraries(response.data.name)); 
      })
      .catch(err => {
        console.error('Error fetching city details:', err);
      });
  }, [dispatch, cityId]);

  const filteredItineraries = itineraries.filter(itinerary => itinerary.city === cityName);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">Itineraries for {cityName}</h2>
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          <ListGroup>
            {filteredItineraries.map(itinerary => (
              <ListGroup.Item key={itinerary._id} className="mb-2 itinerary-item">
                <h5 className="card-title">{itinerary.title}</h5>
                <div><strong>Rating:</strong> <StarRating rating={itinerary.rating} /></div>
                <p><strong>Duration:</strong> {itinerary.duration} {itinerary.duration === 1 ? 'day' : 'days'}</p>
                <p><strong>Price:</strong> ${itinerary.price}</p>
                <p><strong>Hashtags:</strong> {itinerary.hashtags.join(', ')}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row className="mt-4">
            <Col className="text-start">
              <Button variant="secondary" onClick={() => navigate('/cities')}>Back</Button>
            </Col>
            <Col className="text-end">
              <Link to={`/add-itinerary/${cityId}`}>
                <Button variant="primary">Add New Itinerary</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CityDetail;
