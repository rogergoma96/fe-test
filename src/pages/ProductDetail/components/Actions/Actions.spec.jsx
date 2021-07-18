import { act, screen, render, fireEvent } from '@testing-library/react';

import addToCartServiceMock from '../../../../services/addToCartServices/__mocks__/addToCartServiceMock.json';

import Actions from './Actions';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => addToCartServiceMock })
);

describe('<Actions />', () => {
  const props = {
    colors: ['Black', 'White', 'Red'],
    internalMemory: ['16GB', '32GB'],
    price: '170',
    productId: '1234',
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

  it('should update cart number when add product to cart', async () => {
    const spy = jest.spyOn(window, 'dispatchEvent');
    render(<Actions {...props} />);

    await act(async () => fireEvent.click(screen.getByRole('button')));

    expect(spy).toHaveBeenCalled();
  });

  it('should render without price', () => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.price = '';
    render(<Actions {...newProps} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should select different color', () => {
    render(<Actions {...props} />);
    fireEvent.change(screen.getByTestId('colors'), { target: { value: 2 } });
  });

  it('should select different internal memory', () => {
    render(<Actions {...props} />);
    fireEvent.change(screen.getByTestId('internalMemory'), {
      target: { value: 2 },
    });
  });
});
