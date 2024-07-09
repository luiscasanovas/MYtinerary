import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItineraries } from '../store/actions/itineraryActions';
import { Container, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';

const ItineraryList = () => {
  const dispatch = useDispatch();
  const itineraryState = useSelector(state => state.itineraries);
  const { loading, itineraries, error } = itineraryState;

  useEffect(() => {
    dispatch(fetchItineraries());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Itineraries</h2>
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          <ListGroup>
            {itineraries.map(itinerary => (
              <ListGroup.Item key={itinerary._id}>
                <h4>{itinerary.title}</h4>
                <p><strong>City:</strong> {itinerary.city}</p>
                <p><strong>Rating:</strong> {itinerary.rating}</p>
                <p><strong>Duration:</strong> {itinerary.duration} minutes</p>
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

export default ItineraryList;
