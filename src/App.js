import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Trybewallet from './projects/builds/trybewallet/App';
import Trybetunes from './projects/builds/trybetunes/App';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects/trybewallet" component={ Trybewallet } />
      <Route path="/projects/trybetunes" component={ Trybetunes } />
    </Switch>
  );
}
