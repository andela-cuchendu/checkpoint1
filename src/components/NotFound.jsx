import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import './scss/App.scss';

import user from '../model/User';


const history = createHistory({
  forceRefresh: true,
});

/**
 * This component represents not found page.
 * @class NotFound
 * @extends {Component}
 */
class NotFound extends Component {

  /**
   * Push user to login page if not logged in
   * @memberOf News
   * @return {void}
   */
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
