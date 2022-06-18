import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../services/Context';

export default function ManagerTechnologies() {
  const history = useHistory();
  const { data, login } = useContext(Context);
  const { technologies, projects } = data;
  const [name, setName] = useState('');
  const [nameEN, setNameEN] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionEN, setDescriptionEN] = useState('');
  const [image, setImage] = useState('');
  const [mode, setMode] = useState('add');
  const [technologySelected, setTechnologySelected] = useState('');
  const [technologiesArray, setTechnologies] = useState('');
  const [ProjectSelected, setProjectSelected] = useState('');

  useEffect(() => {
    if (mode === 'edit') {
      const { name, name_en, id, description, description_en, image, technologies} = projects[0];
      setName(name || '');
      setNameEN(name_en || '');
      setDescription(description || '');
      setDescriptionEN(description_en || '');
      setImage(image || '');
      setTechnologies(technologies || []);
      setProjectSelected(id);
    }
    if (mode === 'add') {
      setName('');
      setNameEN('');
      setDescription('');
      setDescriptionEN('');
      setImage('');
      setTechnologies([]);
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'edit') {
      const { name, name_en, id, description, description_en, image, technologies} = projects.find((project) => project.id == ProjectSelected);
      setName(name || '');
      setNameEN(name_en || '');
      setDescription(description || '');
      setDescriptionEN(description_en || '');
      setImage(image || '');
      setTechnologies(technologies || []);
      setProjectSelected(id);
    }
  }, [ProjectSelected]);

  const onSubmitButton = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        login.isLogged(false);
        history.push('/');
        return localStorage.clear();
      }
      if (mode === 'edit') {
        await axios.put(`https://gabrielbenedicto-backend.herokuapp.com/projects/${ProjectSelected}`, {
          name,
          name_en: nameEN,
          description,
          description_en: descriptionEN,
          image,
          technologies: technologiesArray,
        }, {
          headers: {
            authorization: JSON.parse(token),
          }
        });
        return;
      }
      await axios.post('https://gabrielbenedicto-backend.herokuapp.com/projects', {
        name,
        name_en: nameEN,
        description,
        description_en: descriptionEN,
        image,
        technologies: technologiesArray,
      }, {
        headers: {
          authorization: JSON.parse(token),
        }
      });
      return;
    } catch (e) {
      console.error(e);
    }
  };

  const onDeleteButton = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        login.isLogged(false);
        history.push('/');
        return localStorage.clear();
      }
      await axios.delete(`https://gabrielbenedicto-backend.herokuapp.com/projects/${ProjectSelected}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px 0' }}>
    <div className="technologies" style={{ width: '20%' }}><div><h2>Tecnologias</h2></div>
      {technologies && technologies.filter((tech) => !technologiesArray?.some((tec) => tech.id === tec.id)).map((tech) => (
        <button style={{ background: 'transparent', border: 'none' }} type="button" onClick={() => {setTechnologies([...technologiesArray, tech])}}>
          <img src={tech.image} alt={tech.name} style={{ width: '50px', margin: '10px' }} />
        </button>
      ))}
    </div>
    <form className='manager-project' onSubmit={onSubmitButton}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <label htmlFor="mode-add" style={{ alignItems: 'center' }}>
          <input id="mode-add" type="radio" name="mode" checked={mode === 'add'} onClick={() => setMode('add')} />
          Adicionar
        </label>
        {(projects && projects.length > 0) && (
        <label htmlFor="mode-edit" style={{ alignItems: 'center' }}>
          <input id="mode-edit" type="radio" name="mode" checked={mode === 'edit'} onClick={() => setMode('edit')} />
          Editar
        </label>)}
      </div>
      {mode === 'edit' ? (
        <select onChange={(e) => setProjectSelected(e.target.value)} value={ProjectSelected}>
          {projects?.map((tech) => <option value={tech.id}>{tech.name}</option>)}
        </select>
      ) : <div />}
      <label>
        Nome Projeto:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome delete.." />
      </label>
      <label>
        Nome Projeto Inglês:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome delete.." />
      </label>
      <label>
        Descrição Projeto:
        <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do Projeto.." />
      </label>
      <label>
        Descrição Projeto Inglês:
        <textarea type="text" value={descriptionEN} onChange={(e) => setDescriptionEN(e.target.value)} placeholder="Descrição do Projeto em inglês.." />
      </label>
      <label>
        Link imagem da Projeto:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Link da imagem.." />
      </label>
      <button type="submit">{mode === 'add' ? 'Adicionar' : 'Editar'}</button>
      {mode === 'edit' && <button type="button" onClick={onDeleteButton}>Remover</button>}
    </form>
    <div className="technologies" style={{ width: '20%' }}><div><h2>Tecnologias Projeto</h2></div>
      {technologiesArray && technologiesArray.map((tech) => (
        <button style={{ background: 'transparent', border: 'none' }} type="button" onClick={() => {setTechnologies(technologiesArray.filter((tec) => tec.id !== tech.id))}}>
          <img src={tech.image} alt={tech.name} style={{ width: '50px', margin: '10px' }} />
        </button>
      ))}
    </div>
    </section>
  );
}
