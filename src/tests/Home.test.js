import { render, screen } from '@testing-library/react';
import HomePage from '../pages/Home.js';

test('renders homepage component', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { name: /welcome to my website/i });
  expect(headingElement).toBeInTheDocument();
});
