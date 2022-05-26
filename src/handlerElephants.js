const { species } = require('../data/zoo_data');

// encontrando a primeira residente elefante
const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

// ta pegando a media de idade dos elefante
const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

// terceiro caso = falando a idade do nome do elefante passado como parametro
// segundo caso = colocando numa array todos o elefantes que tem o nome do elefante passado como parametro
// primeiro = contando quantos elefantes tem no atributo redidents do zoo
const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};

// função principal retorna o valor dos atributos do objeto elefante
// primeioro if define se possui parametro ou não
// segundo if verifica se o parametro é uma string
const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

console.log(handlerElephants('residents'));

module.exports = handlerElephants;
