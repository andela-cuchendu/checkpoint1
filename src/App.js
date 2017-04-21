import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './components/header';
import Logout from './views/logout';
import NewsSourcesView from './views/newssourcesview';
import NewsView from './views/newsview';
import Login from './views/login';
//import NotFound from './views/notfound';
import user from './model/user';


const history = createHistory();

function App() {
  return (
    <Router history={history} user={user}>
      <div>
        <Menu user={user} />
        <Route exact path="/" component={NewsSourcesView} />
        <Route exact path="/articles/:id&:sort" component={NewsView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
