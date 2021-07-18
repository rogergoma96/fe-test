import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getProduct from '../../services/productDetailServices/productDetailServices';

import Actions from './components/Actions/Actions';
import Info from './components/Info/Info';
import Specs from './components/Specs/Specs';

import styles from './ProductDetail.scss';

/**
 * Product detail page.
 *
 * @returns {Object} JSX
 */
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  /**
   * Call the api to get the product information.
   */
  const fetchData = async () => {
    const productData = await getProduct(id);
    setProduct(productData);
  };

  /**
   * Initialize the necessary data when mounting the component.
   */
  useEffect(() => {
    fetchData();
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div className={styles['product-detail']}>
      <img alt={product.model} className={styles.image} src={product.imgUrl} />
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
        <Specs
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
