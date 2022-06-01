const data = require('../data/zoo_data');

const diaFechado = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const animaisEmExibicao = (day) => data.species.filter(({ availability }) => availability
  .includes(day))
  .map(({ name }) => name);

const determinandoDiaFechado = (day) => {
  if (day === 'Monday') return diaFechado();

  const { open, close } = data.hours[day];

  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: animaisEmExibicao(day),
  };
};

function getSchedule(scheduleTarget) {
  const arrayAnimais = data.species.map(({ name }) => name);
  const arrayDias = Object.keys(data.hours);

  if (scheduleTarget === 'Monday') {
    return { Monday: diaFechado() };
  }
  if (arrayDias.includes(scheduleTarget)) {
    return { [scheduleTarget]: determinandoDiaFechado(scheduleTarget) };
  }
  if (arrayAnimais.includes(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
  return arrayDias.reduce((objeto, day) => ({ ...objeto, [day]: determinandoDiaFechado(day) }), {});
}

module.exports = getSchedule;
