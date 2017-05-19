/* global gapi */
import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import user from '../model/User';

const history = createHistory({
  forceRefresh: true,
});
let userClick = false;
let Parent = null; // For gapi to access this component

/**
 * This Class generates the google login button
 * @extends Component
 */
class GoogleButton extends Component {
/**
 * Bind the onSiginIn function with this class.
 * @constructor
 */
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
 * Saves user details using user model then redirect to landin page
 * @param {Object} googleUser 
 * @return {void}
 */
  onSignIn(googleUser) {
    const w3 = googleUser.getBasicProfile();
    if (userClick === true) {
      user.Login(w3);
      history.push('/');
    }
  }

/**
 * Ensures that the google button is clicked.
 *If not, redirection will not occur.
 */
  onClick() {
    userClick = true;
  }

/**
 * This function renders the google button and registers the callback
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
 * Renders the component
 * @return {ReactElement}
 */
  render() {
    return (
      <div id="my-signin2" onClick={this.onClick} role="button" >Sign in with google</div>
    );
  }

}

export default GoogleButton;
