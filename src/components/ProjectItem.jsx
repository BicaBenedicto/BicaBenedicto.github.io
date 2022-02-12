import React, { useContext } from 'react';
import '../css/Projects.css';
import Context from '../services/Context.js';

export default function ProjectItem({ name, image }) {
  const { projects } = useContext(Context);
  const { setProjectName, setProjectImage, projectToggleShow } = projects;

  const onProjectClick = () => {
    setProjectName(name);
    setProjectImage(image);
    return projectToggleShow(true);
  };

  return (
    <button
      type="button"
      className="project-div"
      onClick={ onProjectClick }
    >
      <span>{ name }</span>
      <img className='project-img' src={ image } alt={ name }/>
    </button>
  )
};
