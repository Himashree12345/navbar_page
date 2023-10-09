import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders home component', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { name: /Home/i });
  expect(headingElement).toBeInTheDocument();
});

