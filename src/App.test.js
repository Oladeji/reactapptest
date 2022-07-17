import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learnlink');
  expect(linkElement).toBeInTheDocument();
});

test('expect to redirect to ...', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learnlink');
  expect(linkElement.href).toContain("https://reactjs.org");
});
