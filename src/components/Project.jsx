import React, { useContext } from 'react';
import { PROJECTS } from '../services/projects.js';
import '../css/Projects.css';
import Context from '../services/Context.js';
import { useHistory } from 'react-router-dom';

export default function Contact() {
  const history = useHistory();
  const { projects } = useContext(Context);
  const { projectName: name, projectImage: image, projectHasShow: hasShow, projectToggleShow } = projects;

  return (
    <div
      className={hasShow ? 'project-show hasShow' : 'project-show hasHide'}
    >
      <img src={ image } alt={ name }/>
      <div>
        <span>{ name }</span>
        <p>{ PROJECTS[name].message }</p>
        { !PROJECTS[name].site.includes('http')
          ? <button className="button-preview" onClick={() => history.push(PROJECTS[name].site)}>
            Preview
          </button>
          : <a
            href={ PROJECTS[name].site }
            target='_blank'
            rel="noreferrer"
          >
            Preview
          </a>}
          { PROJECTS[name].rep
          && <a
            href={ PROJECTS[name].rep }
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
