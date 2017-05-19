import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import './scss/App.scss';
import user from '../model/user';
import GoogleButton from './googlebutton';

const history = createHistory({
  forceRefresh: true,
});

/**
 * Class for login component
 * @extends Component
 */
class Login extends Component {

/* Push user to landing page if already logged in */
  componentWillMount() {
    if (user.isLoggedin) {
      history.push('/');
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
          Jax News APP is a simple and easy-to-use application that displays
          news sources and then displays headlines currently published on a range
          of these news sources and blogs (70 and counting so far).Welcome to Jax
          News App. Simply put, the App fetches News sources for you, for you to
          select your favorite and read headlines.
        </p>
        <p className="App-intro">
          To get started, click on the button below to sign in with Google+
        </p>
        <div>
          <GoogleButton />
        </div>
      </div>
    );
  }
}
export default Login;

