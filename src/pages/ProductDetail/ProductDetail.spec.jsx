import { screen, waitFor } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import renderWithRouter from '../../utils/testUtils';

import getProductDetailMock from '../../services/productDetailServices/__mocks__/getProductDetailMock.json';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => getProductDetailMock })
);

describe('<ProductDetail />', () => {
  it('should render with correct image', async () => {
    renderWithRouter(<ProductDetail />);

    await waitFor(() => screen.getByAltText('Iconia Tab 10 A3-A40'));

    expect(screen.getByAltText('Iconia Tab 10 A3-A40')).toBeTruthy();
  });
});
