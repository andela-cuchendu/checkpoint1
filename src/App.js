import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import Logout from './components/Logout';
import NewsSources from './components/NewsSources';
import News from './components/News';
import Login from './components/Login';
import user from './model/User';


import NotFound from './components/NotFound';

const history = createHistory();

/**
 * @return {ReactComponent}
 * Application entry point
 */
function App() {
  return (
    <Router history={history} user={user} >
      <div className="secondry">
        <Header user={user} />
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
