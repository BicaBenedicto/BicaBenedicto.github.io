import React, { useContext } from 'react';
import styled from 'styled-components';
import '../sass/Menu.scss';
import sun from '../images/icons/sun.svg';
import moon from '../images/icons/moon.svg';
import close from '../images/icons/close.svg';
import Context from '../services/Context.js';
import { useHistory } from 'react-router';

export default function Menu({ isRoot = true }) {
  const history = useHistory();
  const { menu, toggleMenu, theme, isDarkTheme } = useContext(Context);

  const Header = styled.header`
  background-color: ${props => props.theme[`header${theme}`]};
  color: ${props => props.theme.headerText};
  .button-logo {
    color: ${props => props.theme[`purple${theme}`]};
  };
`;

  const MenuBody = styled.div`
    background-color: ${props => props.theme[`backgroundProject${theme}`]};
  `;

  const Hr = styled.hr`
    color: ${props => props.theme[`text${theme}`]};
    width: 100%;
  `;

  const onNavClick = (location = '') => {
    toggleMenu(false);
    return history.push(`/${location}`);
  }

  return (
    <MenuBody className={ `menu-body ${menu ? 'menu-show' : 'menu-hidden'}` }>
      <Header className="menu-header">
        <button className='button-logo' onClick={ () => {} }>
        { '{ Gabriel Benedicto }' }
        </button>
        <button className='button-menu' onClick={ () => toggleMenu(false) }>
          <img src={ close } alt="menu"/>
        </button>
      </Header>
      <nav id='header-menu'>
          Tema
        <div className="slideThree">
          <label className="idk">
            <input
              className="radio-dark"
              type="radio"
              value="Dark"
              name="theme"
              checked={ theme === "Dark" }
              onChange={ () => {
                localStorage.setItem('theme', JSON.stringify('dark'));
                isDarkTheme(true);
              } }
            />
            <img src={ moon } alt="moon" className="radio radio-dark"/>
          </label>
          <label className="idk">
            <input
              className="radio-light"
              type="radio"
              value="Light"
              name="theme"
              checked={ theme === "Light" }
              onChange={ () => {
                localStorage.setItem('theme', JSON.stringify('light'));
                isDarkTheme(false);
              } }
            />
            <img src={ sun } alt="sun" className="radio radio-light"/>
          </label>
        </div>
        <Hr/>
        <a className='nav-link' onClick={ () => onNavClick()}>Home</a>
        <a className='nav-link' onClick={ () => onNavClick('projects')}>Projetos</a>
        <a className='nav-link' onClick={ () => onNavClick('contact')}>Contato</a>
      </nav>
    </MenuBody>
  )
};
