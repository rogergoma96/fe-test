import { screen, waitFor } from '@testing-library/react';
import Catalog from './Catalog';
import renderWithRouter from '../../utils/testUtils';

jest.mock('../../services/catalogServices/catalogServices', () => ({
  __esModule: true,
  default: jest.fn(() => [
    {
      brand: 'Acer',
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
      model: 'Iconia Talk S',
      price: '170',
    },
    {
      brand: 'Samsung',
      id: 'y0gsWxpC3VOMjM-QOtYAy',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/y0gsWxpC3VOMjM-QOtYAy',
      model: 'M900',
      price: '250',
    },
    {
      brand: 'Iphone',
      id: 'pMZMhe_ZaAPZoaCCtlDrg',
      imgUrl:
        'https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg',
      model: 'Liquid Jade 2',
      price: '',
    },
  ]),
}));

describe('<Catalog />', () => {
  it('should render without crashing', async () => {
    renderWithRouter(<Catalog />);

    await waitFor(() => screen.getByText('Mobiles'));

    expect(screen.getByText('Mobiles')).toBeTruthy();
  });

  it('should render with products', async () => {
    renderWithRouter(<Catalog />);

    await waitFor(() => screen.getByText('Iconia Talk S'));

    expect(screen.getByText('Iconia Talk S')).toBeTruthy();
    expect(screen.getByText('Acer')).toBeTruthy();
    expect(screen.getByText('170 €')).toBeTruthy();
  });
});
