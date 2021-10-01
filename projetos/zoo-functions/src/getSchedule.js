const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const calendar = () => {
  const output = {};
  const days = Object.keys(hours);
  const hour = Object.values(hours);

  for (let index = 0; index < days.length; index += 1) {
    const { open, close } = hour[index];
    output[days[index]] = {
      officeHour: ((open !== 0) ? `Open from ${open}am until ${close}pm` : 'CLOSED'),
      exhibition: ((open !== 0) ? (species.filter(({ availability }) => availability
        .includes(days[index])).map(({ name }) => name)) : 'The zoo will be closed!') };
  }
  return output;
};

const checkSearch = (word) => {
  const days = Object.keys(hours);
  const animals = species.map(({ name }) => name);

  return (!word || (!days.includes(word) && !animals.includes(word)));
};

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const animals = species.map(({ name }) => name);

  if (checkSearch(scheduleTarget)) return calendar();

  if (days.includes(scheduleTarget)) return { [scheduleTarget]: calendar()[scheduleTarget] };

  if (animals.includes(scheduleTarget)) {
    return (species.filter(({ name }) => name === scheduleTarget)
      .map(({ availability }) => availability)[0]);
  }
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
