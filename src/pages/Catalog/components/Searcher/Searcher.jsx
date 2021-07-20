import styles from './Searcher.scss';

/**
 * Product searcher.
 *
 * @param {function} onChange - Function to call when the input change.
 * @param {Object} defaultProducts - The default products without filters.
 * @returns {Object} JSX
 */
const Searcher = ({ onChange, defaultProducts }) => {
  /**
   * Filter the list according to the word entered.
   *
   * @param {Object} searchedWord - The searched word.
   */
  const filterBySearch = async (searchedWord) => {
    const filteredProducts = defaultProducts.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchedWord) ||
        product.model.toLowerCase().includes(searchedWord)
    );

    if (filteredProducts.length !== 0) {
      onChange(filteredProducts);
    } else {
      onChange([]);
    }
  };

  return (
    <label className={styles.label} htmlFor="searcher">
      Search a product
      <input
        className={styles.input}
        id="searcher"
        type="text"
        placeholder="Liquid Z6, Iconia Tab..."
        onChange={(e) => filterBySearch(e.target.value.toLowerCase())}
      />
    </label>
  );
};

export default Searcher;
