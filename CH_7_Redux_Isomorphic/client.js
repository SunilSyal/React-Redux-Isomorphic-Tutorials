import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './dev/components/App';
import {Provider} from 'react-redux';
import allReducers from './dev/reducers';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(promise, logger)
);

ReactDOM.render(
  <Provider store = { store }>
        <App />
  </Provider>,
    document.getElementById('app-container')
);
