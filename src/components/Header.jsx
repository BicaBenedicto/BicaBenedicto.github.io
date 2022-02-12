import React from 'react';

export default function Header() {
  return (
    <header id='header-top'>
      <h1 class="logo-title">{ '{ Gabriel Benedicto }' }</h1>
      <nav id='header-menu'>
        <a class='nav-link' href='#home'>Home</a>|
        <a class='nav-link' href='#project'>Projetos</a>|
        <a class='nav-link' href='#contact'>Contato</a>
      </nav>
    </header>
  )
};
