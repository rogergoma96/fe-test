import { useEffect, useState } from 'react';
import getProducts from '../../services/catalogServices/catalogServices';
import styles from './Catalog.scss';

/**
 * Product list.
 *
 * @returns {object} JSX
 */
const Catalog = () => {
  const [products, setProducts] = useState([]);

  /**
   * Call to the api to fetch the products.
   */
  const fetchData = async () => {
    const items = await getProducts();
    setProducts(items);
  };

  /**
   * Initialize the necessary data when mounting the component.
   */
  useEffect(() => {
    fetchData();
  }, []);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.products} data-testid="product-catalog">
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <img alt={product.model} src={product.imgUrl} loading="lazy" />
          <div className={styles.info}>
            <p className={styles.brand}>{product.brand}</p>
            <p className={styles.model}>{product.model}</p>
            {product.price ? (
              <p className={styles.price}>{product.price} €</p>
            ) : (
              <p className={styles['sold-out']}>AGOTADO</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
