import React, { useContext } from 'react';
import '../sass/Contact.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Context from '../services/Context';
import Menu from '../components/Menu';

export default function Contacts() {
  const { projects, menu } = useContext(Context);
  const { projectHasShow } = projects;

  return (
    <>
      <Header isRoot={ true } />
      <main className={ `contact-page ${menu ? 'hasShow' : projectHasShow}`} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <Contact />
      </main>
      <Footer />
      <Menu isRoot={ true }/>
    </>
  );
}
