import styles from './Info.scss';

/**
 * Main information of the product.
 *
 * @param {string} brand - Product brand.
 * @param {string} model - Product model.
 * @param {string} price - Product price.
 * @returns {Object} JSX
 */
const Info = ({ brand, model, price }) => (
  <div className={styles.container}>
    <h1 className={styles.model}>
      {brand} {model}
    </h1>
    {price ? (
      <p className={styles.price}>{price} €</p>
    ) : (
      <p className={styles['sold-out']}>SOLD OUT</p>
    )}
  </div>
);

export default Info;
