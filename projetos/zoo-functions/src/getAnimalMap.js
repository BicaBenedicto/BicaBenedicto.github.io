const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const checkOptions = (local) => species.filter(({ location }) => local === location)
  .map(({ name }) => name);

const checkOptionsSorted = (options, local) => {
  const output = [];
  const gender = checkOptions(local);
  if (options.sorted) {
    for (let index = 0; index < gender.length; index += 1) {
      output.push({ [gender[index]]: species.filter(({ location, name }) =>
        location === local && name === gender[index])
        .find(({ residents }) => residents).residents.map(({ name }) => name).sort() });
    }
    return output;
  }
  return undefined;
};

const checkOptionsIncludeNames = (options, local) => {
  const output = [];
  const gender = checkOptions(local);
  const sorted = checkOptionsSorted(options, local);

  for (let index = 0; index < gender.length; index += 1) {
    output.push({ [gender[index]]: species.filter(({ location, name }) =>
      location === local && name === gender[index])
      .find(({ residents }) => residents).residents.map(({ name }) => name) });
  }
  if (typeof sorted === 'undefined') {
    return output;
  }
  return sorted;
};

const checkOptionsSexSort = (genero, local) => {
  const output = [];
  const gender = checkOptions(local);

  for (let index = 0; index < gender.length; index += 1) {
    output.push({ [gender[index]]: species.filter(({ location, name }) =>
      location === local && name === gender[index])
      .find(({ residents }) => residents).residents.filter(({ sex }) => genero === sex)
      .map(({ name }) => name).sort() });
  }
  return output;
};

const checkOptionsSexIncludeNames = (genero, local, sorted) => {
  const output = [];
  const gender = checkOptions(local);

  for (let index = 0; index < gender.length; index += 1) {
    output.push({ [gender[index]]: species.filter(({ location, name }) =>
      location === local && name === gender[index])
      .find(({ residents }) => residents).residents.filter(({ sex }) => genero === sex)
      .map(({ name }) => name) });
  }
  if (sorted) {
    return checkOptionsSexSort(genero, local);
  }
  return output;
};

const checkOptionsSex = ({ sex, includeNames, sorted }, location) => {
  if (sex && includeNames) {
    return checkOptionsSexIncludeNames(sex, location, sorted);
  }
  return checkOptions(location);
};

const checkOptionsValues = (options, location) => {
  if (!options) {
    return checkOptions(location);
  }
  if (options.sex) {
    return checkOptionsSex(options, location);
  }
  if (options.includeNames) {
    return checkOptionsIncludeNames(options, location);
  }
};

function getAnimalMap(options) {
  const output = {};
  species.forEach(({ location }) => {
    output[location] = checkOptionsValues(options, location);
  });
  return output;
}

console.log(getAnimalMap({ includeNames: true, sex: 'male' }));

module.exports = getAnimalMap;
