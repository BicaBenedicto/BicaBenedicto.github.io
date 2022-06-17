import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectById from './pages/ProjectById';
import Login from './pages/Login';
import Manager from './pages/Manager';
import './assets/output.css';
import './App.css';
import NotFound from './pages/NotFound';
import Context from './services/Context';
import Contact from './pages/Contact';

const URL = 'https://gabrielbenedicto-backend.herokuapp.com/';

export default function App() {
  const { theme, isDarkTheme, data } = useContext(Context);
  const { setProjects, setTechnologies, setFavoriteProjects } = data;

  const Portfolio = styled.div`
    background-color: ${props => props.theme[`background${theme}`]};
    color: ${props => props.theme[`text${theme}`]};
  `;

  useEffect(() => {
    const themeExistis = JSON.parse(localStorage.getItem('theme'));
    if(themeExistis) {
      const themeSet = () => themeExistis === 'dark' ? isDarkTheme(true) : isDarkTheme(false);
      themeSet();
    } else {
      const themeUser = window.matchMedia('(prefers-color-scheme: dark)');
      themeUser.matches ? isDarkTheme(true) : isDarkTheme(false);
    }
    (async () => {
    const [dataProjects, dataTechnologies] = await Promise.all([fetch(`${URL}projects`), fetch(`${URL}technologies`)]);
    const [technologies, projects] = await Promise.all([dataTechnologies.json(), dataProjects.json()]);

    const favoriteProjects = projects.filter((project) => project.favorited);

    setTechnologies(technologies);
    setProjects(projects);
    setFavoriteProjects(favoriteProjects);
    })();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Portfolio id="portfolio">
          <Home />
        </Portfolio>
      </Route>
      <Route path="/contact">
        <Portfolio id="portfolio">
          <Contact />
        </Portfolio>
      </Route>
      <Route path="/projects/:name">
        <Portfolio id="portfolio">
          <ProjectById />
        </Portfolio>
      </Route>
      <Route path="/projects">
        <Portfolio id="portfolio">
          <Projects />
        </Portfolio>
      </Route>
      <Route path="/login">
        <Portfolio id="portfolio">
          <Login />
        </Portfolio>
      </Route>
      <Route path="/manager">
        <Portfolio id="portfolio">
          <Manager />
        </Portfolio>
      </Route>
      <Route path="*">
        <Portfolio id="portfolio">
          <NotFound />
        </Portfolio>
      </Route>
    </Switch>
  );
}
