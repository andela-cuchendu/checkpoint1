import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './components/header';
import Logout from './components/logout';
import NewsSources from './components/newssources';
import News from './components/news';
import Login from './components/login';
import user from './model/user';


import NotFound from './components/notfound';

const history = createHistory();

function App() {
  return (
    <Router history={history} user={user} >
      <div className="secondry">
        <Menu user={user} />
        <Switch>
          <Route component={NewsSources} exact path="/" />
          <Route component={News} exact path="/articles/:id&:sort" />
          <Route component={News} exact path="/:id&:sort" />
          <Route component={Login} exact path="/login" />
          <Route component={Logout} exact path="/logout" />
          <Route component={NotFound} exact path="/:id" />
          <Route component={NotFound} exact path="*" />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
