import { fireEvent, render, screen } from '@testing-library/react';

import Select from './Select';

describe('<Select />', () => {
  const props = {
    id: 'colors',
    label: 'Color',
    options: ['Black', 'White'],
    onChange: jest.fn(),
  };

  it('should render with 2 options', () => {
    render(<Select {...props} />);

    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Black')).toBeInTheDocument();
    expect(screen.getByText('White')).toBeInTheDocument();
  });

  it('should be select other option', () => {
    const spy = jest.spyOn(props, 'onChange');

    render(<Select {...props} />);

    fireEvent.change(screen.getByTestId('colors'), { target: { value: 2 } });

    expect(spy).toHaveBeenCalled();
  });
});
