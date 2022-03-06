import React from 'react';
import hardskills from '../assets/data-hardskills.js'
import illustration from '../images/undraw_programming_re_kg9v.svg';
import '../css/Skills.css';

export default function Skills() {
  return (
    <section id='skills'>
      <img src={ illustration } className="illustration" alt="illustration"/>
      <div className='center-down hard-skills'>
        <h4 className='center-title'>HardSkills</h4>
        <ul id='hardskills'>
          {Object.values(hardskills).map(({name, image}) =>(
          <li className='hardskills-item' key={ name }>
            <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
            {name}
          </li>))}
        </ul>
      </div>
    </section>
  )
};
