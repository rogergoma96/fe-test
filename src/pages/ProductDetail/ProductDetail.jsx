import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from '../../services/productDetailServices/productDetailServices';

import styles from './ProductDetail.scss';

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
        <div className={styles['main-info']}>
          <h1 className={styles.model}>
            {product.brand} {product.model}
          </h1>
          <p className={styles.price}>{product.price} €</p>
        </div>
        <form className={styles.actions}>
          <p className={styles['select-label']}>Internal memory</p>
          <select className={styles.select}>
            {product.internalMemory.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <p className={styles['select-label']}>Color</p>
          <select className={styles.select}>
            {product.colors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
          <button className={styles.button} type="submit">
            ADD TO CART
          </button>
        </form>
        <div className={styles.specs}>
          <p className={styles['specs-title']}>Especificaciones</p>
          <p className={styles.cpu}>CPU: {product.cpu}</p>
          <p className={styles.ram}>RAM: {product.ram}</p>
          <p className={styles.os}>SISTEMA OPERATIVO: {product.os}</p>
          <p className={styles['display-size']}>
            TAMAÑO: {product.displaySize}
          </p>
          <p className={styles.battery}>BATERIA: {product.battery}</p>
          <p className={styles['primary-cam']}>
            CAMARA PRINCIPAL: {product.primaryCamera}
          </p>
          <p className={styles['secondary-cam']}>
            CAMARA SECONDARIA: {product.secondaryCmera}
          </p>
          <p className={styles.dimentions}>DIMENSIONES: {product.dimentions}</p>
          <p className={styles.weight}>PESO: {product.weight} gr</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
