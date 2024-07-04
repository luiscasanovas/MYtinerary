import axios from 'axios';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from './actionTypes';

const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST
  };
};

const fetchCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities
  };
};

const fetchCitiesFailure = (error) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error
  };
};

export const fetchCities = () => {
  return (dispatch) => {
    dispatch(fetchCitiesRequest());
    axios.get('http://localhost:5000/cities/all')
      .then(response => {
        const cities = response.data;
        dispatch(fetchCitiesSuccess(cities));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCitiesFailure(errorMsg));
      });
  };
};
