const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.some((element) => id === element));
}

function getRelatedEmployees(managerId) {
  const output = [];

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  employees.map(({ firstName, lastName, managers }) => {
    if (managers.some((element) => element === managerId)) {
      output.push(`${firstName} ${lastName}`);
    } return undefined;
  });
  return output;
}

module.exports = { isManager, getRelatedEmployees };
