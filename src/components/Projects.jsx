import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../assets/data';
import '../sass/Projects.scss';

export default function Projects({ search }) {
  return (
    <section
      id='projects'
    >
      {PROJECTS.filter(({name, technologies}) => {
        if(search === 'Todos') return true;
        return name.includes(search) || technologies.some((tech) => tech === search)})
        .map((project) => {
          const {name, image } = project;
          return (
            <ProjectItem
              name={ name }
              image={ image }
              key={ name }
            />
          )
        })}
      {!PROJECTS.some(({name, technologies}) => {
        if(search === 'Todos') return true;
        return name.includes(search) || technologies.some((tech) => tech === search)})
      && (<h1>Poxa, ainda estou trabalhando com essa tecnologia, o projeto ainda não está pronto</h1>)}
    </section>
  )
};
