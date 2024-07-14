import axios from 'axios';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAILURE
} from './actionTypes';

const fetchCitiesRequest = () => ({
  type: FETCH_CITIES_REQUEST,
});

const fetchCitiesSuccess = (cities) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities,
});

const fetchCitiesFailure = (error) => ({
  type: FETCH_CITIES_FAILURE,
  payload: error,
});

export const fetchCities = () => (dispatch) => {
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

const addCityRequest = () => ({
  type: ADD_CITY_REQUEST,
});

const addCitySuccess = (city) => ({
  type: ADD_CITY_SUCCESS,
  payload: city,
});

const addCityFailure = (error) => ({
  type: ADD_CITY_FAILURE,
  payload: error,
});

export const addCity = (city) => (dispatch) => {
  dispatch(addCityRequest());
  return axios.post('http://localhost:5000/cities', city)
    .then(response => {
      const newCity = response.data;
      dispatch(addCitySuccess(newCity));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(addCityFailure(errorMsg));
    });
};
