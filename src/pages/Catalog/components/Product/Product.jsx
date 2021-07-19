import { Link } from 'react-router-dom';

import styles from './Product.scss';

/**
 * Product item of catalog list.
 *
 * @param {string} brand - Product brand.
 * @param {string} id - Product identifier.
 * @param {string} imgUrl - product image url.
 * @param {string} model - Product model.
 * @param {string} price - Product price.
 * @returns {Object} JSX
 */
const Product = ({ brand, id, imgUrl, model, price }) => {
  const transformedModel = model.replaceAll(' ', '_');
  const transformedBrand = brand.replaceAll(' ', '_');

  return (
    <Link
      to={`/products/${transformedBrand}_${transformedModel}?id=${id}`}
      className={styles.product}
    >
      <img
        className={styles.image}
        width="160"
        height="212"
        alt={model}
        src={imgUrl}
        loading="lazy"
      />
      <div className={styles.info}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.model}>{model}</p>
        {price ? (
          <p className={styles.price}>{price} €</p>
        ) : (
          <p className={styles['sold-out']}>SOLD OUT</p>
        )}
      </div>
    </Link>
  );
};

export default Product;
