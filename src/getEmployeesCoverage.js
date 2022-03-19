const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

// function isValid(id) {
//   const employee = Object.values(id).toString();
//   const verify = employees.some((e) => e.id === employee || e.firstName === employee || e.lastName === employee);
//   if (verify === false) {
//     throw new Error('Informações inválidas');
//   }
// }

function allEmployees() {
  return employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids)).map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids)).map(({ location }) => location)
  }))
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return allEmployees();
  }
  const parameter = Object.values(employee).toString();
  const obj = employees.find(({ firstName, lastName, id }) => parameter === firstName || parameter === lastName || parameter === id)
  if (obj === undefined) throw new Error('Informações inválidas')
  const { id, firstName, lastName, responsibleFor } = obj;
  const result = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids)).map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids)).map(({ location }) => location)
  };
  return result;
}

console.log(getEmployeesCoverage({ name: 'Shaa'}));
module.exports = getEmployeesCoverage;
