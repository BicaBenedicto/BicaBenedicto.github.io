import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Trybewallet from './projects/builds/trybewallet/App';
import Trybetunes from './projects/builds/trybetunes/App';
import Trivia from './projects/builds/trivia-react-redux/App';
import DrinksAndFoods from './projects/builds/drinks-and-foods-recipes/App';
import './assets/output.css';
import './App.css';

export default function App() {

  return (
    <Switch>
      <Route exact path="/">
        <div id="portfolio">
          <Home />
        </div>
      </Route>
      <Route path="/projects/trybewallet">
        <div id="trybewallet">
          <Trybewallet />
        </div>
      </Route>
      <Route path="/projects/trybetunes">
        <div id="trybetunes" className="local-bootstrap">
          <Trybetunes />
        </div>
      </Route>
      <Route path="/projects/trivia">
        <div id="trivia" className="local-bootstrap">
          <Trivia />
        </div>
      </Route>
      <Route path="/projects/drinks-and-foods">
        <div id="drinks-and-foods" className="local-bootstrap">
          <DrinksAndFoods />
        </div>
      </Route>
    </Switch>
  );
}
