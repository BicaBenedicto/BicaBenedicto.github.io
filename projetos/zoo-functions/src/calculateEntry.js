const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const values = prices;

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  return (child * values.child) + (adult * values.adult) + (senior * values.senior);
}

module.exports = { calculateEntry, countEntrants };
