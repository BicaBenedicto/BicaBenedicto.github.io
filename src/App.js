import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
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
import Context from './services/Context';

export default function App() {
  const { theme, isDarkTheme } = useContext(Context);

  const Portfolio = styled.div`
    background-color: ${props => props.theme[`background${theme}`]};
    color: ${props => props.theme[`text${theme}`]};
  `;

  useEffect(() => {
  const themeUser = window.matchMedia('(prefers-color-scheme: dark)');
  themeUser.matches ? isDarkTheme(true) : isDarkTheme(false);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Portfolio id="portfolio">
          <Home />
        </Portfolio>
      </Route>
      <Route exact path="/projects">
        <Portfolio id="portfolio">
          <Projects />
        </Portfolio>
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
        <Portfolio id="portfolio">
          <NotFound />
        </Portfolio>
      </Route>
    </Switch>
  );
}
