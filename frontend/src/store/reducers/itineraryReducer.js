import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE,
  ADD_ITINERARY_REQUEST,
  ADD_ITINERARY_SUCCESS,
  ADD_ITINERARY_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  itineraries: [],
  error: ''
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITINERARIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ITINERARIES_SUCCESS:
      return {
        loading: false,
        itineraries: action.payload,
        error: ''
      };
    case FETCH_ITINERARIES_FAILURE:
      return {
        loading: false,
        itineraries: [],
        error: action.payload
      };
    case ADD_ITINERARY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_ITINERARY_SUCCESS:
      return {
        loading: false,
        itineraries: [...state.itineraries, action.payload],
        error: ''
      };
    case ADD_ITINERARY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default itineraryReducer;
