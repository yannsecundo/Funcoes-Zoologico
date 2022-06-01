const data = require('../data/zoo_data');

const localByEmployees = (location) => location.responsibleFor
  .map((animalID) => data.species.find(({ id }) => animalID === id).location);

const specieByEmployees = (specie) => specie.responsibleFor
  .map((animalID) => data.species.find(({ id }) => animalID === id).name);

const createValueOfKey = (key, employe) => {
  const { id, firstName, lastName } = employe;
  if (key === 'id') return id;
  if (key === 'fullName') return `${firstName} ${lastName}`;
  if (key === 'species') return specieByEmployees(employe);
  if (key === 'locations') return localByEmployees(employe);
};

const criandoObjeto = (employe) => {
  const keysOfObj = ['id', 'fullName', 'species', 'locations'];
  return keysOfObj
    .reduce((obj, key) => ({ ...obj, [key]: createValueOfKey(key, employe) }), {});
};

function getEmployeesCoverage(parametro) {
  const coverageAll = data.employees.map((employe) => criandoObjeto(employe));
  if (parametro === undefined) return coverageAll;

  const { name, id: idInfo } = parametro;
  const resultSearch = coverageAll
    .find(({ fullName, id }) => fullName.split(' ').includes(name) || id === idInfo);
  try {
    if (resultSearch) return resultSearch;
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;
