import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/ButtonBackToHome.css';

export default function ButtonBackToHome() {
  const history = useHistory();
  const [buttonText, setButtonText] = useState('<');

  const onButtonClick = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const onButtonHover = (type) => {
    if (type === 'in') return setTimeout(() => setButtonText('Voltar para portfolio'), 950);
    return setButtonText('<');
  };

  return (
    <button
      type="submit"
      className="button-back-to-home"
      onClick={ onButtonClick }
      onMouseOver={ () => onButtonHover('in') }
      onMouseOut={ () => onButtonHover('out') }
    >
      {buttonText}
    </button>
  );
};
