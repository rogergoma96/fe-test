import { useEffect, useState } from 'react';
import getProducts from '../../services/catalogServices/catalogServices';
import styles from './Catalog.scss';
import Product from './components/Product/Product';

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
    <div className={styles.catalog}>
      <h1 className={styles.title}>Mobiles</h1>
      <h2 className={styles.description}>
        Free phones and smartphones from the best brands and exceptional prices.
      </h2>
      <div className={styles.products}>
        {products.map((product) => (
          <Product
            key={product.id}
            brand={product.brand}
            id={product.id}
            imgUrl={product.imgUrl}
            model={product.model}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
