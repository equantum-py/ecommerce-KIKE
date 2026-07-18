import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Antojo Casero branding', () => {
  render(<App />);
  expect(screen.getAllByText(/Antojo Casero/i).length).toBeGreaterThan(0);
});
