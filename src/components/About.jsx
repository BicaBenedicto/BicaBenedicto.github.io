import React, { useContext, useState } from 'react';
import illustration from '../images/eu.jpeg';
import illustration2 from '../images/undraw_hello_re_3evm.svg';
import styled from 'styled-components';
import '../sass/About.scss';
import Context from '../services/Context';


export default function About() {
  const [aboutMore, toggleAboutMore] = useState(false);
  const { theme } = useContext(Context);

  const Button = styled.button`
    background-color: ${props => props.theme[`button${theme}`]};
    border: 1px solid ${props => props.theme[`button${theme}`]};
		color: ${props => props.theme.buttonText};
  `;

  return (
    <section id='home' className='container'>
      <div className="text-body-1">
        <img src={ illustration2 } className="illustration" alt="illustration"/>
        <div>
          <h2>Olá, me chamo Gabriel. </h2>
          <h3>Sou desenvolvedor web e trabalho com criação e manutenção de websites.</h3>
          <Button
            type="button"
            className="show-more"
            onClick={ () => toggleAboutMore(!aboutMore) }
          >
            {aboutMore ? "Esconder" : "Saiba mais"}
          </Button>
          <p
            className={aboutMore ? 'home-word-p display-show-more' : 'home-word-p hidden-show-more'}
          >
              Tenho 24 anos, apaixonado por tecnologia desde sempre, iniciei em 2021 a Faculdade de Análise e Desenvolvimento de Sistemas na FMU. E no mesmo ano aproveitei a chance de ingressar na área, estudei muito e passei no processo seletivo muito disputado no Curso da Trybe, referência em formação e integração de profissionais ao mercado de trabalho, curso focado nas necessidades das empresas.
          </p>
        </div>
      </div>
      <div className="text-body-2">
        <img src={ illustration } className="eu" alt="illustration"/>
        <p
          className={aboutMore ? 'home-word-p display-show-more' : 'home-word-p hidden-show-more'}
        >
          Comprometido, dedicado e focado, estou pronto para os desafios, quero aprender novas linguagens, sistemas e o que for preciso para atender as necessidades da empresa e crescer profissionalmente.
        </p>
      </div>
    </section>
  )
};
