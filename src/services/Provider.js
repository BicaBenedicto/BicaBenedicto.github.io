import React, { useState, useEffect } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [projectName, setProjectName] = useState('Pixel Art');
  const [projectImage, setProjectImage] = useState('');
  const [projectHasShow, projectToggleShow] = useState('notStarted');
  const [theme, isDarkTheme] = useState(false);
  const [menu, toggleMenu] = useState(false);

  const STORE = {
    projects: {
      projectName,
      setProjectName,
      projectImage,
      setProjectImage,
      projectHasShow,
      projectToggleShow,
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
