import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Context from '../services/Context';
import { PROJECTS } from '../assets/data';
import NotFoundComponent from '../components/NotFound';
import FeaturedProjects from '../components/FeaturedProjects';
import '../sass/ProjectById.scss';

export default function ProjectById() {
  const { menu, theme } = useContext(Context);
  const { name } = useParams();
  const [projectFound, setProjectFound] = useState(false);

  const changeBlur = () => {
    if(menu === 'menu-show') return 'hasShow';
    if(menu === 'menu-empty') return 'empty';
    return 'hasHidden'
  };

  useEffect(() => {
    const projectFounded = PROJECTS.find((item) => item.site.includes(name));
    if(projectFounded) setProjectFound(true);
  }, []);

  const Main = styled.main`
    background-color: ${props => props.theme[`background${theme}`]}
  `;

  return (
    <>
      <Header isRoot={ false } />
      <Main className={ `project-individual ${changeBlur()}`}>
        {projectFound
        ? <iframe src={ `https://gabrielbenedicto.com/${name}` } title={ name }></iframe>
        : <>
        <NotFoundComponent />
        <FeaturedProjects />
        </>}
      </Main>
      <Footer />
      <Menu isRoot={ false }/>
    </>
  );
}
