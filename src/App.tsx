import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from './views/Statistics';
import Label from './views/Label';
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import Tally from './views/Tally';
import Detail from './views/Detail';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/detail">
            <Detail/>
          </Route>
          <Route exact path="/tally">
            <Tally/>
          </Route>
          <Route exact path="/label">
            <Label/>
          </Route>
          <Route exact path="/label/:id">
            <Tag/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;