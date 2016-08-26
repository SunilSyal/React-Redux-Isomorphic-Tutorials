import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';

ReactDOM.render(
        <App propX="Mr. X in Bombay" passion="Singing">
            <span>Rishabh</span>
            <span>Pranav</span>
        </App>,
    document.getElementById('app-container')
);
