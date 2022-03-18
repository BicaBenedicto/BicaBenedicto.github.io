import React, { useContext } from 'react';
import '../sass/Contact.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Context from '../services/Context';
import Menu from '../components/Menu';

export default function Contacts() {
  const { menu } = useContext(Context);

  const changeBlur = () => {
    if(menu === 'menu-show') return 'hasShow';
    if(menu === 'menu-empty') return 'empty';
    return 'hasHidden'
  };

  return (
    <>
      <Header isRoot={ true } />
      <main className={ `contact-page ${changeBlur()}`} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <Contact />
      </main>
      <Footer />
      <Menu isRoot={ true }/>
    </>
  );
}
