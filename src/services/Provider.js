import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [projectName, setProjectName] = useState('Pixel Art');
  const [projectImage, setProjectImage] = useState('');
  const [projectHasShow, projectToggleShow] = useState(false);

  const STORE = {
    projects: {
      projectName,
      setProjectName,
      projectImage,
      setProjectImage,
      projectHasShow,
      projectToggleShow,
    },
  };

  return (
    <Context.Provider value={ STORE }>
      { children }
    </Context.Provider>
  );
};
