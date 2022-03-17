import React, { useContext, useRef, useState } from 'react';
import { PROJECTS } from '../assets/data';
import HARDSKILLS from '../assets/data-hardskills';
import '../sass/Project.scss';
import Context from '../services/Context.js';
import { useHistory } from 'react-router-dom';

export default function Contact() {
  const imageShowing = useRef(null);
  const history = useHistory();
  const [isShowingImage, setIsShowingImage] = useState(false);
  const { projects } = useContext(Context);
  const { projectName: name, projectImage: image, projectHasShow: hasShow, projectToggleShow } = projects;
  const PROJECT = PROJECTS.find((item) => item.name === name);
  
  const onClickImage = () => {
    setIsShowingImage(!isShowingImage);
  };
  return (
    <div
      className={hasShow ? 'project-show hasShow' : 'project-show hasHide'}
    >
      <button type="button" onClick={ onClickImage } ref={ imageShowing } className="image-show">
        <img src={ image } alt={ name } className={ isShowingImage ? 'exhibition' : '' }/>
      </button>
      <div className={ isShowingImage ? "project-show-body not-exhibition" : "project-show-body yes-exhibition"}>
        <span>
          { name }
          <button
            type="button"
            className='project-show-exit'
            onClick={ () => projectToggleShow(false)}
          >
            X
          </button>
        </span>
        <p>{ PROJECT[name].message }</p>
        <div className="project-technologies">
          { PROJECT.technologies && PROJECT.technologies.map((tech, index) => (
            <div key={ index }>
              <img src={ HARDSKILLS[tech].image } alt={ HARDSKILLS[tech].name } className={ HARDSKILLS[tech].name === "GitHub" ? 'rede-social git' : '' }/>
              <p>{HARDSKILLS[tech].name}</p>
            </div>
          )) }
        </div>
        <div>
          { PROJECT[name].site && (!PROJECT[name].site.includes('http')
            ? <button className="button-preview" onClick={() => history.push(PROJECT[name].site)}>
              Demonstração
            </button>
            : <a
              href={ PROJECT[name].site }
              rel="noreferrer"
              className="button-preview"
            >
              Demonstração
            </a>)}
            { PROJECT[name].rep
            && <a
              href={ PROJECT[name].rep }
              target='_blank'
              rel="noreferrer"
              className="button-preview"
            >
              Código
            </a>}
          </div>
      </div>
    </div>
  )
};
