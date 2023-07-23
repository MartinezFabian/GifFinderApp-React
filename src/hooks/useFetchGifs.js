import { useEffect, useState } from 'react';
import { fetchGIFsByCategory } from '../helpers/fetchGIFsByCategory';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const response = await fetchGIFsByCategory(category);
    setGifs(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return {
    gifs: gifs,
    isLoading: isLoading,
  };
};
