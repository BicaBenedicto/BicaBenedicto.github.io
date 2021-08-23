const showRGB = document.getElementById('rgb-color');
let level = 100;
const divBalls = document.getElementById('div-balls');
let score = 0;
const answer = document.getElementById('answer');

function scoreShow() {
  const showScore = document.getElementById('score');

  showScore.innerText = score;
}

function levelLimited(number) {
  let output = 0;

  if (number >= 0 && number <= 255) {
    output = number;
  } else {
    const newNumberRandom = Math.random() * 255;
    const newNumber = Math.floor(newNumberRandom);
    output = newNumber;
  }

  return output;
}

function colorBall(r, g, b) {
  const ball = document.querySelectorAll('.ball');
  const correct = Math.random() * ball.length;
  const correctBall = Math.floor(correct);

  for (let index = 0; index < ball.length; index += 1) {
    const redMath = r * (index + level);
    const red = redMath / 2;
    const greenMath = g * (index + level);
    const green = greenMath / 2;
    const blueMath = b * (index + level);
    const blue = blueMath / 2;

    const colorBallRGB = `(${levelLimited(red)}, ${levelLimited(green)}, ${levelLimited(blue)})`;
    ball[index].style.backgroundColor = `rgb${colorBallRGB}`;
  }

  ball[correctBall].style.backgroundColor = showRGB.innerText;
}

function randomRGB() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const r = Math.round(red);
  const g = Math.round(green);
  const b = Math.round(blue);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  showRGB.innerText = rgb;
  colorBall(r, g, b);
}

function addBall(number) {
  for (let index = 0; index < number; index += 1) {
    const ball = document.createElement('div');

    ball.className = 'ball';
    ball.innerText = ' ';
    divBalls.appendChild(ball);
  }
}

addBall(6);
randomRGB();

function selectBallMSG(ball) {
  if (ball.style.backgroundColor === showRGB.innerText) {
    answer.innerText = 'Acertou!';
    score += 3;
    scoreShow();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
function selectBall(evento) {
  const ball = document.querySelectorAll('.ball');

  for (let index = 0; index < ball.length; index += 1) {
    if (evento.target === ball[index]) {
      selectBallMSG(ball[index]);
    }
  }
}

divBalls.addEventListener('click', selectBall);

function startGame() {
  randomRGB();
  answer.innerText = 'Escolha uma cor';
}

const buttonResetColors = document.getElementById('reset-game');
buttonResetColors.addEventListener('click', startGame);
const buttonLevelUp = document.getElementById('level-up');

function levelUp() {
  if (level > 0) {
    level -= 10;
    addBall(1);
    randomRGB();
  } else {
    buttonLevelUp.innerText = 'Dificuldade máxima';
  }
}

buttonLevelUp.addEventListener('click', levelUp);
