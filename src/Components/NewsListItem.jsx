export default function NewsListItem({ article }) {
  const { id, title, text, picture } = article;

  /*let imageURL = '';*/
  /* try {
    imageURL = require(`../assets copy/images/${picture}`);
  } catch {
    imageURL = favicon;
  } */

  return (
    <section>
      <img src={picture} />
      <div className='article_content'>
        <h2>{id}</h2>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  );
}
