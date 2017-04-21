import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  forceRefresh: true,
});

class Logout extends Component {
  componentWillMount() {
    const user = this._reactInternalInstance._hostParent._currentElement.props.children['0'].props.user;
    if (user.isLogin) {
      console.log('user is in, log him out');
      //user.logOut();
      //history.push('/login');
    }
    else {
      console.log('user is not in, keep him in log in');
      history.push('/login');
    }
  }
}
export default Logout;
