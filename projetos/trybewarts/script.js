const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByClassName('family-inputs');
const matery = document.getElementsByClassName('subject');
const rate = document.getElementsByClassName('rate-form');
const obs = document.getElementById('textarea');
const loginButton = document.body.querySelector('.login-button');
const inputEmail = document.body.querySelector('#email');
const inputPassword = document.body.querySelector('#password');
const agreement = document.getElementById('agreement');
const buttonSubmitForm = document.getElementById('submit-btn');
const valorMaximo = 500;
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');

loginButton.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function changeDisabledButton() {
  if (agreement.checked) {
    buttonSubmitForm.removeAttribute('disabled');
  } else {
    buttonSubmitForm.setAttribute('disabled', true);
  }
}

agreement.addEventListener('click', changeDisabledButton);

text.addEventListener('keyup', () => {
  const inputLength = valorMaximo - text.value.length;
  counter.innerText = inputLength;
});

function createFormReply(value1, value2) {
  const p = document.createElement('p');
  const form = document.getElementById('evaluation-form');

  if (value1) {
    p.classList.add('reply-form-item');
    p.innerText = value1 + value2;
    form.appendChild(p);
  }
}

function checkInputChecked(value1, value2) {
  const output = [];
  for (let index = 0; index < value1.length; index += 1) {
    if (value1[index].checked) {
      output.push(` ${value1[index].value}`);
    }
  }
  createFormReply(value2, output);
}

function replyForm() {
  const formReply = {
    'Nome: ': `${inputName.value} ${inputLastname.value}`,
    'Email: ': inputEmailForm.value,
    'Casa: ': house.value,
    'Família: ': family,
    'Matérias:': matery,
    'Avaliação: ': rate,
    'Observações: ': obs.value,
  };
  const key = Object.keys(formReply);
  const value = Object.values(formReply);
  for (let index = 0; index < key.length; index += 1) {
    if (typeof value[index] === 'string') {
      createFormReply(key[index], value[index]);
    } else {
      checkInputChecked(value[index], key[index]);
    }
  }
}

function hideFormInput() {
  const divForm = document.getElementsByClassName('div-form');

  for (let index = 0; index < divForm.length; index += 1) {
    divForm[index].classList.add('hide');
  }
}

function buttonSubmitForms(event) {
  hideFormInput();
  createFormReply();
  replyForm();
  event.preventDefault();
}

buttonSubmitForm.addEventListener('click', buttonSubmitForms);
