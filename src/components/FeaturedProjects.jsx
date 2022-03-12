import React, { useRef, useState } from 'react';
import Slider from 'infinite-react-carousel';
import ProjectItem from './ProjectItem';
import { FEATURED_PROJECTS } from '../assets/data';
import '../sass/FeaturedProjects.scss';
import { Link } from 'react-router-dom';

export default function FeaturedProjects({ lookAll }) {
  const screenSize = useRef(null);
  const [slides, setSlideQuant] = useState(3);
  
  const onLoadComponent = () => {
    const screenActual = Number(screenSize.current.offsetWidth);
    if (screenActual < 600) return setSlideQuant(1);
    if (screenActual > 600 && screenActual < 1000) return setSlideQuant(2);
    return setSlideQuant(3);
  };

  return (
    <section
      id='project'
      className='container'
      ref={ screenSize }
      onLoad={ onLoadComponent }
    >
      <h1 className='center-title'>Meus projetos favoritos</h1>
      {lookAll && <Link to='/projects' className="look-all">Mostrar todos</Link>}
      <Slider
        arrowsScroll={ slides }
        autoplay
        autoplayScroll={ slides }
        className="slider-div"
        dots
        dotsScroll={ slides }
        duration={ 300 }
        pauseOnHover
        rows={ 1 }
        slidesToShow={ slides }
        wheel
        wheelScroll={ slides }
        onResize={ onLoadComponent }
      >
        {FEATURED_PROJECTS.map(({name, image}) => (
          <ProjectItem
            name={ name }
            image={ image }
            key={ name }
          />
        ))}
      </Slider>
    </section>
  )
};
