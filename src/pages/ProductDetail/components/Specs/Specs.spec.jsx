import { render, screen } from '@testing-library/react';

import Specs from './Specs';

describe('<Specs />', () => {
  const props = {
    cpu: 'Quad-core 1.6 GHz',
    bluetooth: ['4.0', 'A2DP', 'LE'],
    ram: '2 GB RAM',
    os: 'Android 5.0 (Lollipop)',
    displaySize: '1920 x 1200 pixels (~283 ppi pixel density)',
    battery: 'Non-removable Li-Po 4420 mAh battery',
    primaryCamera: '5 MP',
    secondaryCmera: '2 MP',
    dimentions: '217.9 x 127 x 8.6 mm (8.58 x 5.0 x 0.34 in)',
    weight: '353.8',
  };

  it('should render without crashing', () => {
    render(<Specs />);

    expect(screen.getByText('Product specifications')).toBeInTheDocument();
  });

  it('should render with all specs', () => {
    render(<Specs {...props} />);

    expect(screen.getByText('Quad-core 1.6 GHz')).toBeInTheDocument();
    expect(screen.getByText('4.0 - A2DP - LE')).toBeInTheDocument();
    expect(screen.getByText('2 GB RAM')).toBeInTheDocument();
    expect(screen.getByText('Android 5.0 (Lollipop)')).toBeInTheDocument();
    expect(
      screen.getByText('1920 x 1200 pixels (~283 ppi pixel density)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Non-removable Li-Po 4420 mAh battery')
    ).toBeInTheDocument();
    expect(screen.getByText('5 MP')).toBeInTheDocument();
    expect(screen.getByText('2 MP')).toBeInTheDocument();
    expect(
      screen.getByText('217.9 x 127 x 8.6 mm (8.58 x 5.0 x 0.34 in)')
    ).toBeInTheDocument();
    expect(screen.getByText('353.8 g')).toBeInTheDocument();
  });

  it('should render without cpu specification', () => {
    const newProps = JSON.parse(JSON.stringify(props));
    newProps.cpu = '';
    render(<Specs {...newProps} />);

    expect(screen.queryByText('CPU')).not.toBeInTheDocument();
  });
});
