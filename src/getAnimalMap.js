const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  const NE = species.filter(({ location }) => location === 'NE')
    .map(({ name }) => name);
    const NW = species.filter(({ location }) => location === 'NW')
    .map(({ name }) => name);
    const SE = species.filter(({ location }) => location === 'SE')
    .map(({ name }) => name);
    const SW = species.filter(({ location }) => location === 'SW')
    .map(({ name }) => name);
  if (!options || options.includeNames !== true) {
    return { NE, NW, SE, SW };
  }
  const allAnimals = species.reduce((acc, curr) => [...acc, curr.residents], []);
  const lions = allAnimals[0].reduce((acc, curr) => [...acc, curr.name], []);
  const tigers = allAnimals[1].reduce((acc, curr) => [...acc, curr.name], []);
  const bears = allAnimals[2].reduce((acc, curr) => [...acc, curr.name], []);
  const penguins = allAnimals[3].reduce((acc, curr) => [...acc, curr.name], []);
  const otters = allAnimals[4].reduce((acc, curr) => [...acc, curr.name], []);
  const frogs = allAnimals[5].reduce((acc, curr) => [...acc, curr.name], []);
  const snakes = allAnimals[6].reduce((acc, curr) => [...acc, curr.name], []);
  const elephants = allAnimals[7].reduce((acc, curr) => [...acc, curr.name], []);
  const giraffes = allAnimals[8].reduce((acc, curr) => [...acc, curr.name], []);
  const lionGender = allAnimals[0].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const tigerGender = allAnimals[1].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const bearGender = allAnimals[2].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const penguinGender = allAnimals[3].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const otterGender = allAnimals[4].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const frogGender = allAnimals[5].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const snakeGender = allAnimals[6].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const elephantGender = allAnimals[7].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  const giraffeGender = allAnimals[8].filter(({ sex }) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
  if (options.includeNames === true && options.sorted === true && options.sex !== undefined) {
    return { NE: [{ lions: lionGender.sort() },{ giraffes: giraffeGender.sort() }],
     NW: [{tigers: tigerGender.sort()},{bears: bearGender.sort()},{elephants: elephantGender.sort()}],
      SE: [{ penguins: penguinGender.sort() },{ otters: otterGender.sort() }], SW:[{ frogs: frogGender.sort() },
        { snakes: snakeGender.sort() }],};
    } else if (options.includeNames === true && options.sex !== undefined) { 
      return { NE: [{ lions: lionGender },{ giraffes: giraffeGender }], NW: [{ tigers: tigerGender },{ bears: bearGender },{ elephants: elephantGender }], SE: [{ penguins: penguinGender },{ otters: otterGender }], SW:[{ frogs: frogGender },{ snakes: snakeGender }]}
     } else if (options.includeNames === true && options.sorted === true) {
    return { NE: [{ lions: lions.sort(), },{ giraffes: giraffes.sort(), }], NW: [{ tigers: tigers.sort(), },{ bears: bears.sort(), },{ elephants: elephants.sort(), }], SE: [{ penguins: penguins.sort(), },{ otters: otters.sort(), }], SW:[{ frogs: frogs.sort(), },{ snakes: snakes.sort(), }],};
  } else if (options.includeNames === true) {
    return { NE: [{ lions, },{ giraffes, }], NW: [{ tigers, },{ bears, },{ elephants, }], SE: [{ penguins, },{ otters, }], SW:[{ frogs, },{ snakes, }],};
  }
};


module.exports = getAnimalMap;
