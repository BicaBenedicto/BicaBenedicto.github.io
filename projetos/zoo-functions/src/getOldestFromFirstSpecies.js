const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeesId) {
  const animalId = employees.find(({ id }) => id === employeesId).responsibleFor.find((animal) =>
    species.find((specie) => specie.id === animal));

  return Object.values(species.find(({ id }) => id === animalId).residents
    .sort((a, b) => b.age - a.age)[0]);
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
