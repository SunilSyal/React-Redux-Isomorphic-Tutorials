import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createStore} from 'redux';

const store = createStore(
    allReducers
);

ReactDOM.render(
  <Provider store = { store }>
        <App />
  </Provider>,
    document.getElementById('app-container')
);