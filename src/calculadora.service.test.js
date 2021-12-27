import React from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
  const [calcular, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] =
    CalculadoraService();

  it('deve garantir que 1 + 4 = 5.', () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });
  it('deve garantir que 4 - 1 = 3.', () => {
    let subtracao = calcular(4, 1, SUBTRACAO);
    expect(subtracao).toEqual(3);
  });
  it('deve garantir que 4 / 1 = 4.', () => {
    let divisao = calcular(4, 1, DIVISAO);
    expect(divisao).toEqual(4);
  });
  it('deve garantir que 4 * 1 = 4.', () => {
    let multiplicacao = calcular(4, 1, MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });
  it('deve retornar 0 para operação inválida', () => {
    let operacaoInvalida = calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  });
});
