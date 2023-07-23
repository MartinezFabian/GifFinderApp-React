import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['Goku']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <header>
        <h1>Buscador de GIFs</h1>

        <AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)}></AddCategory>
      </header>

      <main>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </main>
    </>
  );
};
