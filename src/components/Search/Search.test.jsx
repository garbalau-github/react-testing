import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

// Mock Fake Function
const onChange = jest.fn();

describe('Search', () => {
  it('Search renders', () => {
    render(
      <Search value='' onChange={onChange}>
        Find:
      </Search>
    );

    expect(screen.getByText('Find:')).toBeInTheDocument();
  });

  it('Search renders without children', () => {
    render(<Search value='' onChange={onChange} />);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('Search renders without placeholder', () => {
    render(<Search value='' onChange={onChange} />);

    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  it('Search works with custom placeholder', () => {
    render(<Search value='' placeholder='Enter text...' onChange={onChange} />);

    expect(screen.getByPlaceholderText(/enter text.../i)).toBeInTheDocument();
  });

  it('Search onChange function works', () => {
    render(
      <Search value='' onChange={onChange}>
        Find:
      </Search>
    );

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toBeCalledTimes(5); // React (5 symbols)
  });

  it('Search dynamic CSS classes work', () => {
    render(<Search value='abc' onChange={onChange} />);

    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText('Search')).toHaveClass('label');
  });

  it('Search snapshot', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const search = render(
      <Search value='' onChange={onChange}>
        Find:
      </Search>
    );

    expect(search).toMatchSnapshot();
  });
});
