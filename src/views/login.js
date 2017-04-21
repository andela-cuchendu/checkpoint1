import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import logo from './img/logo.svg';
import './scss/App.scss';

const history = createHistory({
  forceRefresh: true,
});

class Login extends Component {
  componentWillMount() {
    const user = this._reactInternalInstance._hostParent._currentElement.props.children['0'].props.user;
    if (user.isLogin) {
      console.log('user is in, go home');
    }
  }
  onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  onFailure(error) {
    console.log('error',error);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Jax News Feed</h2>
        </div>
        <p className="App-intro">
          To get started, click on the button below to sign in with Google+
        </p>
        <button
          className="g-signin2"
          onClick={this.onSignIn}
          data-onsuccess="onSignIn"
          data-onfailure="onFailure"
        />
      </div>
    );
  }
}
export default Login;
