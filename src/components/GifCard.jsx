export const GifCard = ({ id, title, url }) => {
  return (
    <article>
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </article>
  );
};
