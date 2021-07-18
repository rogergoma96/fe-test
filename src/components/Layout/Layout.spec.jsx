import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import renderWithRouter from '../../utils/testUtils';

import Layout from './Layout';

describe('Layout', () => {
  it('should update cart counter', async () => {
    renderWithRouter(<Layout />, { route: '/productId' });

    screen.getByText('0');

    await act(async () => {
      const customEvent = new CustomEvent('addToBag', { detail: { count: 1 } });

      window.dispatchEvent(customEvent);
    });

    await waitFor(() => screen.getByText('1'));

    screen.getByText('1');
  });

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
