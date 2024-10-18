import React, { useContext, useState, useEffect } from 'react';
import illustration from '../images/gabriel-benedicto.png';
import illustration4 from '../images/gabriel-benedicto2.jpg';
import illustration2 from '../images/undraw_hello_re_3evm.svg';
import illustration3 from '../images/person (1).svg';
import styled from 'styled-components';
import '../sass/About.scss';
import Context from '../services/Context';

const Button = styled.button`
background-color: ${props => props.theme[`button${props.TYPE}`]};
border: 1px solid ${props => props.theme[`button${props.TYPE}`]};
color: ${props => props.theme.buttonText};
`;

export default function About() {
  const [aboutMore, toggleAboutMore] = useState(false);
  const { theme } = useContext(Context);
  const [age, setAge] = useState(0);
  const [yearWork, setYearWork] = useState(0);

  useEffect(() => {
    const yearAge = new Date('1997-11-29');
    const yearWork = new Date('2021-01-01');

    const today = new Date();

    const timeSum = today.getTime() - yearAge.getTime()
  
    const timeSumWork = today.getTime() - yearWork.getTime()

    const ageActual = Math.floor(timeSum / 1000 / 60 / 60 / 24 / 365);
  
    const yearWorkingActual = Math.floor(timeSumWork / 1000 / 60 / 60 / 24 / 365);

    setAge(ageActual);

    setYearWork(yearWorkingActual)
    return;
  }, [])

  return (
    <section id='home' className='container'>
      <div className="text-body-1">
        <img src={ illustration4 } className="eu" alt="illustration"/>
        <div>
          <h2>Olá, me chamo Gabriel. </h2>
          <h3>Sou desenvolvedor web, trabalho com criação e manutenção de websites e chatbots.</h3>
          <Button
            TYPE={theme}
            type="button"
            className="show-more"
            onClick={ () => toggleAboutMore(!aboutMore) }
          >
            {aboutMore ? "Esconder" : "Saiba mais"}
          </Button>
          <p
            className={aboutMore ? 'home-word-p display-show-more' : 'home-word-p hidden-show-more'}
          >
              Tenho {age} anos, apaixonado por tecnologia desde sempre, aprendendo contínuamente novas ferramentas, tecnologias e formas de ajudar nas necessidades das empresas.
          </p>
        </div>
      </div>
      <div className="text-body-2">
        <img src={ illustration3 } className="illustration" alt="illustration"/>
        <p
          className={aboutMore ? 'home-word-p display-show-more' : 'home-word-p hidden-show-more'}
        >
          Comprometido, dedicado e focado, estou pronto para os desafios, há mais de {yearWork} anos no mercado trazendo a solução e inovação para diversos clientes.
        </p>
      </div>
    </section>
  )
};
