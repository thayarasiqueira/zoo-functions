const data = require('../data/zoo_data');

const { species } = data;

const getNameAndSex = (residents, gender) =>
  residents.filter((animals) => {
    if (animals.sex === gender || gender === undefined) {
      return true;
    } 
    return false
  }).map((animal) => animal.name);

function getAnimalMap(options = { includeNames: false, sorted: false, sex: '' }) {
  const getMap = species.reduce((acc, { location, name, residents }) => {
    if (options.includeNames) {
      const arrayNames = getNameAndSex(residents, options.sex);
      if (options.sorted) { 
      arrayNames.sort();
      }
      acc[location].push({ [name]: arrayNames });
    } else { acc[location].push(name); }
    return acc
  }, { NE: [], NW: [], SE: [], SW: [] });
  return getMap;
};

module.exports = getAnimalMap;
