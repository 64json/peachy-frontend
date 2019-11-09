import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plan from '../Plan';
import './stylesheet.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/plan">
            <Plan/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
