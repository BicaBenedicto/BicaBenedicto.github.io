const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const peoples = () => employees.map(({ id, firstName, lastName, responsibleFor }) => {
  const output = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  for (let index = 0; index < responsibleFor.length; index += 1) {
    output.species.push(species.find((specie) => specie.id === responsibleFor[index]).name);
    output.locations.push(species.find((specie) => specie.id === responsibleFor[index]).location);
  }
  return output;
});

function getEmployeesCoverage(identifier) {
  if (!identifier) return peoples();

  if (!peoples().some((people) => (people.id === identifier.id
    || people.fullName.includes(identifier.name)))) { throw new Error('Informações inválidas'); }

  return peoples().find((people) => (people.id === identifier.id
    || people.fullName.includes(identifier.name)));
}

console.log(getEmployeesCoverage({ name: 'Nigel' }));

module.exports = getEmployeesCoverage;
