import { Redirect } from 'react-router-dom';
import Dexie from 'dexie';

import Catalog from '../pages/Catalog/Catalog';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

/**
 * Aplication routes
 */
const routeConfig = [
  {
    path: '/products',
    component: (props) => <Catalog db={new Dexie('Catalog')} {...props} />,
    exact: true,
  },
  {
    path: '/products/:model',
    component: (props) => (
      <ProductDetail db={new Dexie('ProductDetail')} {...props} />
    ),
    exact: true,
  },
  {
    path: '/',
    component: () => <Redirect to="/products" />,
    exact: true,
  },
];

export default routeConfig;
