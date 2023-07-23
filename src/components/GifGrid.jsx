import { useEffect, useState } from 'react';
import { fetchGIFsByCategory } from '../helpers/fetchGIFsByCategory';

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
    <div>
      <h3>{category}</h3>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>{gif.title}</li>
        ))}
      </ul>
    </div>
  );
};
