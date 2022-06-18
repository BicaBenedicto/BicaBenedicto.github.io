import React, { useState } from 'react';
import '../sass/Manager.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ManagerTechnologies from '../components/ManagerTechnologies';
import ManagerProjects from '../components/ManagerProjects';

export default function Manager() {
  const [manager, setManager] = useState('');

  return (
    <>
      <Header />
      <main style={{ 'margin': '20px auto','maxWidth': '1700px', minHeight: '100vh' }}>
        <div className="manager-select">
          <label htmlFor="mode-project" style={{ 'margin': '0 20px', background: '#f1f1f1', color: 'black', padding: '0 20px', borderRadius: '20px' }}>
            <input id="mode-project" type="radio" name="mode" checked={manager === 'project'} onClick={() => setManager('project')} />
            Projeto
          </label>
          <label htmlFor="mode-technology" style={{ 'margin': '0 20px', background: '#f1f1f1', color: 'black', padding: '0 20px', borderRadius: '20px' }}>
            <input id="mode-technology" type="radio" name="mode" checked={manager === 'technology'} onClick={() => setManager('technology')} />
            Tecnologia
          </label>
        </div>
        <div className="manager-form">
          {manager === 'technology' && <ManagerTechnologies />}
          {manager === 'project' && <ManagerProjects />}
        </div>
      </main>
      <Footer />
      <Menu />
    </>
  );
}
