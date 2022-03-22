import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectById from './pages/ProjectById';
import './assets/output.css';
import './App.css';
import NotFound from './pages/NotFound';
import Context from './services/Context';
import Contact from './pages/Contact';

const URL = 'https://gabrielbenedicto-backend.herokuapp.com/';

export default function App() {
  const { theme, isDarkTheme, data } = useContext(Context);
  const { setProjects, setTechnologies } = data;

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
    const Func = async () => {
    const [dataProjects, dataTechnologies] = await Promise.all([fetch(`${URL}projects`), fetch(`${URL}technologies`)]);
    console.log('--------------------');
    console.log(dataTechnologies);
    console.log('--------------------');
    const technologies = await dataTechnologies.json()
    setTechnologies(technologies);
    console.log(technologies);
    const projects = await dataProjects.json();
    console.log(projects);
    setProjects(projects);

    };
    Func();

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
      <Route path="*">
        <Portfolio id="portfolio">
          <NotFound />
        </Portfolio>
      </Route>
    </Switch>
  );
}
