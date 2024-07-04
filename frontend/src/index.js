import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Ensure this import is present
import store from './store/store'; // Ensure you have the correct path to your store
import App from './App';
import './index.css';

// Remove unused imports or use them appropriately
// If you are not using them, remove them to avoid warnings
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './store/reducers/rootReducer';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
