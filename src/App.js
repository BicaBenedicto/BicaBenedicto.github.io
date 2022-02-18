import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Trybewallet from './projects/builds/trybewallet/App';
import Trybetunes from './projects/builds/trybetunes/App';
// import Trivia from './projects/builds/trivia-react-redux/App';

export default function App() {

  return (
    <Switch>
      <div id="portfolio">
        <Route exact path="/" component={ Home } />
      </div>
      <div id="trybewallet">
        <Route path="/projects/trybewallet" component={ Trybewallet } />
      </div>
      <div id="trybetunes">
        <Route path="/projects/trybetunes" component={ Trybetunes } />
      </div>
      {/* <Route path="/projects/trivia" component={ Trivia } /> */}
    </Switch>
  );
}
