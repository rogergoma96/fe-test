import { Link } from 'react-router-dom';
import CartIcon from '../Icons/cartIcon';
import styles from './Layout.scss';

const Layout = ({ children }) => (
  <>
    <header className={styles.header} data-testid="header">
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
