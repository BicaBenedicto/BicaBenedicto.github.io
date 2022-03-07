import React from 'react';
import linkedin from '../images/linkedin-icon.webp';
import github from '../images/github-icon.webp';
import '../sass/Footer.scss';

export default function Footer() {
  return (
    <footer id='footer' className='container'>
      <span>Criado com carinho por Gabriel Benedicto</span>
      <div>
        <a href='https://www.linkedin.com/in/gabrielbenedicto/' target='_blank' rel="noreferrer">
          <img className='rede-social' src={ linkedin } alt='Linkedin'/>
        </a>
        <a href='https://github.com/BicaBenedicto' target='_blank' rel="noreferrer">
          <img className='rede-social' src={ github } alt='GitHub'/>
        </a>
      </div>
      <a href="mailto:gabrielpbenedicto@gmail.com" className="link-none">
        gabrielpbenedicto@gmail.com
      </a>
    </footer>
  )
};
