import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Trybewallet from './projects/builds/trybewallet/App';
import Trybetunes from './projects/builds/trybetunes/App';
import Trivia from './projects/builds/trivia-react-redux/App';
import DrinksAndFoods from './projects/builds/drinks-and-foods-recipes/App';
import ButtonBackToHome from './components/ButtonBackToHome';
import './assets/output.css';
import './App.css';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <Switch>
      <Route exact path="/">
        <div id="portfolio">
          <Home />
        </div>
      </Route>
      <Route exact path="/projects">
        <div id="portfolio">
          <Projects />
        </div>
      </Route>
      <Route path="/projects/trybewallet">
        <div id="trybewallet">
          <ButtonBackToHome />
          <Trybewallet />
        </div>
      </Route>
      <Route path="/projects/trybetunes">
        <div id="trybetunes" className="local-bootstrap">
          <ButtonBackToHome />
          <Trybetunes />
        </div>
      </Route>
      <Route path="/projects/trivia">
        <div id="trivia" className="local-bootstrap">
          <ButtonBackToHome />
          <Trivia />
        </div>
      </Route>
      <Route path="/projects/drinks-and-foods">
        <div id="drinks-and-foods" className="local-bootstrap">
          <ButtonBackToHome />
          <DrinksAndFoods />
        </div>
      </Route>
      <Route path="*">
        <div id="portfolio">
          <NotFound />
        </div>
      </Route>
    </Switch>
  );
}
