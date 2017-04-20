import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './components/header';
import Logout from './views/logout';
import Login from './views/login';
import user from './model/user';



const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Menu user={user} />
        <Route exact path="/" component={Login} user={user} />
        <Route exact path="/logout" component={Logout} user={user} />
      </div>
    </Router>
  );
}

export default App;
