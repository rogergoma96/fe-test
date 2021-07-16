import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../../utils/testUtils';

import Layout from './Layout';

describe('Layout', () => {
  it('should render with logo', () => {
    renderWithRouter(<Layout />);

    expect(screen.getByText('FE-TEST')).toBeInTheDocument();
  });

  it('should simulate click in the logo', () => {
    renderWithRouter(<Layout />, { route: '/productId' });

    expect(window.location.pathname).toBe('/productId');
    fireEvent.click(screen.getByText('FE-TEST'));
    expect(window.location.pathname).toBe('/');
  });
});
