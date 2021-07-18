import { useState } from 'react';
import Select from '../../../../components/Select/Select';
import addToCart from '../../../../services/addToCartServices/addToCartServices';

import styles from './Actions.scss';

/**
 * Product actions necessary to add the product to the cart.
 *
 * @param {Object[]} colors - Available product colors.
 * @param {string} productId - Product id.
 * @param {Object[]} internalMemory - Product internal memory.
 * @param {string} price - Product price.
 * @returns {Object} JSX
 */
const Actions = ({ colors, productId, internalMemory, price }) => {
  const [color, setColor] = useState(1);
  const [memory, setMemory] = useState(1);

  /**
   * Add the product to the cart and update count number.
   *
   * @param {Object} e - Event data.
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await addToCart({
      id: productId,
      colorCode: color,
      storageCode: memory,
    });

    window.dispatchEvent(new CustomEvent('addToBag', { detail: response }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} data-testid="pdp.actions">
      {internalMemory && (
        <Select
          id="internalMemory"
          label="Internal memory"
          options={internalMemory}
          onChange={(e) => setMemory(e.target.selectedIndex + 1)}
        />
      )}
      {colors && (
        <Select
          id="colors"
          label="Color"
          options={colors}
          onChange={(e) => setColor(e.target.selectedIndex + 1)}
        />
      )}
      {price && (
        <button className={styles.button} type="submit">
          ADD TO CART
        </button>
      )}
    </form>
  );
};
export default Actions;
