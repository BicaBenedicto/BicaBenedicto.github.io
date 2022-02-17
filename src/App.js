import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Trybewallet from './projects/builds/trybewallet/App';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects/trybewallet" component={ Trybewallet } />
    </Switch>
  );
}
