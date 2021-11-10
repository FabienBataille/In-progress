import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Comment from './components/Comment';
import Home from './components/Home';
import Inscription from './components/Inscription';
import Connection from './components/Connection';
import Profile from './components/Profile';
import Discussion from './components/Discussion';
import Header from './components/Header';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/inscription">
              <Inscription />
            </Route>
            <Route exact path="/connection">
              <Connection />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/discussion">
              <Discussion />
            </Route>
            <Route exact path="/comment">
              <Comment />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
