import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

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
