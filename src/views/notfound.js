import createHistory, {DOM} from 'history/createBrowserHistory';
import React, { Component } from 'react';
// import logo from './img/logo.svg';
import './scss/App.scss';

import user from '../model/user';


const history = createHistory({
  forceRefresh: true,
});

class NotFound extends Component {
  componentWillMount() {
    if (!user.isLogin) {
      history.push('/login');
    }
  }
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
