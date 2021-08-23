const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
memeContainer.style.border = '1px solid black';

function textCreate() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', textCreate);

function imagemContain() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function setImage() {
      memeImage.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
  }
}

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', imagemContain);

function changeBorder(evento) {
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');

  if (evento.target === fire) {
    memeContainer.style.border = '3px dashed red';
  }
  if (evento.target === water) {
    memeContainer.style.border = '5px double blue';
  }
  if (evento.target === earth) {
    memeContainer.style.border = '6px groove green';
  }
}

const section = document.getElementById('meme-generator');
section.addEventListener('click', changeBorder);

function changePreviewImage(evento) {
  const memePreview = document.getElementsByClassName('meme-preview');

  for (let index = 0; index < memePreview.length; index += 1) {
    if (evento.target === memePreview[index]) {
      memeImage.setAttribute('src', memePreview[index].src);
    }
  }
}

const imagePreview = document.getElementById('image-preview');
imagePreview.addEventListener('click', changePreviewImage);
