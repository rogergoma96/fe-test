const host = 'https://front-test-api.herokuapp.com';

/**
 * Get specific product.
 *
 * @returns {object[]} Products list
 */
const getProduct = async (id) => {
  const response = await fetch(`${host}/api/product/${id}`);
  return response.json();
};

export default getProduct;
