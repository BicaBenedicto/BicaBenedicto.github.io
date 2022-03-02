import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../assets/data';
import '../css/Projects.css';

export default function Projects() {
  return (
    <section
      id='projects'
    >
      {PROJECTS.map(({name, image}) => (
        <ProjectItem
          name={ name }
          image={ image }
          key={ name }
        />
      ))}
    </section>
  )
};
