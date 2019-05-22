import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import LoginWithEmail from './Components/Login/LoginEmail.js';
import Home from './Components/HomeScreen/Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div className="sheet">
            <Route exact path='/' component={App} />
            <Route path='/loginEmail' component={LoginWithEmail} />
            <Route path='/Home' component={Home} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
