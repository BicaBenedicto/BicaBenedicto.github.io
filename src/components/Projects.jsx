import React, { useContext, useState } from 'react';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '../assets/data';
import '../sass/Projects.scss';
import Context from '../services/Context';
import styled from 'styled-components';

export default function Projects({ search }) {
  const { theme } = useContext(Context);

  const Section = styled.section`
    background: ${props => props.theme[`transitionLinear${theme}`]};
    .project {
      span {
        background-color: ${props => props.theme[`purple${theme}`]};
      }
    }
  `;

  return (
    <Section
      id='projects'
    >
      {PROJECTS.filter(({name, technologies}) => {
        if(search === 'Todos') return true;
        return name.includes(search) || technologies.some((tech) => tech === search)})
        .sort((a, b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        })
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
    </Section>
  )
};
