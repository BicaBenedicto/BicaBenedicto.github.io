import React, { useContext } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Context from '../services/Context';

export default function Home() {
  const { projects } = useContext(Context);
  const { projectHasShow } = projects;

  return (
    <>
      <Header />
      <main className={projectHasShow ? 'blur' : 'not-blur'}>
        <About />
        <Skills />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
      <Project />
    </>
  );
}