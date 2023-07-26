import { useState } from 'react';
import styles from './AddCategory.module.css';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const value = inputValue.trim().toLowerCase();

    if (value.length <= 1) return;

    onNewCategory(value);

    setInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Buscar Gif"
        onChange={onInputChange}
        value={inputValue}
        className={styles.form__input}
      />
      <button type="submit" onSubmit={onFormSubmit} className={styles.form__button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className={styles.form__icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
