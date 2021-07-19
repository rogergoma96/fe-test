import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import '@babel/polyfill';

import routeConfig from './utils/routeConfig';

import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        {routeConfig.map((route) => (
          <Route key={route} {...route} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);
