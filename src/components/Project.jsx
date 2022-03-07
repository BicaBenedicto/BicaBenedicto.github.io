import React, { useContext } from 'react';
import { PROJECTS } from '../assets/data';
import '../sass/Project.scss';
import Context from '../services/Context.js';
import { useHistory } from 'react-router-dom';

export default function Contact() {
  const history = useHistory();
  const { projects } = useContext(Context);
  const { projectName: name, projectImage: image, projectHasShow: hasShow, projectToggleShow } = projects;
  const PROJECT = PROJECTS.find((item) => item.name === name);

  return (
    <div
      className={hasShow ? 'project-show hasShow' : 'project-show hasHide'}
    >
      <img src={ image } alt={ name }/>
      <div>
        <span>{ name }</span>
        <p>{ PROJECT[name].message }</p>
        { PROJECT[name].site && (!PROJECT[name].site.includes('http')
          ? <button className="button-preview" onClick={() => history.push(PROJECT[name].site)}>
            Preview
          </button>
          : <a
            href={ PROJECT[name].site }
            rel="noreferrer"
          >
            Preview
          </a>)}
          { PROJECT[name].rep
          && <a
            href={ PROJECT[name].rep }
            target='_blank'
            rel="noreferrer"
          >
            Código
          </a>}
          <button
            type="button"
            className='project-show-exit'
            onClick={ () => projectToggleShow(false)}
          >
            X
          </button>
      </div>
      <div/>
    </div>
  )
};
