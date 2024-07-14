import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { Container, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRating from './StarRating';

const CityDetail = () => {
  const dispatch = useDispatch();
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
    <Container className="itineraries-container">
      <Row>
        <Col>
          <h2 className="text-center fadeIn">Itineraries for {cityName}</h2>
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
        </Col>
      </Row>
    </Container>
  );
};

export default CityDetail;
