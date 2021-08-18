function unselectOthers(evento) {
  const color = document.querySelectorAll('.color');
  for (let c = 0; c < color.length; c += 1) {
    if (evento.target !== color[c]) {
      color[c].classList.remove('selected');
    }
  }
}

function select(evento) {
  if (!evento.target.classList.contains('selected')) {
    unselectOthers(evento);
    evento.target.classList.add('selected');
  }
}

const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', select);

function changeColor(evento) {
  const event = evento;
  const color = document.querySelectorAll('.color');
  for (let c = 0; c < color.length; c += 1) {
    if (color[c].classList.contains('selected')) {
      event.target.style.backgroundColor = color[c].style.backgroundColor;
    }
  }
}

const colorBorder = document.getElementById('pixel-board');
colorBorder.addEventListener('click', changeColor);

function clearBorder() {
  const colorBorderChildren = document.getElementById('pixel-board').children;

  for (let c = 0; c < colorBorderChildren.length; c += 1) {
    colorBorderChildren[c].style.backgroundColor = 'white';
  }
}

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clearBorder);

function addPixel(number) {
  const numberPixels = number * number;
  for (let index = 1; index <= numberPixels; index += 1) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    colorBorder.appendChild(pixel);
  }
}

function removePixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
}

function checkRange(range) {
  let tamanho = range;
  if (range < 5) {
    tamanho = 5;
  } else if (range > 50) {
    tamanho = 50;
  }
  return tamanho;
}
function pixelPanel() {
  let numberPixels = document.getElementById('board-size').value;
  if (numberPixels) {
    numberPixels = checkRange(numberPixels);
    removePixel();
    addPixel(numberPixels);
    const borda = numberPixels * 40;
    const px = 'px';
    colorBorder.style.width = borda + px;
    colorBorder.style.height = borda + px;
  } else {
    alert('Board inválido!');
  }
}

const buttonAddPixel = document.getElementById('generate-board');
buttonAddPixel.addEventListener('click', pixelPanel);

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const colorGenerate = `rgb(${r}, ${g}, ${b})`;

  return colorGenerate;
}

function getInitColor() {
  const colorPaletteChildren = document.querySelectorAll('.color');

  for (let index = 1; index < colorPaletteChildren.length; index += 1) {
    colorPaletteChildren[index].style.backgroundColor = generateColor();
  }
}

getInitColor();

function inicio() {
  const buttonVQV = document.getElementById('board-size');
  const borda = 5 * 40;
  const px = 'px';

  buttonVQV.type = 'number';
  buttonVQV.min = '1';

  addPixel(5);

  colorBorder.style.width = borda + px;
  colorBorder.style.height = borda + px;
}

inicio();

const buttonResetColor = document.getElementById('reset-color');
buttonResetColor.addEventListener('click', getInitColor);

function morePalette() {
  const paleta = document.createElement('div');

  paleta.className = 'color';
  paleta.style.backgroundColor = generateColor();
  colorPalette.appendChild(paleta);
}

const buttonMorePalette = document.getElementById('more-palette');
buttonMorePalette.addEventListener('click', morePalette);

function lessPalette() {
  colorPalette.lastElementChild.remove();
}

const buttonLessPalette = document.getElementById('less-palette');
buttonLessPalette.addEventListener('click', lessPalette);

function alternateColor() {
  const colorNew = document.getElementById('altenate-color').value;
  const selected = document.querySelector('div.selected');

  selected.style.backgroundColor = colorNew;
}

const buttonNewColor = document.getElementById('change-color');
buttonNewColor.addEventListener('click', alternateColor);
