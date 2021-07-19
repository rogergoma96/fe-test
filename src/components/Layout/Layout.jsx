import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CartIcon from '../Icons/cartIcon';

import styles from './Layout.scss';

/**
 * Layout for all pages.
 * It is divided into a header and the main content.
 *
 * @param {Object} children - The component to render into the main section.
 * @returns {Object} JSX
 */
const Layout = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    parseInt(sessionStorage.getItem('cartItems'), 10) || 0
  );

  /**
   * Update shopping cart count.
   *
   * @param {Object} e - Event data.
   */
  const updateShoppingCart = (e) => {
    setCartItems((prevState) => prevState + e.detail.count);
  };

  /**
   * Add listener to update shopping cart count.
   */
  useEffect(() => {
    window.addEventListener('addToBag', (e) => updateShoppingCart(e));

    return () => {
      window.removeEventListener('addToBag', (e) => updateShoppingCart(e));
    };
  }, []);

  /**
   * Update the session storage when the cart items change.
   */
  useEffect(() => {
    sessionStorage.setItem('cartItems', cartItems);
  }, [cartItems]);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          FE-TEST
        </Link>
        <Breadcrumbs />
        <div className={styles.cart}>
          <CartIcon />
          <p className={styles.items}>{cartItems}</p>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
