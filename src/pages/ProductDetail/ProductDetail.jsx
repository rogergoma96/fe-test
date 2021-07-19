import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getProductFromApiOrDB from '../../services/productDetailServices/productDetailServices';

import Actions from './components/Actions/Actions';
import Info from './components/Info/Info';
import Specifications from './components/Specifications/Specifications';

import styles from './ProductDetail.scss';

/**
 * Product detail page.
 *
 * @returns {Object} JSX
 */
const ProductDetail = ({ db }) => {
  const { search } = useLocation();
  const [product, setProduct] = useState(null);

  /**
   * Call the api to get the product information.
   */
  useEffect(async () => {
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const productData = await getProductFromApiOrDB(db, id);

    setProduct(productData);
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div className={styles['product-detail']}>
      <img
        width="160"
        height="212"
        alt={product.model}
        className={styles.image}
        src={product.imgUrl}
      />
      <div className={styles['container-info']}>
        <Info
          brand={product.brand}
          model={product.model}
          price={product.price}
        />
        <Actions
          colors={product.colors}
          productId={product.id}
          price={product.price}
          internalMemory={product.internalMemory}
        />
        <Specifications
          battery={product.battery}
          bluetooth={product.bluetooth}
          cpu={product.cpu}
          displaySize={product.displaySize}
          dimentions={product.dimentions}
          os={product.os}
          primaryCamera={product.primaryCamera}
          ram={product.ram}
          secondaryCmera={product.secondaryCmera}
          weight={product.weight}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
