import { fireEvent, render, screen } from '@testing-library/react';

import Searcher from './Searcher';

import getProductsMock from '../../../../services/catalogServices/__mocks__/getProductsMock.json';

describe('<Searcher />', () => {
  const props = {
    onChange: jest.fn(),
    defaultProducts: getProductsMock,
  };

  it('should render without crashing', () => {
    render(<Searcher />);

    screen.getByPlaceholderText('Liquid Z6, Iconia Tab...');
  });

  it('should search a valid word', () => {
    const spy = jest.spyOn(props, 'onChange');
    render(<Searcher {...props} />);

    fireEvent.change(screen.getByPlaceholderText('Liquid Z6, Iconia Tab...'), {
      target: { value: 'acer' },
    });

    expect(spy).toHaveBeenCalledWith([getProductsMock[0]]);
  });

  it('should search a invalid word', () => {
    const spy = jest.spyOn(props, 'onChange');
    render(<Searcher {...props} />);

    fireEvent.change(screen.getByPlaceholderText('Liquid Z6, Iconia Tab...'), {
      target: { value: 'invalid' },
    });

    expect(spy).toHaveBeenCalledWith([]);
  });
});
