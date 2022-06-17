import React, { useContext, useState } from 'react';
import '../sass/Login.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../services/Context';
import Menu from '../components/Menu';
import ManagerTechnologies from '../components/ManagerTechnologies';

export default function Manager() {
  const { data } = useContext(Context);
  const [manager, setManager] = useState('');

  return (
    <>
      <Header />
      <main className={changeBlur()} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <div>
          <label htmlFor="mode-project">
            <input id="mode-project" type="radio" name="mode" checked={manager === 'project'} onClick={setManager('project')} />
            Projeto
          </label>
          <label htmlFor="mode-technology">
            <input id="mode-technology" type="radio" name="mode" checked={manager === 'technology'} onClick={setManager('technology')} />
            Tecnologia
          </label>
        </div>
        {manager && <ManagerTechnologies />}
      </main>
      <Footer />
      <Menu />
    </>
  );
}
