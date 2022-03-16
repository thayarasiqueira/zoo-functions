const data = require('../data/zoo_data');

const { employees } = data;

// function verify(managerId) {
//   if (managerId === false) {
//     throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
//   }
// };

// if (newObj === undefined) {
//   throw new Error('teste')
// } else {

// OBS só falta implementar o erro corretamente, o resto ja funciona

function isManager(id) {
  const managers = employees.map((element) => `${element.managers}`);
  return managers.some((e) => e.includes(id));
}

function getRelatedEmployees(managerId) {
  const obj = employees.filter(({ managers }) => managers.includes(managerId));
  const newObj = obj.map((element) => `${element.firstName} ${element.lastName}`);
  return newObj;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
