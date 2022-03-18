import React, { useContext } from 'react';
import '../sass/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Context from '../services/Context';
import Menu from '../components/Menu';

export default function Home() {
  const { projects, menu } = useContext(Context);
  const { projectHasShow } = projects;

  return (
    <>
      <Header isRoot={ true } />
      <main className={projectHasShow === 'hasShow' || menu ? 'hasShow' : projectHasShow} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <About />
        <Skills />
        <FeaturedProjects lookAll={ true} />
        <Contact />
      </main>
      <Footer />
      <Project />
      <Menu isRoot={ true }/>
    </>
  );
}
