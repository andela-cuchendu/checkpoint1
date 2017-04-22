import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './components/header';
import Link from './components/link';
import Logout from './views/logout';
import NewsSourcesView from './views/newssourcesview';
import NewsView from './views/newsview';
import Login from './views/login';
import user from './model/user';


import NotFound from './views/notfound';

const history = createHistory();

function App() {
  return (
    <Router history={history} user={user} >
      <div>
        <Menu user={user} />
        <Switch>
          <Route component={NewsSourcesView} exact path="/" />
          <Route component={NewsView} exact path="/articles/:id&:sort" />
          <Route component={NewsView} exact path="/:id&:sort" />
          <Route component={Login} exact path="/login" />
          <Route component={Logout} exact path="/logout" />
          <Route component={Link} exact path="/link" />
          <Route component={NotFound} exact path="/:id" />
          <Route component={NotFound} exact path="*" />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
