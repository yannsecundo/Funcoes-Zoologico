const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((PessoaNomeTest) => PessoaNomeTest.firstName === employeeName
    || PessoaNomeTest.lastName === employeeName);
}

module.exports = getEmployeeByName;
