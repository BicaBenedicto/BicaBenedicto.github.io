import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import hardskills from '../assets/data-hardskills.js'
import eu from '../images/eu.jpeg'

import illustration from '../images/undraw_programming_re_kg9v.svg';
import '../sass/Skills.scss';

const quantifyShow = Object.values(hardskills).length;

function Skills() {
  const [arrActual, setArrActual] = useState(Object.values(hardskills));
  const [indexG, setIndex] = useState(0);
  const [object, setObject] = useState({});
  let indexGlobal = 0;

  useEffect(
    () => {
      const id = setInterval(() => {
        if(indexGlobal >= arrActual.length - 1) {
          indexGlobal = 0;
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

  useEffect(() => {
    const newObject = arrActual.reduce((acc, _value, index, array) => {
      return {...acc, [index]: (indexG + index >= array.length ? (indexG + index) - (array.length) : indexG + index)};
  } ,{});
  setObject(newObject);
  }, [indexG]);

  const classesAnimation = {};

  for(let i = 0; i < quantifyShow; i += 1) {
    classesAnimation[i] = (i <= (quantifyShow / 2)
      ? `shadow-right-${Math.floor(quantifyShow / 2) - i + 1}`
      : `shadow-left-${i - Math.floor(quantifyShow / 2)}`
    )
  }

  const carouselShowing = (arr) => {
    return arr.map(({name, image}, index) => {
      const classActual = classesAnimation[object[index]] || 'shadow';
      return (
        <li className={`hardskills-item ${classActual}`} key={ name }>
          <img className='hardskills-img' src={ image } alt={ `${name}-icon` }/>
          {name}
        </li>
      );
    });
  };

  return (
    <section id='skills'>
      <div className='' style={{ 'width': '100%'}}>
        <h3 className='center-title top'>Algumas das linguagens, bibliotecas e ferramentas que utilizo</h3>
        <ul
          className="hardskills"
        >
            {carouselShowing(arrActual)}
        </ul>
        <h2 className='center-title bottom'>Fique tranquilo vou selecionar a ideal para o seu projeto</h2>
      </div>
      <img src={ illustration } className="illustration" alt="illustration"/>
    </section>
  )
};

export default Skills;
