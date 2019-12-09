import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
// import App from './App';
import App from './Template/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <Router>
    //     <App /> 
    // </Router> // This refers to routing
    <App /> //This App class belongs to bootstrap template
    , document.getElementById('root'));

serviceWorker.unregister();
