import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';
import styles from './GifGrid.module.css';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <section className={styles.category}>
      <h2 className={styles.category__heading}>{category}</h2>

      {isLoading ? (
        <div className={styles.category__loader}>
          <span data-testid="loader" className={styles.loader}></span>
        </div>
      ) : null}

      <div className={styles.category__grid}>
        {gifs.map(({ id, title, url }) => (
          <GifCard key={id} title={title} url={url}></GifCard>
        ))}
      </div>
    </section>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
