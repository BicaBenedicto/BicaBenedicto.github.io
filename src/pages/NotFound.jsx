import React, { useContext } from 'react';
import "@lottiefiles/lottie-player";
import '../sass/NotFound.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import Context from '../services/Context';
import Menu from '../components/Menu';
import NotFoundComponent from '../components/NotFound.jsx';

export default function NotFound() {
  const { projects, menu } = useContext(Context);
  const { projectHasShow } = projects;

  const changeBlur = () => {
    if(projectHasShow === 'hasShow' || menu === 'menu-show') return 'hasShow';
    if(projectHasShow === 'notStarted' || menu === 'menu-empty') return 'empty';
    return 'hasHidden'
  };

  return (
    <>
      <Header isRoot={ false } />
      <main className={ `projects-portfolio ${changeBlur()}`} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <NotFoundComponent />
        <FeaturedProjects lookAll={ false }/>
      </main>
      <Footer />
      <Project />
      <Menu isRoot={ false }/>
    </>
  );
}
