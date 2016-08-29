import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';

ReactDOM.render(
        <App passion="Singing">
        </App>,
    document.getElementById('app-container')
);
