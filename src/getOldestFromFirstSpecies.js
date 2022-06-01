const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiraEspecie = data.employees.find(({ id: idEspecie }) => idEspecie === id)
    .responsibleFor[0];
  const especieMaisVelha = data.species.find(({ id: idEspecie }) => idEspecie === primeiraEspecie)
    .residents
    .reduce((old, resident) => {
      if (old.age > resident.age) return old;
      return resident;
    });
  return Object.values(especieMaisVelha);
}

module.exports = getOldestFromFirstSpecies;
