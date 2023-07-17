import { useState } from 'react';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['category 1', 'category 2', 'category 3']);

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <ul>
        {categories.map((category) => (
          <li key={category}> {category}</li>
        ))}
      </ul>
    </>
  );
};
