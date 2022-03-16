const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  const children = entrants.filter(({ age }) => age < 18);
  const adults = entrants.filter(({ age }) => age >= 18 && age < 50);
  const seniors = entrants.filter(({ age }) => age >= 50);
  return { child: children.length, adult: adults.length, senior: seniors.length };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const array = Object.values(entrants);
  if (array.length === 0) {
    return 0;
  }
  const list = countEntrants(entrants);
  const getPeople = Object.values(list);
  const result = (getPeople[0] * child) + (getPeople[1] * adult) + (getPeople[2] * senior);
  return result;
}

module.exports = { calculateEntry, countEntrants };
