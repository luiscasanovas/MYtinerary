import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  cities: cityReducer
});

export default rootReducer;
