import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import Layout from './components/Layout/Layout';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          component={(props) => <ProductDetail {...props} />}
          exact
          path="/:id"
        />
        <Route component={(props) => <Catalog {...props} />} exact path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);