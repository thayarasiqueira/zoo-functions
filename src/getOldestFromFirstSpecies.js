const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(idEmployee) {
  const employee = employees.find(({ id }) => id === idEmployee);
  const { responsibleFor } = employee;
  const animals = species.find(({ id }) => id === responsibleFor[0]);
  const resident = animals.residents;
  const animalAge = resident.reduce((prev, curr) => (curr.age > prev ? curr.age : prev), 0);
  const animal = resident.filter(({ age }) => age === animalAge);
  const [{ name, sex, age }] = animal;
  const result = [name, sex, age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
