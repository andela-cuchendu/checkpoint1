import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';
import logo from './img/logo.svg';
import './scss/App.scss';

const history = createHistory({
  forceRefresh: true,
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
    this.responseGoogleFailure = this.responseGoogleFailure.bind(this);
  }
  responseGoogleSuccess(response) {
    const userobj = { name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl };
    const { user } = this.props;
    user.login(userobj);
    history.push('/');
  }
  responseGoogleFailure(response) {
    console.log('This is failure call back with error: ', response);
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
        <GoogleLogin
          clientId={'1096974446096-dh2ug8hmser1u7qqk9v1pe8ujkn7ih7t.apps.googleusercontent.com'}
          onSuccess={this.responseGoogleSuccess}
          onFailure={this.responseGoogleFailure}
          offline={false}
        >
          <span> Login with Google+</span>
        </GoogleLogin>
      </div>
    );
  }
}

export default Login;
