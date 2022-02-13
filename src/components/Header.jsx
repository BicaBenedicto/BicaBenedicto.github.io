import React from 'react';
import '../css/Header.css';

export default function Header() {
  return (
    <header id='header-top'>
      <h1 className="logo-title">{ '{ Gabriel Benedicto }' }</h1>
      <nav id='header-menu'>
        <a className='nav-link' href='#home'>Home</a>|
        <a className='nav-link' href='#project'>Projetos</a>|
        <a className='nav-link' href='#contact'>Contato</a>
      </nav>
    </header>
  )
};
