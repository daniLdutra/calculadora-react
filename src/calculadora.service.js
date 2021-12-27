function CalculadoraService() {
  const SOMA = '+';
  const SUBTRACAO = '-';
  const DIVISAO = '/';
  const MULTIPLICACAO = '*';

  function concatenarNumero(numAtual, numConcat) {
    //se conter apenas "0" ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    //se primeiro digito for ".", concatena antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //caso "." digitado e já contenha o ponto, apenas retornar
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  function calcular(numero1, numero2, operacao) {
    let resultado;
    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;
      case SUBTRACAO:
        resultado = numero1 - numero2;
        break;
      case DIVISAO:
        resultado = numero1 / numero2;
        break;
      case MULTIPLICACAO:
        resultado = numero1 * numero2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }

  return [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO];
}

export default CalculadoraService;
