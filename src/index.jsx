import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Dexie from 'dexie';

import Catalog from './pages/Catalog/Catalog';
import Layout from './components/Layout/Layout';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import '@babel/polyfill';

import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          component={(props) => (
            <ProductDetail db={new Dexie('ProductDetail')} {...props} />
          )}
          exact
          path="/:id"
        />
        <Route
          component={(props) => (
            <Catalog db={new Dexie('Catalog')} {...props} />
          )}
          exact
          path="/"
        />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);
