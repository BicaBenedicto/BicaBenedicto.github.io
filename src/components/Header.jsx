import React from 'react';
import '../sass/Header.scss';

export default function Header({ isRoot = true }) {
  return (
    <header id='header-top'>
      <h1 className="logo-title">{ '{ Gabriel Benedicto }' }</h1>
      <nav id='header-menu'>
        <a className='nav-link' href={isRoot ? '#home' : '/#home'}>Home</a>|
        <a className='nav-link' href={isRoot ? '#project' : '/#project'}>Projetos</a>|
        <a className='nav-link' href={isRoot ? '#portfolio-contact' : '/#portfolio-contact'}>Contato</a>
      </nav>
    </header>
  )
};
