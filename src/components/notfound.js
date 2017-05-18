import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
// import logo from './img/logo.svg';
import './scss/App.scss';

import user from '../model/user';


const history = createHistory({
  forceRefresh: true,
});

/**
 * Class for NotFound component
 * @extends Component
 */
class NotFound extends Component {

/* Push user to login page if not logged in */
  componentWillMount() {
    if (!user.isLoggedin) {
      history.push('/login');
    }
  }

/**
 * Renders component
 * @return {ReactElement}
 */
  render() {
    return (
      <div className="App">
        <div className="App-header">

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
