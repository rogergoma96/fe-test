import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../../../../utils/testUtils';
import Product from './Product';

describe('<Product />', () => {
  const props = {
    brand: 'Acer',
    id: '1',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg',
    model: 'M900',
    price: '170',
  };

  it('should render with all information', () => {
    renderWithRouter(<Product {...props} />);

    expect(screen.getByText('Acer')).toBeTruthy();
    expect(screen.getByText('M900')).toBeTruthy();
    expect(screen.getByText('170 €')).toBeTruthy();
    expect(screen.getByAltText('M900')).toBeTruthy();
  });

  it('should render without price', () => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.price = '';

    renderWithRouter(<Product {...newProps} />);

    expect(screen.getByText('Acer')).toBeTruthy();
    expect(screen.getByText('M900')).toBeTruthy();
    expect(screen.getByText('SOLD OUT')).toBeTruthy();
    expect(screen.getByAltText('M900')).toBeTruthy();
  });

  it('should simulate a click in a product', () => {
    renderWithRouter(<Product {...props} />);

    fireEvent.click(screen.getByAltText('M900'));

    expect(window.location.pathname).toBe('/1');
  });
});
