/* global gapi */
import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import user from '../model/user';

const history = createHistory({
  forceRefresh: true,
});
let userClick = false;
let Parent = null; // For gapi to access this component

/**
 * Class for google button
 * @extends Component
 */
class GoogleButton extends Component {
/* bind onSiginIn function */
  constructor() {
    super();
    Parent = this; // Assign this to Parent for gapi to access callback
    this.onSignIn = this.onSignIn.bind(this);
  }

/** Add event listener to the google button */
  componentDidMount() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
  }

/**
 * Saves user details and redirect to landin page
 * @param {Object} googleUser 
 */
  onSignIn(googleUser) {
    const w3 = googleUser.getBasicProfile();
    if (userClick === true) {
      user.Login(w3);
      history.push('/');
    }
  }

/**
 * Ensures the google button is clicked.
 */
  onClick() {
    userClick = true;
  }

/**
 * Render the google button
 */
  renderGoogleLoginButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: Parent.onSignIn,
      onfailure: Parent.onfailure,
    });
  }

/**
 * Renders component
 * @return {ReactElement}
 */
  render() {
    return (
      <div id="my-signin2" onClick={this.onClick} role="button" >Sign in with google</div>
    );
  }

}

export default GoogleButton;
