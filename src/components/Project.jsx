import React, { useContext, useEffect, useRef, useState } from 'react';
import { PROJECTS_OFFLINE } from '../assets/data';
import HARDSKILLS from '../assets/data-hardskills';
import '../sass/Project.scss';
import Context from '../services/Context.js';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export default function Project() {
  const imageShowing = useRef(null);
  const history = useHistory();
  const [isShowingImage, setIsShowingImage] = useState(false);
  const { projects, theme, data } = useContext(Context);
  const { projectName: name, projectImage: image, projectHasShow: hasShow, projectToggleShow } = projects;
  const PROJECTS = data.projects || PROJECTS_OFFLINE;
  const PROJECT = PROJECTS.find((item) => item.name === name);
  
  const onClickImage = () => {
    setIsShowingImage(!isShowingImage);
  };

  const keyFrame = keyframes`
    to {
      transform: translateX(0) scale(1);
    }
    from {
      transform: translateX(-100vw) scale(0, 1);
    }
  `;

  const keyFrame2 = keyframes`
    to {
      transform: translateX(-100vw) scale(0, 1);
    }
    from {
      transform: translateX(0) scale(1);
    }
  `;

  const keyFrame3 = keyframes`
  to {
    transform: translateX(0) scale(0);
  }
  from {
    transform: translateX(0) scale(0);
  }
`;

  const Div = styled.div`
    background-color: ${props => props.theme[`backgroundProject${theme}`]};
    &.hasHidden {
      animation: ${keyFrame2} 1s ease-in-out both;
    }
    &.hasShow {
      animation: ${keyFrame} 1s ease-in-out both;
    }
    &.notStarted {
      animation: ${keyFrame3} 1s ease-in-out both;
    }
  `;

  return (
    <Div
      className={`project-show ${hasShow}`}
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
            onClick={ () => {
              projectToggleShow('hasHidden')
              setTimeout(() => projectToggleShow('notStarted'), 1000)}}
          >
            X
          </button>
        </span>
        <p>{ PROJECT.description }</p>
        <div className="project-technologies">
          { PROJECT.technologies && PROJECT.technologies.map((tech, index) => (
            <div key={ index }>
              <img src={ tech.image } alt={ tech.name } className={ tech.name === "GitHub" ? 'rede-social git' : '' }/>
              <p>{tech.name}</p>
            </div>
          )) }
        </div>
        <div>
          { PROJECT.site && (!PROJECT.site.includes('http')
            ? <button className="button-preview" onClick={() => history.push(PROJECT.site)}>
              Demonstração
            </button>
            : <a
              href={ PROJECT.site }
              rel="noreferrer"
              className="button-preview"
            >
              Demonstração
            </a>)}
            { PROJECT.rep
            && <a
              href={ PROJECT.rep }
              target='_blank'
              rel="noreferrer"
              className="button-preview"
            >
              Código
            </a>}
          </div>
      </div>
    </Div>
  );
};
