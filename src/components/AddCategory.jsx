import { useState } from 'react';

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
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Buscar Gif" onChange={onInputChange} value={inputValue} />
      <input type="submit" value="Buscar" onSubmit={onFormSubmit} />
    </form>
  );
};
