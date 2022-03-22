import React, { useContext, useEffect, useState } from 'react';
import hardskills from '../assets/data-hardskills.js'
import Context from '../services/Context';
import '../sass/Skills.scss';


export default function CarouselAnimation() {
  const { data } = useContext(Context);
  const { technologies } = data;
  const [arrActual, setArrActual] = useState(hardskills);
  const [indexG, setIndex] = useState(0);
  const [object, setObject] = useState({});
  let indexGlobal = 0;
  
  const quantifyShow = arrActual.length;
  useEffect(
    () => {
      if(technologies) {
        setArrActual(technologies);
      }
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
          <img className={ `hardskills-img ${name === 'Sinon.js' ? 'sinonjs' : ''}` } src={ image } alt={ `${name}-icon` }/>
          <p>{name}</p>
        </li>
      );
    });
  };

  return carouselShowing(arrActual);
};
