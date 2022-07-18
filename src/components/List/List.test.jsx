import { render, screen } from '@testing-library/react';
import List from './List';

// Mock
const data = ['HTML', 'CSS', 'JS'];

describe('List', () => {
  it('List renders', () => {
    render(<List items={data} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });

  it('List renders without data', () => {
    render(<List />);
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('List snapshot', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const list = render(<List items={data} />);
    expect(list).toMatchSnapshot();
  });

  it('List empty snapshot', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const listEmpty = render(<List />);
    expect(listEmpty).toMatchSnapshot();
  });
});
