import React, { useContext } from 'react';
import '../sass/ProjectById.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import Menu from '../components/Menu';
import Context from '../services/Context';

export default function ProjectById() {
  const { menu } = useContext(Context);
  const { name } = useParams();

  return (
    <>
      <Header isRoot={ false } />
      <main className={ `project-individual ${menu ? 'hasShow' : 'hasHidden'}`}>
        <iframe src={ `https://gabrielbenedicto.com/${name}` } title={ name }></iframe>
      </main>
      <Footer />
      <Menu isRoot={ false }/>
    </>
  );
}
