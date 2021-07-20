import { useEffect, useRef, useState } from 'react';

import getProductsFromApiOrDB from '../../services/catalogServices/catalogServices';

import Product from './components/Product/Product';
import Searcher from './components/Searcher/Searcher';

import styles from './Catalog.scss';

/**
 * Product list.
 *
 * @param {object} db - Dexie DB.
 * @returns {Object} JSX
 */
const Catalog = ({ db }) => {
  const [products, setProducts] = useState(null);
  const defaultProducts = useRef([]);

  /**
   * Call to the api to fetch the products or consult to indexedDB.
   */
  useEffect(async () => {
    const productsData = await getProductsFromApiOrDB(db);

    defaultProducts.current = productsData;
    setProducts(productsData);
  }, []);

  if (!products) {
    return null;
  }

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
        <p className={styles.error}>Products no found</p>
      )}
    </div>
  );
};

export default Catalog;
