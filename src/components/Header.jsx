import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import '../sass/Header.scss';
import Context from '../services/Context';
import sun from '../images/icons/sun.svg';
import moon from '../images/icons/moon.svg';
import menu from '../images/icons/menu.svg';

export default function Header({ isRoot = true }) {
  const { theme, isDarkTheme, toggleMenu, login } = useContext(Context);
  const { logged, isLogged } = login;
  const history = useHistory();

  const Header = styled.header`
		background-color: ${props => props.theme[`header${theme}`]};
		color: ${props => props.theme.headerText};
    .button-logo {
      color: ${props => props.theme[`purple${theme}`]};;
    }
  `;

  const A = styled.a`
    color: ${props => props.theme.headerText};
    border-bottom: 2px solid transparent;
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.headerText};
      border-bottom: 2px solid ${props => props.theme[`purple${theme}`]};
    };
    a {
      text-decoration: none;
      color: ${props => props.theme.headerText};
    };
  `;

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      className='nav-link'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <Span className="down-seta">&#x25bc;</Span>
    </a>
  ));

  const BootsA = styled(Dropdown.Menu)`
  color: ${props => props.theme.headerText};
  border-bottom: 2px solid transparent;
  background-color: ${props => props.theme[`header${theme}`]} !important;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.headerText};
  };
  a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: ${props => props.theme.headerText};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.headerText};
      border-bottom: 2px solid ${props => props.theme[`purple${theme}`]};
    };
  };
`;

const Span = styled.span`
  &.down-seta {
    margin: 0 10px;
  };
`;

const BootsToggle = styled.span`
  a {
    color: ${props => props.theme.headerText} !important;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    width: 100%;
    &:hover {
      text-decoration: none;
      border-bottom: 2px solid ${props => props.theme[`purple${theme}`]};
      color: ${props => props.theme.headerText};
    };
  };
`;

const BootsHeader = styled(Dropdown.Header)`
  color: ${props => props.theme.headerText};
`;

  return (
    <Header id='header-top'>
      <button className='button-logo' onClick={ () => history.push('/') }>
        { '{ Gabriel Benedicto }' }
      </button>
      <button className='button-menu' onClick={ () => toggleMenu('menu-show') }>
        <img src={ menu } alt="menu"/>
      </button>
      <nav id='header-menu'>
        <A className='nav-link' onClick={ () => history.push('/')}>Home</A>|
        <A className='nav-link' onClick={ () => history.push('/projects')}>Projetos</A>|
        <A className='nav-link' onClick={ () => history.push('/contact')}>Contato</A>|
        <Dropdown>
          <BootsToggle>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Outros
            </Dropdown.Toggle>
          </BootsToggle>
          <Dropdown.Divider />
          <BootsA>
            <BootsHeader>Tema</BootsHeader>
            <div className="slideThree">
              <label className="idk">
                <input
                  className="radio-dark"
                  type="radio"
                  value="Dark"
                  name="theme"
                  checked={ theme === "Dark" }
                  onClick={ () => {
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
                  onClick={ () => {
                    localStorage.setItem('theme', JSON.stringify('light'));
                    isDarkTheme(false);
                  } }
                />
                <img src={ sun } alt="sun" className="radio radio-light"/>
              </label>
            </div>
            {logged && (
              <div className="logged">
                <button
                  className="manager-button"
                  type="button"
                  onClick={ () => {
                  } }
                >
                  Gerenciamento
                </button>
                <button
                  className="exit-button"
                  type="button"
                  onClick={ () => {
                    localStorage.clear();
                    isLogged(false);
                  } }
                >
                  Sair
                </button>
              </div>
            )}
          </BootsA>
          <Dropdown.Divider />
        </Dropdown>
      </nav>
    </Header>
  )
};
