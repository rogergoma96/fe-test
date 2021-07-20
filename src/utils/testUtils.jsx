/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

/**
 * Mock react router dom for tests.
 *
 * @param {object} ui 
 * @param {object} route 
 * @returns {function} render function
 */
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export default renderWithRouter;
