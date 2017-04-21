import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import logo from './img/logo.svg';
import './scss/App.scss';
import user from '../model/user';

const history = createHistory({
  forceRefresh: true,
});
let userClick = false;
let LoginButton = React.createClass({
  onSignIn(googleUser) {
    const w3 = googleUser.getBasicProfile();
    console.log('user signed in', userClick);
    if (userClick === true) {
      user.Login(w3);
      history.push('/');

    };
  },
  onClick: function(googleUser) {
    console.log('clicked');
    userClick = true;

  },
  renderGoogleLoginButton: function() {
    console.log('rendering google signin button')
    gapi.signin2.render('my-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn,
      onfailure: this.onfailure,
    });
  },

  componentDidMount: function() {
    window.addEventListener('google-loaded',this.renderGoogleLoginButton);
  },

  render: function() {
    return (
       <div id="my-signin2" onClick={this.onClick}>Sign in with google</div>
    );
  }

});
class Login extends Component {

  componentWillMount() {
    if (user.isLogin) {
      history.push('/');
    }
  }
  onFailure(error) {
    console.log('error',error);
  }
	onSignIn(googleUser) {
		let profile = googleUser.getBasicProfile();
    console.log('profile is :', profile);
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
        <LoginButton />
      </div>
    );
  }
}
export default Login;
