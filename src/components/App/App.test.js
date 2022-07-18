import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('App renders', () => {
    render(<App />);

    // screen.debug()
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/find course:/i)).toBeInTheDocument();
  });

  it('App typing in Search works', () => {
    render(<App />);

    // query is used to search for what is not yet on the screen
    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });

  it('App Search filter works', () => {
    render(<App />);

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
  });
});
