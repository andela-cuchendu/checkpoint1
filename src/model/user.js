import Cookies from 'js-cookie';

class User {
  constructor() {
    this.userDetails = Cookies.get('mynewsapp') === undefined ? undefined : JSON.parse(Cookies.get('mynewsapp'));
    this.isLogin = this.isLoggedIn();
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }
  Login(context) {
    Cookies.set('mynewsapp', {
      name: context.ig,
      email: context.U3,
      imageUrl: context.Paa,
    });
    this.isLogin = true;
    this.userDetails = context;
    this.assignUserValues();
  }
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  assignUserValues() {
    if (this.isLogin) {
      this.favorites = this.userDetails.favorites;
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  removeUserValues() {
    delete this.favorites;
    delete this.name;
    delete this.email;
    delete this.imageUrl;
  }
  logOut() {
    this.isLogin = false;
    Cookies.remove('mynewsapp');
    this.removeUserValues();
  }
}
export default new User();
