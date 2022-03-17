const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const array = ids;
  if (!ids) {
    return [];
  } 
  return species.filter(({ id }) => id === array[0] || id === array[1]);
}

module.exports = getSpeciesByIds;
