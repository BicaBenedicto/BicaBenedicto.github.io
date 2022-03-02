import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';
import '../css/Contact.css';

const SERVICE_ID = 'service_b4xnyht';
const TEMPLATE_ID = 'template_a7eg9en';
const USER_ID = 'user_hO4bWvSVIigeb7LDyJZHZ';

const CHECK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-check-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
  </svg>
);

const ERROR_ICON = (
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
);

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, hasLoading] = useState(false);
  const [status, setStatus] = useState(null);

  emailjs.init(USER_ID);

  const sendForm = (e) => {
    e.preventDefault();
    hasLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((_result) => {
        hasLoading(false);
        setStatus('OK');
      }, (_error) => {
        hasLoading(false);
        setStatus('ERROR');
      });
  };

  const sendStatus = () => {
    switch (status) {
      case 'OK':
        return CHECK_ICON;
      case 'ERROR':
        return ERROR_ICON;
      default:
        return <i></i>;
    }
  };

  return (
    <section className="local-bootstrap">
      <form ref={ form } onSubmit={ sendForm }>
        <label>
          Nome: 
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label>
          E-mail: 
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label>
          Mensagem: 
          <textarea
            name="message"
            value={ message }
            onChange={ (e) => setMessage(e.target.value) }
          />
        </label>
        <div>
          {loading
          ? <Spinner animation="border" variant="primary" />
          : <button
              type="submit"
            >
              Enviar
            </button>}
          { sendStatus() }
        </div>
      </form>
    </section>
  )
};
