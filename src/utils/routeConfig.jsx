import { Redirect } from 'react-router-dom';
import Catalog from '../pages/Catalog/Catalog';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const routeConfig = [
  {
    path: '/products',
    component: (props) => <Catalog {...props} />,
    exact: true,
  },
  {
    path: '/products/:model',
    component: (props) => <ProductDetail {...props} />,
    exact: true,
  },
  {
    path: '/',
    component: () => <Redirect to="/products" />,
    exact: true,
  },
];

export default routeConfig;
