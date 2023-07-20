import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)}></AddCategory>

      <ul>
        {categories.map((category) => (
          <li key={category}> {category}</li>
        ))}
      </ul>
    </>
  );
};
