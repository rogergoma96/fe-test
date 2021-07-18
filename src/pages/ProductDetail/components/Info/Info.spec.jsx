import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('<Info />', () => {
  const props = {
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
  };

  it('should render with product price', () => {
    render(<Info {...props} />);

    expect(screen.getByText('Acer Iconia Talk S')).toBeInTheDocument();
    expect(screen.getByText('170 €')).toBeInTheDocument();
    expect(screen.queryByText('SOLD OUT')).not.toBeInTheDocument();
  });

  it('should render without product price', () => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.price = '';
    render(<Info {...newProps} />);

    expect(screen.getByText('Acer Iconia Talk S')).toBeInTheDocument();
    expect(screen.queryByText('170 €')).not.toBeInTheDocument();
    expect(screen.getByText('SOLD OUT')).toBeInTheDocument();
  });
});
