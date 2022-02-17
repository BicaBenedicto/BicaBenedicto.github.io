import React from 'react';
import illustration from '../images/undraw_Hello_re_3evm.png';
import '../css/About.css';


export default function About() {
  return (
    <section id='home' className='container'>
      <img src={ illustration } className="illustration" alt="illustration"/>
      <div>
        <h2>Olá, me chamo Gabriel. </h2>
        <h3>Sou desenvolvedor web e trabalho com criação e manutenção de websites.</h3>
        <p className='home-word-p'>Tenho 24 anos, apaixonado por tecnologia desde sempre, iniciei em 2021 a Faculdade de Análise e Desenvolvimento de Sistemas na FMU. E no mesmo ano aproveitei a chance de ingressar na área, estudei muito e passei no processo seletivo muito disputado no Curso da Trybe, referência em formação e integração de profissionais ao mercado de trabalho, curso focado nas necessidades das empresas.</p>
        <p className='home-word-p'>Comprometido, dedicado e focado, estou pronto para os desafios, quero aprender novas linguagens, sistemas e o que for preciso para atender as necessidades da empresa e crescer profissionalmente.</p>
      </div>
    </section>
  )
};