import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/testUtils';
import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  it('should render without crashing', () => {
    renderWithRouter(<Breadcrumbs />);

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
