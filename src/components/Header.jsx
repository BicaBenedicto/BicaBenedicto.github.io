import React from 'react';
import { useHistory } from 'react-router';
import '../sass/Header.scss';

export default function Header({ isRoot = true }) {
  const history = useHistory();
  return (
    <header id='header-top'>
      <button className='button-logo' onClick={ () => history.push('/') }>
        <h1 className="logo-title">{ '{ Gabriel Benedicto }' }</h1>
      </button>
      <nav id='header-menu'>
        <a className='nav-link' href={isRoot ? '#home' : '/#home'}>Home</a>|
        <a className='nav-link' href={isRoot ? '#project' : '/#project'}>Projetos</a>|
        <a className='nav-link' href={isRoot ? '#portfolio-contact' : '/#portfolio-contact'}>Contato</a>
      </nav>
    </header>
  )
};
