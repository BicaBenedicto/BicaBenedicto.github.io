import React, { useContext } from 'react';
import "@lottiefiles/lottie-player";
import '../sass/NotFound.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProjects from '../components/FeaturedProjects';
import Project from '../components/Project';
import Context from '../services/Context';
import styled from 'styled-components';
import Menu from '../components/Menu';

export default function NotFound() {
  const { projects, theme, menu } = useContext(Context);
  const { projectHasShow } = projects;

  const Div = styled.div`
    background: ${props => props.theme[`transitionLinear${theme}`]};
  `;

  return (
    <>
      <Header isRoot={ false } />
      <main className={ `projects-portfolio ${projectHasShow === 'hasShow' || menu ? 'hasShow' : projectHasShow}`} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <Div className="not-found-body">
          <lottie-player
            autoplay
            background="transparent"
            speed="1"
            loop
            mode="normal"
            src="https://assets1.lottiefiles.com/private_files/lf30_3X1oGR.json"
            style={{"width": "500px", "margin": '0 auto'}}
          />
          <div className="not-found-text">
            <h2 className='center-title'>Página não encontrada - erro: 404</h2>
            <p className="not-found-p">
              Poxa a página que tentou acessar não foi encontrada, mas não desanime! Que tal aproveitar nossa exploração e olhar os projetos em destaque?
            </p>
          </div>
        </Div>
        <FeaturedProjects lookAll={ false }/>
      </main>
      <Footer />
      <Project />
      <Menu isRoot={ false }/>
    </>
  );
}
