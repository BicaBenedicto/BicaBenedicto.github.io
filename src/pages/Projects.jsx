import React, { useContext, useState } from 'react';
import '../sass/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import ProjectsComponent from '../components/Projects';
import Context from '../services/Context';
import HARDSKILLS from '../assets/data-hardskills';
import Menu from '../components/Menu';

export default function Projects() {
  const { projects, menu } = useContext(Context);
  const { projectHasShow } = projects;
  const [search, setSearch] = useState('Todos');
  const changeFilter = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  return (
    <>
      <Header isRoot={ false } />
      <main className={ `projects-portfolio ${projectHasShow === 'hasShow' || menu ? 'hasShow' : projectHasShow}`} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <FeaturedProjects lookAll={ false }/>
        <h1 className='center-title'>Projetos</h1>
        <select value={ search } onChange={ changeFilter } className="filter-projects-select">
          { Object.entries(HARDSKILLS).concat([['Todos', { name: 'Todos' }]]).map((array, index) => {
            const [item, { name }] = array;
            return <option value={ item } key={ index }>{name}</option>
          }) }
        </select>
        <ProjectsComponent search={ search }/>
      </main>
      <Footer />
      <Project />
      <Menu isRoot={ false }/>
    </>
  );
}
