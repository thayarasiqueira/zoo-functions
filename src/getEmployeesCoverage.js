const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function isValid(emp) {
  if (!employees.some((e) => e.id === emp.id
  || e.firstName === emp.name || e.lastName === emp.name)) {
    throw new Error('Informações inválidas');
  }
}

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
  if (!employee) return allEmployees();
  isValid(employee);
  const obj = employees.find(({ firstName, lastName, id }) =>
    employee.name === firstName || employee.name === lastName || employee.id === id);
  const { id, firstName, lastName, responsibleFor } = obj;
  const result = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor.find((ids) => animal.id === ids))
      .map(({ location }) => location),
  };
  return result;
}

module.exports = getEmployeesCoverage;
