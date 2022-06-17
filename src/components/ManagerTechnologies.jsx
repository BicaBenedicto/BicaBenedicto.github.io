import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../sass/Login.scss';
import Context from '../services/Context';

export default function ManagerTechnologies() {
  const history = useHistory();
  const { data, login } = useContext(Context);
  const { technologies } = data;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionEN, setDescriptionEN] = useState('');
  const [image, setImage] = useState('');
  const [mode, setMode] = useState('add');
  const [technologySelected, setTechnologySelected] = useState('');

  useEffect(() => {
    if (mode === 'edit') {
      const { name, id, description, description_EN, image } = technologies[0];
      setName(name);
      setDescription(description);
      setDescriptionEN(description_EN);
      setImage(image);
      setTechnologySelected(id);
    }
  }, [mode]);


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
        await axios.put(`https://gabrielbenedicto-backend.herokuapp.com/technologies/${id}`, {
          headers: {
            authorization: token,
          },
          name,
          description,
          descriptionEN,
          image,
        });
        return;
      }
      await axios.post('https://gabrielbenedicto-backend.herokuapp.com/technologies', {
        headers: {
          authorization: token,
        },
        name,
        description,
        descriptionEN,
        image,
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
      await axios.delete(`https://gabrielbenedicto-backend.herokuapp.com/technologies/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className='manager-technology' onSubmit={onSubmitButton}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label htmlFor="mode-add">
          <input id="mode-add" type="radio" name="mode" checked={mode === 'add'} onClick={setMode('add')} />
          Adicionar
        </label>
        {(technologies && technologies.length > 0) && (
        <label htmlFor="mode-edit">
          <input id="mode-edit" type="radio" name="mode" checked={mode === 'edit'} onClick={setMode('edit')} />
          Editar
        </label>)}
      </div>
      {mode === 'edit' ? (
        <select onChange={(e) => setTechnologySelected(e.target.value)} value={technologySelected}>
          {technologies?.map((tech) => <option value={tech.id}>{tech.name}</option>)}
        </select>
      ) : <div />}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome dela.." />
      <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição da tecnologia.." />
      <textarea type="text" value={descriptionEN} onChange={(e) => setDescriptionEN(e.target.value)} placeholder="Descrição da tecnologia em inglês.." />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Link da imagem.." />
      <button type="submit">{mode === 'add' ? 'Adicionar' : 'Editar'}</button>
      {mode === 'edit' && <button type="button" onClick={onDeleteButton}>Remover</button>}
    </form>
  );
}
