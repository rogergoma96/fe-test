const host = 'https://front-test-api.herokuapp.com';

/**
 * Call the API to get all the products.
 *
 * @returns {object[]} Products list
 */
const getProducts = async () => {
  const response = await fetch(`${host}/api/product`);
  return response.json();
};

export default getProducts;
