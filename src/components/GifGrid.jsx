import { useEffect, useState } from 'react';
import { fetchGIFsByCategory } from '../helpers/fetchGIFsByCategory';
import { GifCard } from './GifCard';

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const response = await fetchGIFsByCategory(category);
    setGifs(response);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <section>
      <h2>{category}</h2>
      <div>
        {gifs.map(({ id, title, url }) => (
          <GifCard key={id} title={title} url={url}></GifCard>
        ))}
      </div>
    </section>
  );
};
