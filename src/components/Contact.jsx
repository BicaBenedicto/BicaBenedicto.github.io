import React, { useContext } from 'react';
import Context from '../services/Context';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';
import whatsapp from '../images/icons/whatsapp.svg';
import telegram from '../images/icons/telegram.svg';
import instagram from '../images/icons/instagram.svg';
import gmail from '../images/icons/gmail.svg';
import '../sass/Contact.scss';
import styled from 'styled-components';
import FormContact from './FormContact';

const DIV = styled.div`
background: ${props => props.theme[`transitionLinear${props.type}`]};
`;

const A = styled.a`
&:hover {
  background-color: ${props => props.theme[`purple${props.type}`]};
  color: ${props => props.theme.buttonText} !important;
}
`;

export default function Contact() {
  const { theme } = useContext(Context);

  return (
    <DIV type={theme} id="portfolio-contact" className="local-bootstrap">
      <h1 className='center-title'>Contatos</h1>
      <div className="contact-body">
        <FormContact />
        <div className="contact-body-others">
          <h2 className='center-title'>Agora é com você, estou à disposição para conversar sobre o que você precisa</h2>
          <div className="other-contacts">
            <div>
              <A type={theme} href='https://api.whatsapp.com/send?phone=5511986629946' target='_blank' rel="noreferrer">
                <img src={ whatsapp } alt='Whatsapp' className="rede-social"/> Whatsapp
              </A>
              <A type={theme} href='https://t.me/gabrielbenedicto' target='_blank' rel="noreferrer">
                <img src={ telegram } alt='Telegram' className="rede-social"/> Telegram
              </A>
              <A type={theme} href='https://www.linkedin.com/in/gabrielbenedicto/' target='_blank' rel="noreferrer">
                <img src={ linkedin } alt='Linkedin' className="rede-social"/> Linkedin
              </A>
            </div>
            <div className="right-side">
              <A type={theme} href='https://github.com/BicaBenedicto' target='_blank' rel="noreferrer">
                <img src={ github } alt='GitHub' className="rede-social git"/> GitHub
              </A>
              <A type={theme} href='https://www.instagram.com/gabrielbenedicto/' target='_blank' rel="noreferrer">
                <img src={ instagram } alt='instagram' className="rede-social"/> Instagram
              </A>
              <A type={theme} href='mailto:gabrielpbenedicto@gmail.com' rel="noreferrer">
                <img src={ gmail } alt='Gmail' className="rede-social"/> Gmail
              </A>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  )
};
