import React from 'react';
import githubIcon from '../images/github-icon.webp';
import gitIcon from '../images/git-icon.webp';
import htmlIcon from '../images/html-icon.webp';
import cssIcon from '../images/html-icon.webp';
import javascriptIcon from '../images/javascript-icon.webp';
import bootstrapIcon from '../images/bootstrap logo.png';
import tailwindIcon from '../images/tail wind css.png';
import sassIcon from '../images/sass logo.png';
import phpIcon from '../images/php-icon.webp';
import reactIcon from '../images/react.png';
import reduxIcon from '../images/redux.png';
import dockerIcon from '../images/docker logo.png';
import mysqlIcon from '../images/mysql logo.png';
import illustration from '../images/undraw_Programming_re_kg9v.png';

export default function Skills() {
  return (
    <section id='skills'>
      <img src={ illustration } className="illustration" alt="illustration"/>
      <div className='center-down hard-skills'>
        <h4 className='center-title'>HardSkills</h4>
        <ul id='hardskills'>
          <li className='hardskills-item'><img className='hardskills-img' src={ githubIcon } alt='git-icon'/>GitHub</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ gitIcon } alt='git-icon'/>Git</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ htmlIcon } alt='html-icon'/>Html5</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ cssIcon } alt='css-icon'/>Css3</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ javascriptIcon } alt='javascript-icon'/>Javascript</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ bootstrapIcon } alt='php-icon'/>Bootstrap</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ tailwindIcon } alt='php-icon'/>Tailwind CSS</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ sassIcon } alt='php-icon'/>SASS</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ phpIcon } alt='php-icon'/>PHP</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ reactIcon } alt='php-icon'/>React</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ reduxIcon } alt='php-icon'/>Redux</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ dockerIcon } alt='php-icon'/>Docker</li>
          <li className='hardskills-item'><img className='hardskills-img' src={ mysqlIcon } alt='php-icon'/>MySQL</li>
        </ul>
      </div>
    </section>
  )
};
