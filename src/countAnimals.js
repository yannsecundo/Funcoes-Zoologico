const data = require('../data/zoo_data');

const contadorAnimal = (especieDoAnimal) => data
  .species.find(({ name }) => name === especieDoAnimal).residents.length;

const contadorAnimalSexo = (especieDoAnimal, sexoDoAnimal) => data
  .species.find(({ name }) => name === especieDoAnimal)
  .residents.filter(({ sex }) => sex === sexoDoAnimal).length;

function countAnimals(animal = {}) {
  const { specie, sex } = animal;
  if (sex) return contadorAnimalSexo(specie, sex);
  if (specie) return contadorAnimal(specie);

  return data.species.reduce((ObjtoEspecie,
    { name }) => ({ ...ObjtoEspecie, [name]: contadorAnimal(name) }), {});
}

module.exports = countAnimals;
