const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const managers = employees.map((element) => `${element.managers}`);
  return managers.some((e) => e.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const obj = employees.filter(({ managers }) => managers.includes(managerId));
    const newObj = obj.map((element) => `${element.firstName} ${element.lastName}`);
    return newObj;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
