import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';

test('renders learn react link', () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/calculadora/i);
  expect(linkElement).toBeInTheDocument();
});
