import styles from './GifCard.module.css';

export const GifCard = ({ id, title, url }) => {
  return (
    <article className={styles.card}>
      <img src={url} alt={title} className={styles.card__img} />
      <h3 className={styles.card__title}>{title}</h3>
    </article>
  );
};
