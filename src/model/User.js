import Cookies from 'js-cookie';

/**
 * Class for User model
 */
class User {

  /**
   * Checks if user is logged in
   * @return {void}
   */
  constructor() {
    this.userDetails = Cookies.get('mynewsapp') === undefined ? undefined : JSON.parse(Cookies.get('mynewsapp'));
    this.isLoggedin = this.LoggedIn();
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }

  /**
   * Login a user
   * @param {object} context - User object
   * @return {void}
   */
  Login(context) {
    Cookies.set('mynewsapp', {
      name: context.ig,
      email: context.U3,
      imageUrl: context.Paa,
    });
    this.isLoggedin = true;
    this.userDetails = context;
    this.assignUserValues();
  }

  /**
   * Checks if user is logged in
   * @return {boolean} returns user login status
   */

  LoggedIn() {
    return !(this.userDetails === undefined);
  }

  /**
   * Assigns user details
   * @return {void}
   */

  assignUserValues() {
    if (this.isLoggedin) {
      this.favorites = this.userDetails.favorites;
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }

  /**
   * Removes user details
   * @return {void}
   */
  removeUserValues() {
    delete this.favorites;
    delete this.name;
    delete this.email;
    delete this.imageUrl;
  }

  /**
   * Logs user our
   * @return {void}
   */
  logOut() {
    this.isLoggedin = false;
    Cookies.remove('mynewsapp');
    this.removeUserValues();
  }
}
export default new User();
