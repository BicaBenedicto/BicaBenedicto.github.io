const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  return species.some(({ name, residents }) => name === animal
    && residents.every(({ age }) => age > minAge));
}

module.exports = getAnimalsOlderThan;
