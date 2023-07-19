import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['category 1', 'category 2', 'category 3']);

  const onAddCategory = () => {
    setCategories([...categories, 'nuevo valor']);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <AddCategory></AddCategory>

      <ul>
        <button onClick={onAddCategory}>Agregar categoría</button>

        {categories.map((category) => (
          <li key={category}> {category}</li>
        ))}
      </ul>
    </>
  );
};
