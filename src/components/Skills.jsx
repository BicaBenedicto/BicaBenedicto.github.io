import React, { useEffect, useState } from 'react';
import hardskills from '../assets/data-hardskills.js'

import illustration from '../images/undraw_programming_re_kg9v.svg';
import '../sass/Skills.scss';

const quantifyShow = 5;

function Skills() {
  const [arrActual, setArrActual] = useState(Object.values(hardskills));
  const [indexG, setIndex] = useState(0);
  let indexGlobal = 0;

  useEffect(
    () => {
      const id = setInterval(() => {
        console.log(indexGlobal);
        if(indexGlobal >= arrActual.length - 1) {
          indexGlobal = 0;
          console.log('a');
        } else {
          indexGlobal += 1;
        }
        setIndex(indexGlobal);
      }, 1500);
      return () => {
        clearInterval(id);
      };
    },
    [] // empty dependency array
  );

  const carouselShowing = (arr) => {
    const indexLeft = (indexG === 0 ? (arrActual.length - 1) : indexG - 1);
    const indexRight = (indexG === (arrActual.length - 1) ? 0 : indexG + 1);

    return arr.map(({name, image}, index) => {
      if(indexG === index) {
        return (
          <li className='hardskills-item showing' key={ name }>
            <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
            {name}
          </li>
        )
      };
      if(indexLeft === index) {
        return (
          <li className='hardskills-item shadow-left' key={ name }>
            <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
            {name}
          </li>
        )
      };
      if(indexRight === index) {
        return (
          <li className='hardskills-item shadow-right' key={ name }>
            <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
            {name}
          </li>
        )
      };
      return (
        <li className='hardskills-item shadow' key={ name }>
          <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
          {name}
        </li>
      );
    });
  };

  return (
    <section id='skills'>
      <img src={ illustration } className="illustration" alt="illustration"/>
      <div className='' style={{ 'width': '100%'}}>
        <h4 className='center-title'>HardSkills</h4>
      <ul
        className="hardskills"
      >
          {carouselShowing(arrActual)}
      </ul>
      </div>
    </section>
  )
};

export default Skills;
