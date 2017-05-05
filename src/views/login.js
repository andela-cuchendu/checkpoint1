import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import './scss/App.scss';
import user from '../model/user';
import GoogleButton from './googlebutton';

const history = createHistory({
  forceRefresh: true,
});

class Login extends Component {

  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to Jax News Feed</h2>
        </div>
        <p className="App-intro">
          To get started, click on the button below to sign in with Google+
        </p>
        <div className="wrapper">
          <GoogleButton />
        </div>
      </div>
    );
  }
}
export default Login;

