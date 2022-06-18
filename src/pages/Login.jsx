import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../sass/Login.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../services/Context';
import Menu from '../components/Menu';

export default function Login() {
  const { projects, menu, login } = useContext(Context);
  const { projectHasShow } = projects;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeBlur = () => {
    if(projectHasShow === 'hasShow' || menu === 'menu-show') return 'hasShow';
    if(projectHasShow === 'notStarted' || menu === 'menu-empty') return 'empty';
    return 'hasHidden'
  };

  const verifyLogin = () => !email || !password;

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    if (verifyLogin()) return alert('Login invalido!');
    try {
      const access = await axios.post('https://gabrielbenedicto-backend.herokuapp.com/login', {
          email,
          password,
      });
      console.log(access, 'ACESSO');
      const { token } = access.data;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify({ email }));
      login.isLogged(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header />
      <main className={changeBlur()} style={{ 'margin': '0 auto','maxWidth': '1700px' }}>
        <form className='login' onSubmit={onSubmitLogin}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
          <button type="submit">Entrar</button>
        </form>
      </main>
      <Footer />
      <Menu />
    </>
  );
}
