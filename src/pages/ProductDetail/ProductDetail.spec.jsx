import { screen, waitFor } from '@testing-library/react';

import ProductDetail from './ProductDetail';
import renderWithRouter from '../../utils/testUtils';

jest.mock('../../services/productDetailServices/productDetailServices', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    id: 'xyPoqGJxYR4Nn3yVGQcfI',
    brand: 'Acer',
    model: 'Iconia Tab 10 A3-A40',
  })),
}));

describe('<ProductDetail />', () => {
  it('should render with correct image', async () => {
    renderWithRouter(<ProductDetail db={{}} />);

    await waitFor(() => screen.getByAltText('Iconia Tab 10 A3-A40'));

    expect(screen.getByAltText('Iconia Tab 10 A3-A40')).toBeTruthy();
  });
});
