import React from 'react';
import linkedin from '../images/linkedin-icon.webp';
import github from '../images/github-icon.webp';

export default function Footer() {
  return (
    <footer id='footer' className='container'>
      <span>Criado com carinho por Gabriel Benedicto</span>
      <a href='https://www.linkedin.com/in/gabrielbenedicto/' target='_blank' rel="noreferrer">
        <img className='rede-social' src={ linkedin } alt='Linkedin'/>
      </a>
      <a href='https://github.com/BicaBenedicto' target='_blank' rel="noreferrer">
        <img className='rede-social git' src={ github } alt='GitHub'/>
      </a>
      <a href="mailto:gabrielpbenedicto@gmail.com" className="link-none">
        gabrielpbenedicto@gmail.com
      </a>
    </footer>
  )
};
