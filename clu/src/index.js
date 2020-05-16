import { React } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App, { Register, Login } from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
  
    <Switch>
      <Route path='/' render={() => (
        <App />
      )} />
      <Route path='/Register' render={() => (
        <Register />
      )} />
      <Route path='/Login' render={() => (
        <Login />
      )} />
    </Switch>
  
</BrowserRouter> , document.getElementById('clu'))
)
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
