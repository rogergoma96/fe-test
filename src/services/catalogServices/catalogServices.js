const host = 'https://front-test-api.herokuapp.com';

/**
 * Get all products.
 *
 * @returns {Object[]} Products list
 */
const getProducts = async () => {
  const response = await fetch(`${host}/api/product`);
  return response.json();
};

export default getProducts;
