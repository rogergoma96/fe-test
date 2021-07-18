import styles from './Select.scss';

/**
 * Custom select.
 *
 * @param {string} label - Description of the select.
 * @param {Object[]} options - Select options.
 * @param {string} id - Select identifier.
 * @param {function} onChange - Function to call when select another option.
 * @returns {Object} JSX
 */
const Select = ({ label, options, id, onChange }) => (
  <label className={styles.label} htmlFor={id}>
    {label}
    <select
      data-testid={id}
      className={styles.select}
      id={id}
      onChange={(e) => onChange(e)}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </label>
);

export default Select;
