// src/Redux/store/store.js
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer, // Root reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools support
);

export default store;
