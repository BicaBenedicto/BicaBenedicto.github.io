import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../services/Context';
import illustration from '../images/undraw_programming_re_kg9v.svg';
import '../sass/Skills.scss';
import CarouselAnimation from './CarrouselAnimation.jsx';
import hardskills from '../assets/data-hardskills';

const Section = styled.section`
background: ${props => props.theme[`transitionLinear${props.type}`]};
`;

const H2 = styled.h2`
color: ${props => props.theme[`button${props.type}`]}!important;
`;

export default function Skills() {
  const { theme, data } = useContext(Context);

  return (
    <Section id='skills' type={theme}>
      <div className='' style={{ 'width': '100%'}}>
        <ul
          className="hardskills"
        >
        <h3 className='center-title top'>Algumas das linguagens, bibliotecas e ferramentas que utilizo</h3>
          {hardskills && <CarouselAnimation data={hardskills
              .map((tech) => <><img src={tech.image} alt={tech.name} height="50px"/><p>{tech.name}</p></>)} />}
        <H2 type={theme} className='center-title bottom'>Fique tranquilo vou selecionar a ideal para o seu projeto</H2>
        </ul>
      </div>
      <img src={ illustration } className="illustration" alt="illustration"/>
    </Section>
  )
};
