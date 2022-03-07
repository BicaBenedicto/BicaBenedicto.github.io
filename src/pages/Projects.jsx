import React, { useContext } from 'react';
import '../sass/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import ProjectsComponent from '../components/Projects';
import Context from '../services/Context';

export default function Projects() {
  const { projects } = useContext(Context);
  const { projectHasShow } = projects;

  return (
    <>
      <Header isRoot={ false } />
      <main className={projectHasShow ? 'blur projects-portfolio' : 'not-blur projects-portfolio'} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <FeaturedProjects lookAll={ false }/>
        <h1 className='center-title'>Projetos</h1>
        <ProjectsComponent />
      </main>
      <Footer />
      <Project />
    </>
  );
}
