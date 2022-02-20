import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/ButtonBackToHome.css';

export default function ButtonBackToHome() {
  const history = useHistory();

  const onButtonClick = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <button
      type="submit"
      className="button-back-to-home"
      onClick={ onButtonClick }
    >
    </button>
  );
};
