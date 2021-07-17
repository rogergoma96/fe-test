import { screen, waitFor } from '@testing-library/react';
import Catalog from './Catalog';
import renderWithRouter from '../../utils/testUtils';
import getProductsMock from '../../services/catalogServices/__mocks__/getProductsMock.json';

global.fetch = jest.fn(() => Promise.resolve({ json: () => getProductsMock }));

describe('Catalog', () => {
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
