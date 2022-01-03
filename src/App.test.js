import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve limpar o campo de número', () => {
    const { getByTestId, getByText } = render(<Calculadora />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });

  it('deve subtrair 3 - 2 e obter 1', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('1');
  });

  it('deve multiplicar 6 * 2 e obter 12', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('12');
  });

  it('deve dividir 6 / 2 e obter 3', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3');
  });

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  });
});
