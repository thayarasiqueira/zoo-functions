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
    species: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ location }) => location),
  }));
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return allEmployees();
  };
  if (!employees.some((e) => e.name === employee.name || e.id === employee.id)) {
    throw new Error('Informações inválidas');
  }
  const obj = employees.find(({ firstName, lastName, id }) => 
  employee.name === firstName || employee.name === lastName || employee.id === id);
  const { id, firstName, lastName, responsibleFor } = obj;
  const result = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ location }) => location)
  };
  return result;
}

console.log(getEmployeesCoverage({ name: 'Shaa'}));
module.exports = getEmployeesCoverage;
