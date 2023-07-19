import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Buscar Gif" onChange={onInputChange} value={inputValue} />
    </form>
  );
};
