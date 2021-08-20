const paragrafo = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');

function contador() {
  const span = document.querySelectorAll('#carta-gerada span');

  cartaContador.innerText = span.length;
}

function randomClassSelect(group, span) {
  const indexRandom = Math.round(Math.random() * group.length);

  span.classList.add(group[indexRandom]);
}

function randomClass(span) {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2', 'other1', 'other2', 'other3'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const inclinationGroup = ['skewleft', 'skewright', 'skewleft2', 'skewright2', 'skewleft3',
    'skewright3'];

  randomClassSelect(styleGroup, span);
  randomClassSelect(sizeGroup, span);
  randomClassSelect(rotationGroup, span);
  randomClassSelect(inclinationGroup, span);
}

function removeSpan() {
  paragrafo.innerText = '';
  for (let index = 0; index < paragrafo.children.length; index += 1) {
    paragrafo.children[0].remove();
  }
}

function splitAndAddSpan(msg, msgSeparada) {
  if (msg && msg !== ' ') {
    for (let index = 0; index < msgSeparada.length; index += 1) {
      const palavra = document.createElement('span');

      palavra.innerText = msgSeparada[index];
      randomClass(palavra);
      paragrafo.appendChild(palavra);
    }
  } else {
    paragrafo.innerText = 'por favor, digite o conteúdo da carta.';
  }
}
function generateMail() {
  removeSpan();
  const carta = document.getElementById('carta-texto');
  const msg = carta.value;
  const msgSeparada = msg.split(' ');
  const msgSeparadaNotNull = [];

  for (let index = 0; index < msgSeparada.length; index += 1) {
    if (msgSeparada[index] !== '') {
      msgSeparadaNotNull.push(msgSeparada[index]);
    }
  }

  splitAndAddSpan(msg, msgSeparadaNotNull);
  contador();
}

const buttonGenerateMail = document.getElementById('criar-carta');
buttonGenerateMail.addEventListener('click', generateMail);

function changeSpan(evento) {
  const span = document.querySelectorAll('#carta-gerada span');

  for (let index = 0; index < span.length; index += 1) {
    if (evento.target === span[index]) {
      span[index].className = '';
      randomClass(span[index]);
    }
  }
}

const clickSpan = document.querySelector('#carta-gerada');
clickSpan.addEventListener('click', changeSpan);
