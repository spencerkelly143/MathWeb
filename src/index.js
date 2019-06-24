import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';

import App from './App.js';
import Router from './Router.js'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter> <Router /> </BrowserRouter>, document.getElementById('root'));
