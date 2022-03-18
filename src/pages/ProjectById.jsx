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

  const changeBlur = () => {
    if(menu === 'menu-show') return 'hasShow';
    if(menu === 'menu-empty') return 'empty';
    return 'hasHidden'
  };

  return (
    <>
      <Header isRoot={ false } />
      <main className={ `project-individual ${changeBlur()}`}>
        <iframe src={ `https://gabrielbenedicto.com/${name}` } title={ name }></iframe>
      </main>
      <Footer />
      <Menu isRoot={ false }/>
    </>
  );
}
