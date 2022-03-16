const data = require('../data/zoo_data');
const { species } = data;

function getAnimalsOlderThan(animal, minAge) {
  const animals = species.filter(({name}) => name === animal);
  const [ { residents } ] = species;
  const verify = residents.every(({age}) => age >= minAge);
  return verify;
}

module.exports = getAnimalsOlderThan;
