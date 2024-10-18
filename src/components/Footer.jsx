import React, { useContext } from 'react';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';
import '../sass/Footer.scss';
import Context from '../services/Context';
import styled from 'styled-components';

const Footer = styled.footer`
background-color: ${props => props.theme[`header${props.type}`]};
`;

const A = styled.a`
color: ${props => props.theme[`button${props.type}`]}!important;
`;

const Span = styled.span`
color: ${props => props.theme[`button${props.type}`]};
`;

export default function FooterComponet() {
  const { theme } = useContext(Context);

  return (
    <Footer type={theme} id='footer' className='container'>
      <Span type={theme} >Criado com carinho por Gabriel Benedicto</Span>
      <div>
        <a href='https://www.linkedin.com/in/gabrielbenedicto/' target='_blank' rel="noreferrer">
          <img className='rede-social' src={ linkedin } alt='Linkedin'/>
        </a>
        <a href='https://github.com/BicaBenedicto' target='_blank' rel="noreferrer">
          <img className='rede-social git' src={ github } alt='GitHub'/>
        </a>
      </div>
      <A type={theme} href="mailto:gabrielpbenedicto@gmail.com" className="link-none">
        gabrielpbenedicto@gmail.com
      </A>
    </Footer>
  )
};
