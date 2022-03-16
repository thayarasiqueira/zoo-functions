const data = require('../data/zoo_data');

const { employees } = data;

console.log(employees);

function getEmployeeByName(employeeName) {
 return employees.filter(({ firstName, lastName }) => 
 firstName === employeeName || lastName === employeeName);
}
console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
