import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('App renders', () => {
    render(<App />);

    // screen.debug()
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});