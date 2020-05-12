import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
      <ul>
      <li><Link to="home">Home</Link></li>
      <li><Link to="login">Login</Link></li>
      <li><Link to="register">Register</Link></li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}

export default App;



export class Home extends React.Component {
  render() {
    return (
      <h1>Home Page Content</h1>
    )
  }
}



export class Login extends React.Component {
  render() {
    return (
      <h1>Login Page Content</h1>
    )
  }
}


export class Register extends React.Component {
  render()  {
    return (
      <h1>Register Page Content</h1>
    )
  }
}



