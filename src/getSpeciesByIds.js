const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  } 
  return species.filter(({ id }) => id === ids[0] || id === ids[1]);
}

module.exports = getSpeciesByIds;
