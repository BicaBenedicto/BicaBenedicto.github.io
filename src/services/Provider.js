import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [projectName, setProjectName] = useState('Pixel Art');
  const [projectImage, setProjectImage] = useState('');
  const [projectHasShow, projectToggleShow] = useState('notStarted');
  const [theme, isDarkTheme] = useState(false);
  const [menu, toggleMenu] = useState('menu-empty');
  const [projects, setProjects] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [favoriteProjects, setFavoriteProjects] = useState('');
  const [logged, isLogged] = useState(false);

  const STORE = {
    data: {
      projects,
      setProjects,
      favoriteProjects,
      setFavoriteProjects,
      technologies,
      setTechnologies,
    },
    projects: {
      projectName,
      setProjectName,
      projectImage,
      setProjectImage,
      projectHasShow,
      projectToggleShow,
    },
    login: {
      logged,
      isLogged,
    },
    theme: (theme ? 'Dark' : 'Light'),
    isDarkTheme,
    menu,
    toggleMenu,
  };

  return (
    <Context.Provider value={ STORE }>
      { children }
    </Context.Provider>
  );
};
