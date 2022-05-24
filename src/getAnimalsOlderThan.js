const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalNomeTest) => animalNomeTest.name === animal)
    .residents.every(({ age: idadeAnimal }) => idadeAnimal > age);
}
// teste da função
// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
