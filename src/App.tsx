import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from './views/Statistics';
import Label from './views/Label';
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import Tally from './views/Tally';
import Detail from './views/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/tally">
          <Tally/>
        </Route>
        <Route path="/label">
          <Label/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;