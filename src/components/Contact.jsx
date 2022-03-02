import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';
import '../css/Contact.css';

const SERVICE_ID = 'service_b4xnyht';
const TEMPLATE_ID = 'template_a7eg9en';
const USER_ID = 'user_hO4bWvSVIigeb7LDyJZHZ';

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
        return <i className="bi bi-check-square-fill"></i>;
      case 'ERROR':
        return <i className="bi bi-x-square-fill"></i>;
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
        <i className="bi bi-x-square-fill"></i>
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
