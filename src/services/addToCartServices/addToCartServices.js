const host = 'https://front-test-api.herokuapp.com';

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
