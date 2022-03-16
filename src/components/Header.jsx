import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import '../sass/Header.scss';
import Context from '../services/Context';

export default function Header({ isRoot = true }) {
  const { theme } = useContext(Context);
  const history = useHistory();

  const Header = styled.header`
		background-color: ${props => props.theme[`header${theme}`]};
		color: ${props => props.theme.headerText};
  `;

  const H1 = styled.h1`
    color: ${props => props.theme[`purple${theme}`]};;
  `;

  const A = styled.a`
    color: ${props => props.theme.headerText};
    border-bottom: 2px solid transparent;
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.headerText};
      border-bottom: 2px solid ${props => props.theme[`purple${theme}`]};
    };
  `;

  return (
    <Header id='header-top'>
      <button className='button-logo' onClick={ () => history.push('/') }>
        <H1 className="logo-title">{ '{ Gabriel Benedicto }' }</H1>
      </button>
      <nav id='header-menu'>
        <A className='nav-link' href={isRoot ? '#home' : '/#home'}>Home</A>|
        <A className='nav-link' href={isRoot ? '#project' : '/#project'}>Projetos</A>|
        <A className='nav-link' href={isRoot ? '#portfolio-contact' : '/#portfolio-contact'}>Contato</A>
      </nav>
    </Header>
  )
};
