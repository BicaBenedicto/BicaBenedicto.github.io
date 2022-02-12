import React from 'react';
import pixelArt from '../images/projetos/pixels-art.png';
import todoList from '../images/projetos/to-do-list.png';
import trybewarts from '../images/projetos/trybewarts.png';
import eCommerce from '../images/projetos/ecommerce-image.PNG';
import trybewallet from '../images/projetos/trybewallet-image.PNG';
import trybeTunes from '../images/projetos/trybetunes-image.PNG';
import trivia from '../images/projetos/trivia-image.PNG';
import davsom from '../images/projetos/davsom.PNG';

export default function Projects() {
  return (
    <section id='project' className='container'>
      <h1 className='center-title'>Projetos</h1>
      <div className='slide demo'>
        <div className="project-div">
          <span className="link-none">Pixel Art</span>
          <img className='project-img' src={ pixelArt } alt='Pixel Art'/>
        </div>
        <div className="project-div">
          <span className="link-none">To do List</span>
          <img className='project-img' src={ todoList } alt='to-do-list'/>
        </div>
        <div className="project-div">
          <span className="link-none">Trybewarts</span>
          <img className='project-img' src={ trybewarts } alt='trybewarts'/>
        </div>
        <div className="project-div">
          <span className="link-none">E-commerce</span>
          <img className='project-img' src={ eCommerce } alt='shopping-cart'/>
        </div>
        <div className="project-div">
          <span className="link-none">Trybewallet</span>
          <img className='project-img' src={ trybewallet } alt='trybewallet'/>
        </div>
        <div className="project-div">
          <span className="link-none" >TrybeTunes</span>
          <img className='project-img' src={ trybeTunes } alt='trybetunes'/>
        </div>
        <div className="project-div">
          <span className="link-none" >Trivia</span>
          <img className='project-img' src={ trivia } alt='trivia'/>
        </div>
        <div className="project-div">
          <span className="link-none">Davsom</span>
          <img className='project-img' src={ davsom } alt='Davsom'/>
        </div>
      </div>
    </section>
  )
};
