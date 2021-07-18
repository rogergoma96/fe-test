import { useRef } from 'react';
import styles from './Specs.scss';

/**
 * Product specifications.
 *
 * @param {string || Object []} cpu
 * @param {string || Object[]} bluetooth
 * @param {string || Object []} ram
 * @param {string || Object []} os
 * @param {string || Object []} displaySize
 * @param {string || Object []} battery
 * @param {string || Object []} primaryCamera
 * @param {string || Object []} secondaryCmera
 * @param {string || Object []} dimentions
 * @param {string || Object []} weight
 * @returns
 */
const Specs = ({
  cpu,
  bluetooth,
  ram,
  os,
  displaySize,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
}) => {
  /**
   * Validate if the data is not empty.
   * If the data is array, transform to string.
   *
   * @param {string || Object[]} spec - A product specification.
   * @returns {string || null}
   */
  const validateSpec = (spec) => {
    if (!spec || spec === '-') {
      return null;
    }

    if (Array.isArray(spec)) {
      return spec.map((item, index) => `${index !== 0 ? ' -' : ''} ${item}`);
    }

    return spec;
  };

  /**
   * Transform data to JSON object.
   *
   * @returns {Object} dataSpecs - Transformed data.
   */
  const initializeSpecs = () => {
    const dataSpecs = {
      cpu: validateSpec(cpu),
      ram: validateSpec(ram),
      'operating system': validateSpec(os),
      'display size': validateSpec(displaySize),
      battery: validateSpec(battery),
      'primary camera': validateSpec(primaryCamera),
      'secondary camera': validateSpec(secondaryCmera),
      dimentions: validateSpec(dimentions),
      weight: `${validateSpec(weight) ? `${weight} g` : ''}`,
      bluetooth: validateSpec(bluetooth),
    };

    return dataSpecs;
  };

  const specs = useRef(initializeSpecs());

  return (
    <div className={styles.specs}>
      <p className={styles['specs-title']}>Product specifications</p>
      {Object.entries(specs.current).map(
        ([specTitle, specValue]) =>
          specValue && (
            <p key={specTitle} className={styles.spec}>
              <span className={styles['spec-title']}>{specTitle}</span>
              <span className={styles['spec-description']}>{specValue}</span>
            </p>
          )
      )}
    </div>
  );
};

export default Specs;
