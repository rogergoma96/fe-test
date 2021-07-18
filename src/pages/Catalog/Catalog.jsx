import { useEffect, useRef, useState } from 'react';

import getProducts from '../../services/catalogServices/catalogServices';

import Product from './components/Product/Product';

import styles from './Catalog.scss';
import Searcher from './components/Searcher/Searcher';

/**
 * Product list.
 *
 * @returns {Object} JSX
 */
const Catalog = () => {
  const [products, setProducts] = useState([]);
  const defaultProducts = useRef([]);

  /**
   * Call to the api to fetch the products.
   */
  const fetchData = async () => {
    const items = await getProducts();
    setProducts(items);
    defaultProducts.current = items;
  };

  /**
   * Initialize the necessary data when mounting the component.
   */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.catalog}>
      <h1 className={styles.title}>Mobiles</h1>
      <h2 className={styles.description}>
        Free phones and smartphones from the best brands and exceptional prices.
      </h2>
      <Searcher
        defaultProducts={defaultProducts.current}
        onChange={setProducts}
      />
      {products.length !== 0 ? (
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
      ) : (
        <p className={styles.error}>No products found</p>
      )}
    </div>
  );
};

export default Catalog;
