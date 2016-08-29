require('babel-core/register')({
    presets: ['es2015', 'react']
});

var express = require('express');
var ReactDOMServer = require('react-dom/server');
var app = express();

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './dev/reducers';
import App from './dev/components/App';

app.use(express.static('www'));


app.get('/', function(request, response) {
  const logger = createLogger();
  const store = createStore(
      allReducers,
      applyMiddleware(promise, logger)
  );

  var html = ReactDOMServer.renderToString(

    <Provider store={store}>
      <App />
      </Provider>
    );
    var str = "<div id='app-container'>" + html + "</div><script src='scripts/bundle.min.js'></script>"
    response.send(str);
});

var PORT = 7000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
