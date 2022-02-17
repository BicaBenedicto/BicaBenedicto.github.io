import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}
