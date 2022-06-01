const data = require('../data/zoo_data');

const arrayNomes = (sex, sorted, residents) => {
  if (sorted && sex) {
    return residents.filter(({ sex: filter }) => filter === sex).map(({ name }) => name).sort();
  }
  if (sorted) {
    return residents.map(({ name }) => name).sort();
  }
  if (sex) {
    return residents.filter(({ sex: filter }) => filter === sex).map(({ name }) => name);
  }
  return residents.map(({ name }) => name);
};

const objNomes = (sex, sorted) => data.species
  .reduce((objeto, { name, location, residents }) => ({ ...objeto,
    [location]: [...(objeto[location] || []),
      { [name]: arrayNomes(sex, sorted, residents) }] }), {});

const objetoDefault = () => data.species
  .reduce((obj, { name, location }) =>
    ({ ...obj, [location]: [...(obj[location] || []), name] }), {});

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return objetoDefault();
  if (includeNames) return objNomes(sex, sorted);
}

module.exports = getAnimalMap;
