import { screen, waitFor } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import renderWithRouter from '../../utils/testUtils';

import getProductDetailMock from '../../services/productDetailServices/__mocks__/getProductDetailMock.json';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => getProductDetailMock })
);

describe('<ProductDetail />', () => {
  it('should render without crashing', async () => {
    renderWithRouter(<ProductDetail />);

    await waitFor(() => screen.getByText('Acer Iconia Tab 10 A3-A40'));

    expect(screen.getByText('Acer Iconia Tab 10 A3-A40')).toBeTruthy();
  });
});
