import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import user from '../model/User';

const history = createHistory({
  forceRefresh: true,
});

/**
 * Class for logout component
 * @extends Component
 */
class Logout extends Component {

/* logout user */
  componentWillMount() {
    if (user.isLoggedin) {
      user.logOut();
      history.push('/login');
    } else {
      history.push('/login');
    }
  }
}
export default Logout;
