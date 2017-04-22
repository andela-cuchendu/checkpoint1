import Cookies from 'js-cookie';

class User {
  constructor() {
    this.userDetails = Cookies.get('mynewsapp') === undefined ? undefined : JSON.parse(Cookies.get('mynewsapp'));
    this.isLogin = this.isLoggedIn();
    this.favorites = '';
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
  addFavorites(newItem) {
    let exists = false;
    this.favorites.forEach((item) => {
      if (item === newItem) {
        exists = true;
        return true;
      }
      return true;
    });
    if (!exists) {
      if (this.isLogin) {
        this.favorites.push(newItem);
        const userobj = {
          name: this.name,
          email: this.email,
          imageUrl: this.imageUrl,
          favorites: this.favorites,
        };
        Cookies.set('mynewsapp', userobj);
      }
    }
  }
  removeFavourite(item, index) {
    this.favorites.splice(index, 1);
  }
  logOut() {
    this.isLogin = false;
    Cookies.remove('mynewsapp');
  }
}
export default new User();
