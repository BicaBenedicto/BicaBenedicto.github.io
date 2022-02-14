import React from 'react';
import Slider from 'infinite-react-carousel';
import pixelArt from '../images/projetos/pixels-art.png';
import todoList from '../images/projetos/to-do-list.png';
import trybewarts from '../images/projetos/trybewarts.png';
import eCommerce from '../images/projetos/ecommerce-image.PNG';
import trybewallet from '../images/projetos/trybewallet-image.PNG';
import trybeTunes from '../images/projetos/trybetunes-image.PNG';
import trivia from '../images/projetos/trivia-image.PNG';
import davsom from '../images/projetos/davsom.PNG';
import ProjectItem from './ProjectItem';
import '../css/Projects.css';

export default function Projects() {
  return (
    <section id='project' className='container'>
      <h1 className='center-title'>Projetos</h1>
      <Slider
        arrowsScroll={ 3 }
        autoplay
        autoplayScroll={ 3 }
        dots
        dotsScroll={ 3 }
        duration={ 300 }
        overScan={ 2 }
        pauseOnHover
        rows={ 1 }
        slidesToShow={ 3 }
        wheel
        wheelScroll={ 3 }
        >
        <ProjectItem
          name='Pixel Art'
          image={ pixelArt }
        />
        <ProjectItem
          name="To do List"
          image={ todoList }
        />
        <ProjectItem
          name="Trybewarts"
          image={ trybewarts }
        />
        <ProjectItem
          name="E-commerce"
          image={ eCommerce }
        />
        <ProjectItem
          name="Trybewallet"
          image={ trybewallet }
        />
        <ProjectItem
          name="TrybeTunes"
          image={ trybeTunes }
        />
        <ProjectItem
          name="Trivia"
          image={ trivia }
        />
        <ProjectItem
          name="Davsom"
          image={ davsom }
        />
      </Slider>
    </section>
  )
};
