import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        component={(props) => <ProductDetail {...props} />}
        exact
        path="/product"
      />
      <Route component={(props) => <Catalog {...props} />} exact path="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
