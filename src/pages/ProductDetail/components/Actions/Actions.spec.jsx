import { screen, render, fireEvent } from '@testing-library/react';
import Actions from './Actions';

describe('<Actions />', () => {
  const props = {
    colors: ['Black', 'White', 'Red'],
    internalMemory: ['16GB', '32GB'],
    price: '170',
  };

  it('should render without crashing', () => {
    render(<Actions />);

    expect(screen.getByTestId('pdp.actions')).toBeInTheDocument();
  });

  it('should render with 2 options of internal memory', () => {
    render(<Actions {...props} />);

    expect(screen.getByText('Internal memory')).toBeInTheDocument();
    expect(screen.getByText('16GB')).toBeInTheDocument();
    expect(screen.getByText('32GB')).toBeInTheDocument();
  });

  it('should render with 3 colors', () => {
    render(<Actions {...props} />);

    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Black')).toBeInTheDocument();
    expect(screen.getByText('White')).toBeInTheDocument();
    expect(screen.getByText('Red')).toBeInTheDocument();
  });

  it('should update cart number when add product to cart', () => {
    render(<Actions {...props} />);

    fireEvent.click(screen.getByRole('button'));
  });

  it('should render without price', () => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.price = '';
    render(<Actions {...newProps} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
