const data = require('../data/zoo_data');

const { species } = data;
const allAnimals = species.reduce((acc, curr) => {
  acc[curr.name] = (curr.residents.length);
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) {
    return allAnimals;
  }
  const anim = Object.values(animal);
  if (anim.length === 1) {
    const obj = species.filter(({ name }) => name.includes(anim));
    const [{ residents }] = obj;
    return residents.length;
  }
  const obj = species.filter(({ name }) => name.includes(anim[0]));
  const [{ residents }] = obj;
  const newObj = residents.filter(({ sex }) => sex === anim[1].toString());
  return newObj.length;
}

module.exports = countAnimals;
