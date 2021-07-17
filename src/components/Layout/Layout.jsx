import { Link } from 'react-router-dom';
import CartIcon from '../Icons/cartIcon';
import styles from './Layout.scss';

/**
 * Layout for all pages.
 * It is divided into a header and the main content.
 *
 * @param {object} children - The component to render into the main section.
 * @returns {object} JSX
 */
const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        FE-TEST
      </Link>
      <div className={styles.cart}>
        <CartIcon />
        <p className={styles.items}>1</p>
      </div>
    </header>
    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
