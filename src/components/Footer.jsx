import React, { useContext } from 'react';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';
import '../sass/Footer.scss';
import Context from '../services/Context';
import styled from 'styled-components';

export default function Footer() {
  const { theme } = useContext(Context);

  const Footer = styled.footer`
    background-color: ${props => props.theme[`header${theme}`]};
  `;
  return (
    <Footer id='footer' className='container'>
      <span>Criado com carinho por Gabriel Benedicto</span>
      <div>
        <a href='https://www.linkedin.com/in/gabrielbenedicto/' target='_blank' rel="noreferrer">
          <img className='rede-social' src={ linkedin } alt='Linkedin'/>
        </a>
        <a href='https://github.com/BicaBenedicto' target='_blank' rel="noreferrer">
          <img className='rede-social git' src={ github } alt='GitHub'/>
        </a>
      </div>
      <a href="mailto:gabrielpbenedicto@gmail.com" className="link-none">
        gabrielpbenedicto@gmail.com
      </a>
    </Footer>
  )
};
