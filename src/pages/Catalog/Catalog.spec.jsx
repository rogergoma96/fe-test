import { screen, render, waitFor } from '@testing-library/react';
import Catalog from './Catalog';
import getProductsMock from '../../services/catalogServices/__mocks__/getProductsMock.json';

global.fetch = jest.fn(() => Promise.resolve({ json: () => getProductsMock }));

describe('Catalog', () => {
  it('should render without crashing', async () => {
    render(<Catalog />);

    await waitFor(() => screen.getByTestId('product-catalog'));

    expect(screen.getByTestId('product-catalog')).toBeTruthy();
  });

  it('should render with products', async () => {
    render(<Catalog />);

    await waitFor(() => screen.getByText('M900'));

    expect(screen.getByText('M900')).toBeTruthy();
    expect(screen.getByText('Acer')).toBeTruthy();
    expect(screen.getByText('Iconia Talk S')).toBeTruthy();
    expect(screen.getByText('170 €')).toBeTruthy();
  });
});
