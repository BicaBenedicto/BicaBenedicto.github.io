// Desafio 1
function compareTrue(param1, param2) {
  let compareTrue2 = false;
  if (param1 === true && param2 === true) {
    compareTrue2 = true;
  } else {
    compareTrue2 = false;
  }
  return compareTrue2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(valor) {
  let split = valor.split(' ');
  return split;
}

// Desafio 4
function concatName(valor) {
  let virgulaEspaco = ', ';
  let concatNames = valor[valor.length - 1] + virgulaEspaco + valor[0];
  return concatNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valor) {
  let hitCounts = 0;
  let number = Math.max(...valor);
  for (let key of valor) {
    if (number === key) {
      hitCounts += 1;
    }
  }
  return hitCounts;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position = Math.abs(mouse - cat1);
  let position2 = Math.abs(mouse - cat2);
  let output;
  if (position === position2) {
    output = 'os gatos trombam e o rato foge';
  } if (position < position2) {
    output = 'cat1';
  } if (position2 < position) {
    output = 'cat2';
  }
  return output;
}

// Desafio 8
function divisionFiveAndThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
}

function divisionThree(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    return true;
  }
}

function divisionFive(number) {
  if (number % 5 === 0 && number % 3 !== 0) {
    return true;
  }
}

function notDivisibleFiveAndThree(number) {
  if (number % 3 !== 0 && number % 5 !== 0) {
    return true;
  }
}

function checkDivisiblesAndNot(number) {
  let output;
  if (divisionFiveAndThree(number)) {
    output = 'fizzBuzz';
  }
  if (divisionThree(number)) {
    output = 'fizz';
  }
  if (divisionFive(number)) {
    output = 'buzz';
  }
  if (notDivisibleFiveAndThree(number)) {
    output = 'bug!';
  }
  return output;
}

function fizzBuzz(array) {
  let fizbuz = [];
  for (let show of array) {
    fizbuz.push(checkDivisiblesAndNot(show));
  }
  return fizbuz;
}

// Desafio 9
function encode(valor) {
  let out;
  out = valor.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4)
    .replace(/u/g, 5);
  return out;
}

function decode(valor) {
  let out;
  out = valor.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return out;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
