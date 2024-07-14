import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  cities: [],
  error: ''
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CITIES_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
        error: ''
      };
    case FETCH_CITIES_FAILURE:
      return {
        loading: false,
        cities: [],
        error: action.payload
      };
    case ADD_CITY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
        error: ''
      };
    case ADD_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default cityReducer;
