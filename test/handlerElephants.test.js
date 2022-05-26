const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna undefined caso não receba um parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('testa se é uma funcao', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('para o argumento count deve retornar um numero inteiro', () => {
    expect(handlerElephants('count')).isInteger('true');
  });

  it('retorna uma array caso receba o parametro names', () => {
    expect(typeof handlerElephants('names')).toBe('array');
  });

  it('para o parametro averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('retorna uma array com o nome jefferson caso seja dado o parametro names', () => {
    expect(handlerElephants('names')).toContain('jefferson');
  });

  it('para o parametro location deve retornar NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  expect(handlerElephants('location')).toEqual('NW');

  it('para o parametro count deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
});
