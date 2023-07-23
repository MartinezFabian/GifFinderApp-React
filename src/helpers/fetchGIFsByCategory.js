export const fetchGIFsByCategory = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ufNCM9bsAJOkFo4TCU7mFrLQLuHOh0fC&q=${category}&limit=${10}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const { data } = await response.json();

      const gifs = data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url,
        };
      });

      return gifs;
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
};
