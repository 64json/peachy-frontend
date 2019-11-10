import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Plan from '../Plan';
import Login from '../Login';
import './stylesheet.scss';
import Main from '../Main';
import MyProfile from '../MyProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/plan">
            <Plan/>
          </Route>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/profile">
            <MyProfile/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
