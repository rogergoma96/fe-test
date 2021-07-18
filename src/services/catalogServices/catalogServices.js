const host = 'https://front-test-api.herokuapp.com';

/**
 * Get all products.
 *
 * @returns {Object[]} Products list
 */
const getProductsFromApi = async () => {
  const response = await fetch(`${host}/api/product`);
  return response.json();
};

const getProductsFromApiOrDB = async (db) => {
  db.version(1).stores({ products: 'id,value' });
  db.open();

  const dbProducts = await db.products.get('products');
  const actualDate = new Date().getTime();

  if (!dbProducts) {
    const apiProducts = await getProductsFromApi();

    db.products.add({
      id: 'products',
      createdTime: actualDate,
      products: apiProducts,
    });

    db.close();
    return apiProducts;
  }

  if (actualDate - dbProducts.createdTime >= 3600000) {
    const apiProducts = await getProductsFromApi();
    db.products.update('products', {
      id: 'products',
      createdTime: actualDate,
      products: apiProducts,
    });

    db.close();
    return apiProducts;
  }

  db.close();
  return dbProducts.products;
};

export default getProductsFromApiOrDB;
