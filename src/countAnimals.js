const data = require('../data/zoo_data');

const { species } = data;
const count = { 'lions': 4,
'tigers': 2,
'bears': 3,
'penguins': 4,
'otters': 4,
'frogs': 2,
'snakes': 2,
'elephants': 4,
'giraffes': 6,
};

function countAnimals(animal) {
  if (!animal) {
    return count;
  }
  const anim = Object.values(animal)
  if (anim.length === 1) {
    const obj = species.filter(({ name }) => name.includes(anim));
    const [{ residents }] = obj;
    return residents.length;
  } else {
      const obj = species.filter(({ name }) => name.includes(anim[0]));
      const [{ residents }] = obj;
      const newObj = residents.filter(({ sex }) => sex === anim[1].toString());
      return newObj.length;
  }
}

module.exports = countAnimals;
