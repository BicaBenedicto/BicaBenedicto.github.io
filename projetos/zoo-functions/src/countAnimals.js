const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const output = {};
    species.forEach(({ name, residents }) => {
      output[name] = residents.length;
    });
    return output;
  }
  if (animal.sex) {
    return species.find(({ name }) => name === animal.specie).residents
      .filter(({ sex }) => sex === animal.sex).length;
  }
  const output = species.find(({ name }) => name === animal.specie);

  return output.residents.length;
}

module.exports = countAnimals;
