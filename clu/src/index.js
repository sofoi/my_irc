import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Register, Login } from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory, } from 'react-router-dom';

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Contact} />
         <Route path = "home" component = {Home} />
         <Route path = "register" component = {Register} />
         <Route path = "login" component = {Login} />
      </Route>
   </Router>
), document.getElementById('clu'));
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
