import React from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../assets/data';
import '../sass/Projects.scss';

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
