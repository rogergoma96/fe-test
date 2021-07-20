const host = 'https://front-test-api.herokuapp.com';

/**
 * Get specific product from the api.
 *
 * @returns {Object[]} Products list
 */
const getProductFromApi = async (id) => {
  const response = await fetch(`${host}/api/product/${id}`);
  return response.json();
};

/**
 * Get specific product from indexedDB.
 * If it is not posible, get the product from the api.
 *
 * @param {object} db - Dexie DB.
 * @returns {Object[]} Products list
 */
const getProductFromApiOrDB = async (db, id) => {
  db.version(1).stores({ product: 'id,value' });
  db.open();

  const dbProduct = await db.product.get(id);
  const actualDate = new Date().getTime();

  if (!dbProduct) {
    const apiProduct = await getProductFromApi(id);

    db.product.add({
      id,
      createdTime: actualDate,
      product: apiProduct,
    });

    db.close();
    return apiProduct;
  }

  if (actualDate - dbProduct.createdTime >= 3600000) {
    const apiProduct = await getProductFromApi(id);
    db.product.update(id, {
      id,
      createdTime: actualDate,
      product: apiProduct,
    });

    db.close();
    return apiProduct;
  }

  db.close();
  return dbProduct.product;
};

export default getProductFromApiOrDB;
