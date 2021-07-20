const host = 'https://front-test-api.herokuapp.com';

/**
 * Add product to the cart.
 *
 * @param {Object} data - Object with id, colorCode and storageCode.
 * @returns {Object} Response of the endpoint.
 */
const addToCart = async (data) => {
  const response = await fetch(`${host}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default addToCart;
