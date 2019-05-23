import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import Home from './Components/HomeScreen/Home.js';
import RegisterForm from './Components/Login/RegisterForm.js';
import SosScreen from './Components/SosScreen/SosScreen.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div className="sheet">
            <Route exact path='/' component={App} />
            <Route path='/Home' component={Home} />
            <Route path='/RegisterForm' component={RegisterForm} />
            <Route path='/SosScreen' component={SosScreen} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
