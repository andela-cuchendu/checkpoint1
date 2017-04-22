import React, { Component } from 'react';
import logo from './img/logo.svg';
import './scss/App.scss';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="logo" className="App-logo" src={ logo } />
          <h2>Welcome to Jax News Feed</h2>
        </div>
        <p className="App-intro">
          Sorry, Page not found
        </p>
      </div>
    );
  }
}
export default NotFound;
