// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store/store';

ReactDOM.render(
  <Provider store={store}> {/* Providing the Redux store to the app */}
    <App />
  </Provider>,
  document.getElementById('root')
);
