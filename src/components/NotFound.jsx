import React, { useContext } from 'react';
import "@lottiefiles/lottie-player";
import '../sass/NotFound.scss';
import Context from '../services/Context';
import styled from 'styled-components';

export default function NotFoundComponent() {
  const { theme } = useContext(Context);

  const Div = styled.div`
    background: ${props => props.theme[`transitionLinear${theme}`]};
  `;

  return (
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
  );
}
