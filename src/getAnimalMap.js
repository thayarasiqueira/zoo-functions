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
  const allAnimals = species.reduce((acc, curr) => [...acc, curr.name, curr.residents], [])
  let lions = allAnimals.slice(0, 2)
  lions = lions[1].reduce((acc, curr) => [...acc, curr.name], [])
  let tigers = allAnimals.slice(2, 4);
  tigers = tigers[1].reduce((acc, curr) => [...acc, curr.name], [])
  let bears = allAnimals.slice(4, 6);
  bears = bears[1].reduce((acc, curr) => [...acc, curr.name], [])
  let penguins = allAnimals.slice(6, 8);
  penguins = penguins[1].reduce((acc, curr) => [...acc, curr.name], [])
  let otters = allAnimals.slice(8, 10);
  otters = otters[1].reduce((acc, curr) => [...acc, curr.name], [])
  let frogs = allAnimals.slice(10, 12);
  frogs = frogs[1].reduce((acc, curr) => [...acc, curr.name], [])
  let snakes = allAnimals.slice(12, 14);
  snakes = snakes[1].reduce((acc, curr) => [...acc, curr.name], [])
  let elephants = allAnimals.slice(14, 16);
  elephants = elephants[1].reduce((acc, curr) => [...acc, curr.name], [])
  let giraffes = allAnimals.slice(16, 18);
  giraffes = giraffes[1].reduce((acc, curr) => [...acc, curr.name], [])
  if (!options || options.includeNames !== true) {
    return { NE, NW, SE, SW,};
  } else if (options.includeNames === true && options.sorted === true && options.sex !== undefined) {
    const allAnimals = species.reduce((acc, curr) => [...acc, curr.name, curr.residents], [])
    const lionGender = allAnimals[1].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], []);
    const tigerGender = allAnimals[3].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const bearGender = allAnimals[5].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const penguinGender = allAnimals[7].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const otterGender = allAnimals[9].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const frogGender = allAnimals[11].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const snakeGender = allAnimals[13].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const elephantGender = allAnimals[15].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])
    const giraffeGender = allAnimals[17].filter(({sex}) => sex === options.sex)
    .reduce((acc, curr) => [...acc, curr.name], [])    
    lionGender.sort();
    giraffeGender.sort();
    tigerGender.sort();
    bearGender.sort();
    elephantGender.sort();
    penguinGender.sort();
    otterGender.sort();
    frogGender.sort();
    snakeGender.sort();
    console.log(allAnimals);
    return { NE: [{lions:lionGender},{giraffes: giraffeGender}], NW: [{tigers:tigerGender},{bears:bearGender},{elephants:elephantGender}], SE: [{penguins:penguinGender},{otters:otterGender}], SW:[{frogs:frogGender},{snakes:snakeGender}],}
    } else if (options.includeNames === true && options.sex !== undefined) {
      const lionGender = allAnimals[1].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], []);
      const tigerGender = allAnimals[3].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const bearGender = allAnimals[5].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const penguinGender = allAnimals[7].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const otterGender = allAnimals[9].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const frogGender = allAnimals[11].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const snakeGender = allAnimals[13].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const elephantGender = allAnimals[15].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])
      const giraffeGender = allAnimals[17].filter(({sex}) => sex === options.sex)
      .reduce((acc, curr) => [...acc, curr.name], [])   
      return { NE: [{lions:lionGender},{giraffes: giraffeGender}], NW: [{tigers:tigerGender},{bears:bearGender},{elephants:elephantGender}], SE: [{penguins:penguinGender},{otters:otterGender}], SW:[{frogs:frogGender},{snakes:snakeGender}]}
     } else if (options.includeNames === true && options.sorted === true) {
    lions.sort();
    giraffes.sort();
    tigers.sort();
    bears.sort();
    elephants.sort();
    penguins.sort();
    otters.sort();
    frogs.sort();
    snakes.sort();
    return { NE: [{lions,},{giraffes,}], NW: [{tigers,},{bears,},{elephants,}], SE: [{penguins,},{otters,}], SW:[{frogs,},{snakes,}],}
  } else if (options.includeNames === true) {
    return { NE: [{lions,},{giraffes,}], NW: [{tigers,},{bears,},{elephants,}], SE: [{penguins,},{otters,}], SW:[{frogs,},{snakes,}],}
  }
}

console.log(getAnimalMap({ includeNames: true, sex: 'female',sorted: true}));

module.exports = getAnimalMap;
