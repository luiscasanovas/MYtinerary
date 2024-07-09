import axios from 'axios';
import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE,
  ADD_ITINERARY_REQUEST,
  ADD_ITINERARY_SUCCESS,
  ADD_ITINERARY_FAILURE
} from './actionTypes';

const fetchItinerariesRequest = () => {
  return {
    type: FETCH_ITINERARIES_REQUEST
  };
};

const fetchItinerariesSuccess = (itineraries) => {
  return {
    type: FETCH_ITINERARIES_SUCCESS,
    payload: itineraries
  };
};

const fetchItinerariesFailure = (error) => {
  return {
    type: FETCH_ITINERARIES_FAILURE,
    payload: error
  };
};

export const fetchItineraries = (cityName) => {
  return (dispatch) => {
    dispatch(fetchItinerariesRequest());
    axios.get(cityName ? `http://localhost:5000/itineraries?cityName=${cityName}` : 'http://localhost:5000/itineraries')
      .then(response => {
        const itineraries = response.data;
        dispatch(fetchItinerariesSuccess(itineraries));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchItinerariesFailure(errorMsg));
      });
  };
};

const addItineraryRequest = () => {
  return {
    type: ADD_ITINERARY_REQUEST
  };
};

const addItinerarySuccess = (itinerary) => {
  return {
    type: ADD_ITINERARY_SUCCESS,
    payload: itinerary
  };
};

const addItineraryFailure = (error) => {
  return {
    type: ADD_ITINERARY_FAILURE,
    payload: error
  };
};

export const addItinerary = (itinerary) => {
  return (dispatch) => {
    dispatch(addItineraryRequest());
    axios.post('http://localhost:5000/itineraries', itinerary)
      .then(response => {
        const newItinerary = response.data;
        dispatch(addItinerarySuccess(newItinerary));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(addItineraryFailure(errorMsg));
      });
  };
};
