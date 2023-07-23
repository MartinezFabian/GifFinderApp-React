import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import styles from './GifFinderApp.module.css';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['Goku']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <header className={`${styles.header} ${styles.header__container}`}>
        <h1 className={styles.header__heading}>Buscador de GIFs</h1>

        <AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)}></AddCategory>
      </header>

      <main className={styles.main__container}>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </main>
    </>
  );
};
