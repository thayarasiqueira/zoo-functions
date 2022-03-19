const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function isValid(emp) {
  return employees.some((e) => e.name === emp.name || e.id === emp.id);
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
  if (isValid(employee) === false) throw new Error('Informações inválidas');
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
