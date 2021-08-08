// Desafio 10
function techList(valor1, valor2) {
  valor1 = valor1.sort();
  let techInfo;
  let saida = [];
  for (let key in valor1) {
    if (valor1.length > 0) {
      techInfo = {
        tech: valor1[key],
        name: valor2,
      };
      saida.push(techInfo);
    }
  }
  if (valor1.length === 0) {
    return 'Vazio!';
  }
  return saida;
}

// Desafio 11
function checkNumbers(numbers) {
  let output = false;
  if (numbers.length !== 11) {
    output = true;
  }
  return output;
}

function checkHighLowNumber(numbers) {
  let output = false;
  for (let n of numbers) {
    if (n > 10 || n < 0) {
      output = true;
    }
  }
  return output;
}

function checkRepet(numbers) {
  let count = {};
  for (let n of numbers) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }
  let repeats = (Object.values(count).sort());
  return repeats[repeats.length - 1];
}

function compareNumberValidate(numbers) {
  return checkHighLowNumber(numbers) || checkRepet(numbers) >= 3;
}
function transformNumber(numbers) {
  let dd = `(${numbers.slice(0, 2).join('')}) `;
  let firstFivePrefix = numbers.slice(2, 7).join('');
  let secondFourPrefix = numbers.slice(7, 11).join('');
  return `${dd + firstFivePrefix}-${secondFourPrefix}`;
}
function generatePhoneNumber(numbers) {
  if (checkNumbers(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (compareNumberValidate(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return transformNumber(numbers);
}

// Desafio 12
function checkTriangleLine(lineA, lineB, lineC) {
  let compare1 = Math.abs(lineB - lineA) < lineA < lineB + lineC;
  let compare2 = Math.abs(lineA - lineC) < lineB < lineA + lineC;
  let compare3 = Math.abs(lineA - lineB) < lineC < lineA + lineB;
  if (compare1 && compare2 && compare3) {
    return true;
  }
}

function checkLineSize(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  let output = true;
  if (checkTriangleLine(lineA, lineB, lineC)) {
    if (checkLineSize(lineA, lineB, lineC)) {
      output = false;
    }
  } else {
    output = false;
  } return output;
}

// Desafio 13
function hydrate(comanda) {
  let quantidade = comanda.match(/\d+/g);
  let coposAgua = 0;
  let output = '';

  for (let key of quantidade) {
    coposAgua += parseInt(key, 20);
  }
  if (coposAgua === 1) {
    output = `${coposAgua} copo de água`;
  } else {
    output = `${coposAgua} copos de água`;
  }
  return output;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
