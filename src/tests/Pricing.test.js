import { render, screen } from '@testing-library/react';
import Pricing from '../pages/Pricing';

test('renders pricing component', () => {
  render(<Pricing />);
  const headingElement = screen.getByRole('heading', { name: /pricing/i });
  expect(headingElement).toBeInTheDocument();
});