import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about component', () => {
  render(<About />);
  const headingElement = screen.getByRole('heading', { name: /About/i });
  expect(headingElement).toBeInTheDocument();
});
