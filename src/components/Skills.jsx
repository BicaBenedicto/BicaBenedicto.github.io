import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../services/Context';
import illustration from '../images/undraw_programming_re_kg9v.svg';
import '../sass/Skills.scss';
import CarouselAnimation from './CarrouselAnimation.jsx';

const Section = styled.section`
background: ${props => props.theme[`transitionLinear${props.type}`]};
`;

export default function Skills() {
  const { theme } = useContext(Context);

  return (
    <Section id='skills' type={theme}>
      <div className='' style={{ 'width': '100%'}}>
        <ul
          className="hardskills"
        >
        <h3 className='center-title top'>Algumas das linguagens, bibliotecas e ferramentas que utilizo</h3>
          <CarouselAnimation />
        <h2 className='center-title bottom'>Fique tranquilo vou selecionar a ideal para o seu projeto</h2>
        </ul>
      </div>
      <img src={ illustration } className="illustration" alt="illustration"/>
    </Section>
  )
};
